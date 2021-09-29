function getDks() {
    ipcRenderer.send("rqtGetDks");
}

ipcRenderer.on("rcvGetDks", (event, rows) => {
    var select = document.getElementById("choose-deck");
    for (var i = 0; i < rows.length; i++) {
        var option = document.createElement("option");
        select.appendChild(option);
        option.textContent = rows[i].name;
        // option.value = rows[i].id;
        option.id = "option_" + rows[i].id;
    }
});

function clozeWindow() {
    ipcRenderer.send("rqtClozeWindow");
}

function addCard() {
    ipcRenderer.send("rqtAddCard");
}

function onLoadBody() {
    getDks();
}
