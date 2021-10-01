// Functions that create the decks table.
function buildThead() {
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

// Build the table body.
function buildTbody(rows, callback) {
    // Get the decks table.
    var table = document.getElementById("decks-table");
    // Get the table body.
    var tbody = table.children[1];
    // Clear old tbody.
    tbody.innerHTML = "";
    // Build rows.
    for (var i = 0; i < rows.length; i++) {
        // Create a new row.
        var tr = document.createElement("tr");
        // Add the new line in the body's table.
        tbody.appendChild(tr);
        // Add row id.
        tr.id = "row_" + rows[i].id;
        // Create the columns.
        var td = [
            document.createElement("td"), // Deck name.
            document.createElement("td"), // New cards.
            document.createElement("td"), // Cards to re-study.
            document.createElement("td"), // Cards to review.
            document.createElement("td"), // Settings.
        ];
        // Define classes array.
        var className = [
            "deck-name",
            "new-cards",
            "cards-to-re-study",
            "cards-to-review",
            "settings",
        ];
        // Add columns in the row and classes in the columns.
        for (var j = 0; j < 5; j++) {
            tr.appendChild(td[j]);
            td[j].classList.add(className[j]);
        }

        // Create spans of cards number columns.
        var spanNewCards = document.createElement("span");
        var spanCardsToReStudy = document.createElement("span");
        var spanCardsToReview = document.createElement("span");
        // Create texts of spans.
        var name = document.createTextNode(rows[i].name);
        var newCards = document.createTextNode(0);
        var cardsToReStudy = document.createTextNode(0);
        var cardsToReview = document.createTextNode(0);
        var settings = document.createElement("span");
        settings.textContent = "🗑️"; // ⚙️
        settings.setAttribute("onclick", "rmDk('"+ rows[i].id +"')");
        // Add texts in spans.
        spanNewCards.appendChild(newCards);
        spanCardsToReStudy.appendChild(cardsToReStudy);
        spanCardsToReview.appendChild(cardsToReview);
        // Add texts and spans in the columns.
        td[0].appendChild(name);
        td[0].setAttribute("onclick", "openRvwPg(" + rows[i].id + ")");
        td[1].appendChild(spanNewCards);
        td[2].appendChild(spanCardsToReStudy);
        td[3].appendChild(spanCardsToReview);
        td[4].appendChild(settings);

        callback("New");
        callback("Re-study");
        callback("Review");

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
    var td = [
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
    ];

    // Define column classes.
    var className = [
        "deck-name",
        "new-cards",
        "cards-to-re-study",
        "cards-to-review",
        "settings",
    ];

    // Add columns in the row and classes in the columns.
    for (var i = 0; i < 5; i++) {
        tr.appendChild(td[i]);
        td[i].classList.add(className[i]);
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
    settings.textContent = "🗑️"; // ⚙️
    settings.setAttribute("onclick", "rmDk('" + row.id + "')");

    // Add texts in the spans.
    spanNewCards.appendChild(newCards);
    spanCardsToReStudy.appendChild(cardsToReStudy);
    spanCardsToReview.appendChild(cardsToReview);

    // Add texts and spans in the de columns.
    td[0].appendChild(name);
    td[1].appendChild(spanNewCards);
    td[2].appendChild(spanCardsToReStudy);
    td[3].appendChild(spanCardsToReview);
    td[4].appendChild(settings);
}

// Add number of cards.
function addCdsNmb(rows, col) {
    for(var i = 0; i < rows.length; i++) {
        var tr = document.getElementById("row_" + rows[i].idDeckFK);
        var td = tr.children[col];
        var span = td.children[0];
        span.textContent = rows[i].count;
    }
}

// Remove row from decks table.
function rmRow(id) {
    document.getElementById("row_" + id).remove();
}

// Call this function(s) when body loads.
function onLoadBody() {
    buildThead();
    getDks();
    addInfos();
}
