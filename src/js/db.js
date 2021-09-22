var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
function insertDeckTable() {
  db.serialize(function() {
    db.run("CREATE TABLE deck (name TEXT)");
    var stmt = db.prepare("INSERT INTO deck VALUES (?)");
    stmt.run("Padrão");
    stmt.run("Inglês");
    stmt.run("Programação");
    stmt.finalize();
  });
}

insertDeckTable();

function selectDeckNames() {
  var i = 0;
  db.each("SELECT rowid AS id, name FROM deck", function(err, row) {
    var table = document.getElementById("decks-table");
    var tbody = table.children[1];
    var tr = tbody.children[i++];
    tr.children[0].textContent = row.name;
  });
}

selectDeckNames();