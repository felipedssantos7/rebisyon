// Functions that create the decks table.
function createDeckList() {
    // Array of titles.
    var titles = ["📦 Nome do baralho", "🆕 Cartões novos", "👀 Cartões a revisar", ""];
    // Get table element.
    var table = document.getElementById("decks-table");
    // Create table head.
    var thead = document.createElement("thead");
    table.appendChild(thead);
    var thead_row = document.createElement("tr");
    thead.appendChild(thead_row);
    for(var i = 0; i < 4; i++) {
        var th = document.createElement("th");
        thead_row.appendChild(th);
        var th_text = document.createTextNode(titles[i]);
        th.appendChild(th_text);
        if(i == 2) {
            th.colSpan = 2;
        }
    }
    // Array of decks.
    var  decks = [
        {"deck-name": "Padrão", "new-cards": 0, "cards-to-re-study": 0, "cards-to-review": 0},
        {"deck-name": "Inglês", "new-cards": 20, "cards-to-re-study": 0, "cards-to-review": 137},
        {"deck-name": "Programação", "new-cards": 1, "cards-to-re-study": 73, "cards-to-review": 314},
    ];
    // Array of classes.
    var classes = ["deck-name", "new-cards", "cards-to-re-study", "cards-to-review", "settings"];
    // Create table body.
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for(var i = 0; i < decks.length; i++) {
        // Create table body row.
        var row = document.createElement("tr");
        tbody.appendChild(row);
        // Create table body columns.
        var cols = [
            document.createElement("td"), // Deck name.
            document.createElement("td"), // New cards.
            document.createElement("td"), // Cards to re-study.
            document.createElement("td"), // Cards to review.
            document.createElement("td"), // Settings.
        ];
        // Add columns in the row.
        for(var j = 0; j < 5; j++) {
            row.appendChild(cols[j]);
            cols[j].classList.add(classes[j]);
        }
        // Create texts of columns .
        var deckName = document.createTextNode(decks[i]["deck-name"]);
        var newCards = document.createTextNode(decks[i]["new-cards"]);
        var cardsToReStudy = document.createTextNode(decks[i]["cards-to-re-study"]);
        var cardsToReview = document.createTextNode(decks[i]["cards-to-review"]);
        var settings = document.createElement("span");
        settings.textContent = "⚙️";
        // Add texts in the columns.
        cols[0].appendChild(deckName);
        cols[1].appendChild(newCards);
        cols[2].appendChild(cardsToReStudy);
        cols[3].appendChild(cardsToReview);
        cols[4].appendChild(settings);
    }
}

// Add infos.
function addInfos() {
    // Get elements.
    var totalOfNews = document.getElementById("total-of-news");
    var totalToReview = document.getElementById("total-to-review");
    totalOfNews.textContent = "21";
    totalToReview.textContent = "534";
}

// Call this function(s) when body loads.
function loadBody() {
    createDeckList();
    addInfos();
}
