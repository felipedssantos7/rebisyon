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

// Call this function(s) when body loads.
function loadBody() {
    createDeckList();
    addInfos();
}
