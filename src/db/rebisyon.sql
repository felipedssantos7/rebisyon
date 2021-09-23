/* Command to create the rebisyon database. */
-- sqlite3 rebisyon.db

/* Commands to create the database scheme. */

-- Create tables.
CREATE TABLE `deck` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
    `name` TEXT
);
CREATE TABLE `card` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
    `front` TEXT NOT NULL, 
    `back` TEXT,
    `state` TEXT,
    `idDeckFK`INTEGER NOT NULL,
    CONSTRAINT `cardIdDeckFK` FOREIGN KEY (`idDeckFK`) REFERENCES `deck` (`id`)
);

/* Drop tables. */
DROP TABLE `deck`;
DROP TABLE `card`;

/* Insert data. */

-- Deck.
INSERT INTO `deck` (`name`) VALUES ("Padrão");
INSERT INTO `deck` (`name`) VALUES ("Inglês");
INSERT INTO `deck` (`name`) VALUES ("Programação");

-- Card.
INSERT INTO `card` (`front`, `back`, `state`, `idDeckFK`) VALUES 
    ("Qual é o seu nome?", "Felipe", "New", 1), 
    ("Qual é a sua idade?", "19", "New", 1), 
    ("Quando é o seu aniversário?", "18/11/2001", "New", 1);

/* Querys. */

-- Cards of deck.
SELECT * FROM `card` WHERE `idDeckFK` = 1;