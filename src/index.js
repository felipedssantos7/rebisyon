const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');
const prompt = require('electron-prompt');
var sqlite3 = require('sqlite3').verbose();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;
let flashcardWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "📚 Rebisyon",
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'front/pages/decks_page.html'));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const dbPath = path.resolve(__dirname, 'back/db/rebisyon.db')
var db = new sqlite3.Database(dbPath);
const database = require(`${__dirname}/back/js/db.js`);

ipcMain.on("rqtGetDks", (event) => {
  var url = event["sender"]["getURL"]();
  database.getDks(db, function (err, rows)  {
    if(err == null) {
      if (url == `file://${__dirname}/front/pages/decks_page.html`) {
        mainWindow.webContents.send("rcvGetDks", rows);
      } else if (url == `file://${__dirname}/front/pages/flashcards_page.html`) {
        flashcardWindow.webContents.send("rcvGetDks", rows);
      }
    } else {
      mainWindow.webContents.send("error");
    }
  });
});

ipcMain.on("rqtGetCdsNbr", (event, state) => {
  database.getCdsCnt(db, state, function (err, row) {
    if(err == null) {
      mainWindow.webContents.send("rcvGetCdsNbr", state, row);
    } else {
      mainWindow.webContents.send("error");
    }
  });
});

ipcMain.on("rqtAddDk", (event, name) => {
  prompt({
    title: 'Nome do baralho',
    label: 'Digite o nome do novo baralho:',
    value: 'Novo baralho',
    inputAttrs: {
      type: 'text'
    },
    type: 'input'
  })
  .then((name) => {
    if(name === null) {
      console.log('user cancelled');
    } else {
      database.addDk(db, name, function () {
        database.getLstDkId(db, function (err, rows) {
          if(err == null) {
            mainWindow.send("rcvAddDk", rows);
          } else {
            mainWindow.webContents.send("error");
          }
        });
      });
    }
  })
  .catch(console.error);
});

ipcMain.on("rqtRmDk", (event, id) => {
  database.rmDk(db, id, function (err) {
    if (err == null) {
      database.rmCd(db, id, function (err) {
        if(err == null) {
          mainWindow.webContents.send("rcvRmDk", id);
        } else {
          mainWindow.webContents.send("error");
        }
      });
    } else {

    }
  });
})

ipcMain.on("openFlashcardPage", (event) => {
  flashcardWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });
  flashcardWindow.loadFile(`${__dirname}/front/pages/flashcards_page.html`);
});

ipcMain.on("rqtGetUrl", (event, sel) => {
  prompt({
    title: 'URL',
    label: 'Digite uma URL:',
    value: 'https://www.google.com.br',
    inputAttrs: {
        type: 'url'
    },
    type: 'input'
  })
  .then((url) => {
    if(url === null) {
      console.log('user cancelled');
    } else {
      flashcardWindow.send("rcvGetUrl", url);
    }
  })
  .catch(console.error);
});

ipcMain.on("rqtClozeWindow", (event) => {
  var url = event["sender"]["getURL"]();
  if (url == `file://${__dirname}/front/pages/flashcards_page.html`) {
    flashcardWindow.close();
  }
});

ipcMain.on("rqtAddCard", (event, front, back, tags, idDeckFK) => {
  database.addCard(db, front, back, tags, idDeckFK, function () {
    flashcardWindow.send("rcvAddCard");
    database.getDks(db, function (err, rows)  {
      if(err == null) {
        mainWindow.webContents.send("rcvGetDks", rows);
      } else {
        mainWindow.webContents.send("error");
      }
    });
  });
});
