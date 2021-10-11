/* Command to create the rebisyon database. */
-- sqlite3 rebisyon.db

/* Commands to create the database scheme. */

/* Drop tables. */
DROP TABLE `deck`;
DROP TABLE `card`;

-- Create tables.
CREATE TABLE `deck` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
    `name` TEXT
);
CREATE TABLE `card` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
    `front` TEXT NOT NULL, 
    `back` TEXT,
    `tags` TEXT,
    `state` TEXT,
    `idDeckFK`INTEGER NOT NULL,
    CONSTRAINT `cardIdDeckFK` FOREIGN KEY (`idDeckFK`) REFERENCES `deck` (`id`)
);

/* Insert data. */

-- Deck.
INSERT INTO `deck` (`name`) VALUES ("Padrão");
INSERT INTO `deck` (`name`) VALUES ("Inglês");
INSERT INTO `deck` (`name`) VALUES ("Programação");
INSERT INTO `deck` (`name`) VALUES ("Deck test");

-- Card.
INSERT INTO `card` (`front`, `back`, `state`, `idDeckFK`) VALUES 
    ("Qual é o seu nome?", "Felipe", "New", 1), 
    ("Qual é a sua idade?", "19", "New", 1), 
    ("Quando é o seu aniversário?", "18/11/2001", "New", 1), 
    ("Qual é o seu nome?", "Felipe", "Re-study", 1), 
    ("Qual é a sua idade?", "19", "Re-study", 1), 
    ("Quando é o seu aniversário?", "18/11/2001", "Review", 1), 
    ("One", "Um", "New", 2), 
    ("Two", "Um", "New", 2), 
    ("Three", "Um", "New", 2), 
    ("Four", "Um", "New", 2), 
    ("Five", "Um", "New", 2), 
    ("Six", "Um", "New", 2), 
    ("Seven", "Um", "New", 2), 
    ("Eight", "Um", "New", 2), 
    ("Nine", "Um", "New", 2), 
    ("Ten", "Um", "New", 2), 
    ("Eleven", "Um", "New", 2), 
    ("Twelve", "Um", "New", 2), 
    ("Thirteen", "Um", "New", 2), 
    ("Fourteen", "Um", "New", 2), 
    ("Fifteen", "Um", "New", 2), 
    ("Sixteen", "Um", "New", 2), 
    ("Seventeen", "Um", "New", 2), 
    ("Eighteen", "Um", "New", 2), 
    ("Nineteen", "Um", "New", 2), 
    ("Twenty", "Um", "New", 2), 
    ("My name is...", "Meu nome é...", "Review", 2), 
    ("My name is...", "Meu nome é...", "Review", 2), 
    ("How are you?", "Como você está?", "Review", 2), 
    ("How old are you?", "Quantos anos você tem?", "Review", 2), 
    ("Nice to meet you!", "Prazer em conhecê-lo(a)!", "Review", 2), 
    ("1", "Back side", "Re-study", 3), 
    ("2", "Back side", "Re-study", 3), 
    ("3", "Back side", "Re-study", 3), 
    ("4", "Back side", "Re-study", 3), 
    ("5", "Back side", "Re-study", 3), 
    ("6", "Back side", "Re-study", 3), 
    ("7", "Back side", "Re-study", 3), 
    ("8", "Back side", "Re-study", 3), 
    ("9", "Back side", "Re-study", 3), 
    ("10", "Back side", "Re-study", 3), 
    ("11", "Back side", "Re-study", 3), 
    ("12", "Back side", "Re-study", 3), 
    ("13", "Back side", "Re-study", 3), 
    ("14", "Back side", "Re-study", 3), 
    ("15", "Back side", "Re-study", 3), 
    ("16", "Back side", "Re-study", 3), 
    ("17", "Back side", "Re-study", 3), 
    ("18", "Back side", "Re-study", 3), 
    ("19", "Back side", "Re-study", 3), 
    ("20", "Back side", "Re-study", 3), 
    ("21", "Back side", "Re-study", 3), 
    ("22", "Back side", "Re-study", 3), 
    ("23", "Back side", "Re-study", 3), 
    ("24", "Back side", "Re-study", 3), 
    ("25", "Back side", "Re-study", 3), 
    ("26", "Back side", "Re-study", 3), 
    ("27", "Back side", "Re-study", 3), 
    ("28", "Back side", "Re-study", 3), 
    ("30", "Back side", "Re-study", 3), 
    ("31", "Back side", "Re-study", 3), 
    ("32", "Back side", "Re-study", 3), 
    ("33", "Back side", "Re-study", 3), 
    ("34", "Back side", "Re-study", 3), 
    ("35", "Back side", "Re-study", 3), 
    ("36", "Back side", "Re-study", 3), 
    ("37", "Back side", "Re-study", 3), 
    ("38", "Back side", "Re-study", 3), 
    ("39", "Back side", "Re-study", 3), 
    ("40", "Back side", "Re-study", 3), 
    ("41", "Back side", "Re-study", 3), 
    ("42", "Back side", "Re-study", 3), 
    ("43", "Back side", "Re-study", 3), 
    ("1", "Back side", "Review", 3), 
    ("2", "Back side", "Review", 3), 
    ("3", "Back side", "Review", 3), 
    ("4", "Back side", "Review", 3), 
    ("5", "Back side", "Review", 3), 
    ("6", "Back side", "Review", 3), 
    ("7", "Back side", "Review", 3), 
    ("8", "Back side", "Review", 3), 
    ("9", "Back side", "Review", 3), 
    ("10", "Back side", "Review", 3), 
    ("11", "Back side", "Review", 3), 
    ("12", "Back side", "Review", 3), 
    ("13", "Back side", "Review", 3), 
    ("14", "Back side", "Review", 3), 
    ("15", "Back side", "Review", 3), 
    ("16", "Back side", "Review", 3), 
    ("17", "Back side", "Review", 3), 
    ("18", "Back side", "Review", 3), 
    ("19", "Back side", "Review", 3), 
    ("20", "Back side", "Review", 3), 
    ("21", "Back side", "Review", 3), 
    ("22", "Back side", "Review", 3), 
    ("23", "Back side", "Review", 3), 
    ("24", "Back side", "Review", 3), 
    ("25", "Back side", "Review", 3), 
    ("26", "Back side", "Review", 3), 
    ("27", "Back side", "Review", 3), 
    ("28", "Back side", "Review", 3), 
    ("29", "Back side", "Review", 3), 
    ("30", "Back side", "Review", 3), 
    ("31", "Back side", "Review", 3), 
    ("32", "Back side", "Review", 3), 
    ("33", "Back side", "Review", 3), 
    ("34", "Back side", "Review", 3), 
    ("35", "Back side", "Review", 3), 
    ("36", "Back side", "Review", 3), 
    ("37", "Back side", "Review", 3), 
    ("38", "Back side", "Review", 3), 
    ("39", "Back side", "Review", 3), 
    ("40", "Back side", "Review", 3), 
    ("41", "Back side", "Review", 3), 
    ("42", "Back side", "Review", 3), 
    ("43", "Back side", "Review", 3), 
    ("44", "Back side", "Review", 3), 
    ("45", "Back side", "Review", 3), 
    ("46", "Back side", "Review", 3), 
    ("47", "Back side", "Review", 3), 
    ("48", "Back side", "Review", 3), 
    ("49", "Back side", "Review", 3), 
    ("50", "Back side", "Review", 3), 
    ("51", "Back side", "Review", 3), 
    ("52", "Back side", "Review", 3), 
    ("53", "Back side", "Review", 3), 
    ("54", "Back side", "Review", 3), 
    ("55", "Back side", "Review", 3), 
    ("56", "Back side", "Review", 3), 
    ("57", "Back side", "Review", 3), 
    ("58", "Back side", "Review", 3), 
    ("59", "Back side", "Review", 3), 
    ("60", "Back side", "Review", 3), 
    ("61", "Back side", "Review", 3), 
    ("62", "Back side", "Review", 3), 
    ("63", "Back side", "Review", 3), 
    ("64", "Back side", "Review", 3), 
    ("65", "Back side", "Review", 3), 
    ("66", "Back side", "Review", 3), 
    ("67", "Back side", "Review", 3), 
    ("68", "Back side", "Review", 3), 
    ("69", "Back side", "Review", 3), 
    ("70", "Back side", "Review", 3), 
    ("71", "Back side", "Review", 3), 
    ("72", "Back side", "Review", 3), 
    ("73", "Back side", "Review", 3), 
    ("74", "Back side", "Review", 3), 
    ("75", "Back side", "Review", 3), 
    ("76", "Back side", "Review", 3), 
    ("77", "Back side", "Review", 3), 
    ("78", "Back side", "Review", 3), 
    ("79", "Back side", "Review", 3), 
    ("80", "Back side", "Review", 3), 
    ("81", "Back side", "Review", 3), 
    ("82", "Back side", "Review", 3), 
    ("83", "Back side", "Review", 3), 
    ("84", "Back side", "Review", 3), 
    ("85", "Back side", "Review", 3), 
    ("86", "Back side", "Review", 3), 
    ("87", "Back side", "Review", 3), 
    ("88", "Back side", "Review", 3), 
    ("89", "Back side", "Review", 3), 
    ("90", "Back side", "Review", 3), 
    ("91", "Back side", "Review", 3), 
    ("92", "Back side", "Review", 3), 
    ("93", "Back side", "Review", 3), 
    ("94", "Back side", "Review", 3), 
    ("95", "Back side", "Review", 3), 
    ("96", "Back side", "Review", 3), 
    ("97", "Back side", "Review", 3), 
    ("98", "Back side", "Review", 3), 
    ("99", "Back side", "Review", 3), 
    ("100", "Back side", "Review", 3);

INSERT INTO `card` (`front`, `back`, `state`, `idDeckFK`) VALUES ("F", "B", "New", 1);

/* Updates. */
UPDATE `deck` SET `id` = 1 WHERE `id` = 1;
UPDATE `deck` SET `id` = 2 WHERE `id` = 2;
UPDATE `deck` SET `id` = 3 WHERE `id` = 3;

/* Querys. */

SELECT * FROM `deck`;
SELECT * FROM `card`;
SELECT * FROM `card` WHERE `idDeckFK` = 1;

/* Remove data. */
-- Delete deck.
DELETE FROM `deck` WHERE `name` = "Deck test";
DELETE FROM `deck` WHERE `name` = "Deck test";
DELETE FROM `card` WHERE `id` != 0;

/* Add column */
ALTER TABLE `card` ADD `tags` TEXT;