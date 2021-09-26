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
    
    // Create table body.
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
}

// Add infos.
function addInfos() {
    // Get elements.
    var totalOfNews = document.getElementById("total-of-news");
    var totalToReview = document.getElementById("total-to-review");
    totalOfNews.textContent = "21";
    totalToReview.textContent = "534";
}

function addRow(row) {
    // Get table.
    var table = document.getElementById("decks-table");
    // Get table body.
    var tbody = table.children[1];
    // Create table row.
    var tr = document.createElement("tr");
    // Add table row in the table body.
    tbody.appendChild(tr);
    // Add id row.
    tr.id = "row_" + row.id;

    // Create columns.
    var cols = [
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
    ];

    // Define column classes.
    var classes = [
        "deck-name",
        "new-cards",
        "cards-to-re-study",
        "cards-to-review",
        "settings",
    ];

    // Add columns in the row and classes in the columns.
    for (var i = 0; i < 5; i++) {
        tr.appendChild(cols[i]);
        cols[i].classList.add(classes[i]);
    }

    // Create spans of cards numbers.
    var spanNewCards = document.createElement("span");
    var spanCardsToReStudy = document.createElement("span");
    var spanCardsToReview = document.createElement("span");

    // Create text of columns and spans.
    var name = document.createTextNode(row.name);
    var newCards = document.createTextNode(0);
    var cardsToReStudy = document.createTextNode(0);
    var cardsToReview = document.createTextNode(0);
    var settings = document.createElement("span");
    settings.textContent = "⚙️";
    settings.setAttribute("onclick", "rmDeck('" + row.id + "')");

    // Add texts in the spans.
    spanNewCards.appendChild(newCards);
    spanCardsToReStudy.appendChild(cardsToReStudy);
    spanCardsToReview.appendChild(cardsToReview);

    // Add texts and spans in the de columns.
    cols[0].appendChild(name);
    cols[1].appendChild(spanNewCards);
    cols[2].appendChild(spanCardsToReStudy);
    cols[3].appendChild(spanCardsToReview);
    cols[4].appendChild(settings);
}

// Remove row from decks table.
function rmRow(id) {
    document.getElementById("row_" + id).remove();
}

// Call this function(s) when body loads.
function loadBody() {
    selectDecks(fillDecksTable);
    createDeckList();
    addInfos();
}
