var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/db/rebisyon.db');

// Commands to create the database scheme.
// sqlite3 rebisyon.db
// CREATE TABLE deck (name TEXT, newCards INT, cardsToReStudy INT, cardsToReview INT);
// INSERT INTO deck VALUES("Padrão", 0, 0, 0);
// INSERT INTO deck VALUES("Inglês", 20, 5, 110);
// INSERT INTO deck VALUES("Programação", 100, 555, 9999);

function selectDeckNames() {
  var i = 0;
  db.each("select * from deck", function(err, register) {

    // Get the decks table.
    var table = document.getElementById("decks-table");
    // Get the body's table.
    var tbody = table.children[1];
    
    // Create a new line.
    var row = document.createElement("tr");
    // Add the new line in the body's table.
    tbody.appendChild(row);

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
    for(var j = 0; j < 5; j++) {
      row.appendChild(cols[j]);
      cols[j].classList.add(classes[j]);
    }

    // Create spans of cards number columns.
    var spanNewCards = document.createElement("span");
    var spanCardsToReStudy = document.createElement("span");
    var spanCardsToReview = document.createElement("span");
    // Create texts of spans.
    var name = document.createTextNode(register.name);
    var newCards = document.createTextNode(register.newCards);
    var cardsToReStudy = document.createTextNode(register.cardsToReStudy);
    var cardsToReview = document.createTextNode(register.cardsToReview);
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

  });
}

selectDeckNames();