// To get decks from database.
function getDks(db, callback) {
  db.all("SELECT * FROM `deck`", function (err, rows) {
    callback(err, rows);
  });
}

// To get the number os cards.
function getCdsCnt(db, state, callback) {
  var sql = 'SELECT `idDeckFK`, COUNT(*) AS `count` FROM `card` WHERE `state` = ? GROUP BY `idDeckFK`';
  db.all(sql, [state], function (err, rows) {
    callback(err, rows);
  });
}

// To add a new deck.
function addDk(db, name, callback) {
  var sql = "INSERT INTO `deck` (`name`) VALUES (?)";
  db.run(sql, [name]);
  callback(db);
}

// To get the last deck id added.
function getLstDkId(db, callback) {
  var sql = "SELECT * FROM `deck` ORDER BY `id` DESC LIMIT 1";
  db.get(sql, callback);
}

// To remove a deck.
function rmDk(db, id, callback) {
  var sql = "DELETE FROM `deck` WHERE `id` = ?";
  db.run(sql, [id], callback);
}

// To export the database functions.
module.exports = {
  getDks, 
  getCdsCnt, 
  addDk, 
  getLstDkId, 
  rmDk
};