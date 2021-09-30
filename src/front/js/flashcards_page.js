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
    var front = document.getElementById("front-input");
    var back = document.getElementById("back-input");
    var tags = document.getElementById("tags-input");
    var select = document.getElementById("choose-deck");
    var idDeckFK = select.options[select.selectedIndex].value;
    ipcRenderer.send("rqtAddCard", 
        front.innerHTML, back.innerHTML, tags.innerHTML, idDeckFK);

    var isKeepFront = document.getElementById("cb-kp-ft").checked;
    var isKeepBack = document.getElementById("cb-kp-bk").checked;
    var isKeepTags = document.getElementById("cb-kp-tgs").checked;
    
    if (!isKeepFront) {
        front.innerHTML = "";
    }
    if (!isKeepBack) {
        back.innerHTML = "";
    }
    if (!isKeepTags) {
        tags.innerHTML = "";
    }
}

ipcRenderer.on("rcvAddCard", (event) => {
    var popup = document.getElementById("popup");
    popup.style.opacity = "1";
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.display = "none";
    }, 5000);
});

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.opacity = "0";
    setTimeout(function () {
        popup.style.display = "none";
    }, 600);
}

function onLoadBody() {
    getDks();
}
