var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/db/rebisyon.db');

// Functions to query each deck in the database.
function selectDecks(callback) {
  db.each("SELECT * FROM `deck`", function (err, register) {
    callback(register, setTimeout(function () {
      getCardsCount("New", register.id, setCardsCol);
      getCardsCount("Re-study", register.id, setCardsCol);
      getCardsCount("Review", register.id, setCardsCol);
    }, 0));
  });
}

// Functions to fill the decks table.
function fillDecksTable(register, callback) {
  // Get the decks table.
  var table = document.getElementById("decks-table");
  // Get the body's table.
  var tbody = table.children[1];

  // Create a new line.
  var row = document.createElement("tr");
  // Add the new line in the body's table.
  tbody.appendChild(row);
  row.id = "row_" + register.id;

  // Create the columns.
  var cols = [
    document.createElement("td"), // Deck name.
    document.createElement("td"), // New cards.
    document.createElement("td"), // Cards to re-study.
    document.createElement("td"), // Cards to review.
    document.createElement("td"), // Settings.
  ];

  // Array of classes.
  var classes = [
    "deck-name",
    "new-cards",
    "cards-to-re-study",
    "cards-to-review",
    "settings",
  ];

  // Add columns in the row.
  for (var i = 0; i < 5; i++) {
    row.appendChild(cols[i]);
    cols[i].classList.add(classes[i]);
  }

  // Create spans of cards number columns.
  var spanNewCards = document.createElement("span");
  var spanCardsToReStudy = document.createElement("span");
  var spanCardsToReview = document.createElement("span");
  // Create texts of spans.
  var name = document.createTextNode(register.name);
  var newCards = document.createTextNode(0);
  var cardsToReStudy = document.createTextNode(0);
  var cardsToReview = document.createTextNode(0);
  var settings = document.createElement("span");
  settings.textContent = "⚙️";
  // Add texts in spans.
  spanNewCards.appendChild(newCards);
  spanCardsToReStudy.appendChild(cardsToReStudy);
  spanCardsToReview.appendChild(cardsToReview);
  // Add texts and spans in the columns.
  cols[0].appendChild(name);
  cols[1].appendChild(spanNewCards);
  cols[2].appendChild(spanCardsToReStudy);
  cols[3].appendChild(spanCardsToReview);
  cols[4].appendChild(settings);
}

// Add one row in the decks table for each register returned.
selectDecks(fillDecksTable);

function getCardsCount(state, idDeckFK, callback) {
  var sql = 'SELECT COUNT(*) AS `count` FROM `card` WHERE `state` = ? AND `idDeckFK` = ?';
  db.get(sql, [state, idDeckFK], function (err, row) {
    var col = 1;
    if(state == "Re-study") col = 2;
    else if(state == "Review") col = 3;
    callback(idDeckFK, col, row.count);
  });
}

function setCardsCol(row_id, col, count) {
  var row = document.getElementById("row_" + row_id);
  var newCardsCol = row.children[col];
  newCardsCol.children[0].textContent = count;
}
