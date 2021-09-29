function getDks() {
    ipcRenderer.send("rqtGetDks");
}

ipcRenderer.on("rcvGetDks", (event, rows) => {
    var select = document.getElementById("choose-deck");
    for (var i = 0; i < rows.length; i++) {
        var option = document.createElement("option");
        select.appendChild(option);
        option.textContent = rows[i].name;
        option.value = rows[i].id;
        option.id = "option_" + rows[i].id;
    }
});

function clozeWindow() {
    ipcRenderer.send("rqtClozeWindow");
}

function addCard() {
    var front = document.getElementById("front-input").innerHTML;
    var back = document.getElementById("back-input").innerHTML;
    var tags = document.getElementById("back-input").innerHTML;
    var select = document.getElementById("choose-deck");
    var idDeckFK = select.options[select.selectedIndex].value;
    ipcRenderer.send("rqtAddCard", front, back, tags, idDeckFK);
}

ipcRenderer.on("rcvAddCard", (event) => {
    alert("Cartão adicionado com sucesso!");
});

function onLoadBody() {
    getDks();
}
