// Get database.
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/db/rebisyon.db');

module.exports = {
  getDecks, getCardsCount, addDeck, getLastDeckId, rmDeck
};

// Functions to query each deck in the database.
function getDecks(db, callback) {
  db.all("SELECT * FROM `deck`", function (err, rows) {
    callback(err, rows);
  });
}

function x(err, register) {
  callback(register, setTimeout(function () {
    getCardsCount("New", register.id, setCardsCol);
    getCardsCount("Re-study", register.id, setCardsCol);
    getCardsCount("Review", register.id, setCardsCol);
  }, 0));
}

// Get the number of cards in a specific deck and state.
function getCardsCount(db, state, callback) {
  var sql = 'SELECT `idDeckFK`, COUNT(*) AS `count` FROM `card` WHERE `state` = ? GROUP BY `idDeckFK`';
  db.all(sql, [state], function (err, rows) {
    callback(err, rows);
  });
}

// Update the column value.
function setCardsCol(row_id, col, count) {
  var row = document.getElementById("row_" + row_id);
  var newCardsCol = row.children[col];
  newCardsCol.children[0].textContent = count;
}

// Add a new deck.
function addDeck(db, name, callback) {
  var sql = "INSERT INTO `deck` (`name`) VALUES (?)";
  db.run(sql, [name]);
  callback(db);
}

// Get the lack deck id added.
function getLastDeckId(db, callback) {
  var sql = "SELECT * FROM `deck` ORDER BY `id` DESC LIMIT 1";
  db.get(sql, callback);
}

// Remove deck.
function rmDeck(db, id, callback) {
  var sql = "DELETE FROM `deck` WHERE `id` = ?";
  db.run(sql, [id], callback);
}
