// Import interprocesses communicator.
const { ipcRenderer } = require("electron");

// To request to open the add flashcard page.
function requestGetAddFlashcadPage() {
  ipcRenderer.send("requestGetAddFlashcardPage");
}

// To request list of decks from the database.
function requestGetDecks() {
  ipcRenderer.send("requestGetDecks");
}

// To receive list of decks from the database.
ipcRenderer.on("receiveGetDecks", (event, rows) => {
  buildTbody(rows, requestGetCardsNumber);
});

// To request number of cards from the database.
function requestGetCardsNumber(deckId, state) {
  ipcRenderer.send("requestGetCardsNumber", deckId, state);
}

// To receive number of cards from the database.
ipcRenderer.on("receiveGetCardsNumber", (event, state, rows) => {
  if (state == "New") {
    addCardsNumber(rows, 1);
  } else if (state == "Re-study") {
    addCardsNumber(rows, 2);
  } else if (state == "Review") {
    addCardsNumber(rows, 3);
  }
});

// To request to add deck in the database.
document.querySelector("#add-deck").addEventListener("click", (event) => {
  event.preventDefault();
  var name = "Baralho de teste";
  ipcRenderer.send("rqtAddDk", name);
});

// To receive the add deck return.
ipcRenderer.on("rcvAddDk", (event, row) => {
  addRow(row);
});

// To request to remove deck from the database.
function rmDk(deckId) {
    ipcRenderer.send("rqtRmDk", deckId);
};

// To receive the remove deck return.
ipcRenderer.on("rcvRmDk", (event, id) => {
  rmRow(id);
});

// To open the review page.
function openRvwPg(idDk) {
    ipcRenderer.send("openRvwPg", idDk);
}

// To receive some error.
ipcRenderer.on("error", (event) => {
  alert("An unexpected error has occurred! Please restart your Rebysion!");
});
