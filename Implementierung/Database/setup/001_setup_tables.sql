USE seta;
CREATE TABLE Kapitel (
    kapitelnummer INT UNSIGNED,
    titel VARCHAR(255) NOT NULL,
    beschreibung VARCHAR(2000),
    CONSTRAINT PRIMARY KEY (kapitelnummer)
);

CREATE TABLE Thema (
    kapitelnummer INT UNSIGNED,
    themanummer INT UNSIGNED,
    titel VARCHAR(255) NOT NULL,
    CONSTRAINT PRIMARY KEY (kapitelnummer, themanummer),
    CONSTRAINT fkey_kapitelnummer FOREIGN KEY (kapitelnummer) REFERENCES Kapitel (kapitelnummer)
);

CREATE TABLE Szenario (
    szenarioID INT UNSIGNED AUTO_INCREMENT,
    kapitelnummer INT UNSIGNED,
    themanummer INT UNSIGNED,
    CONSTRAINT PRIMARY KEY (szenarioID),
    CONSTRAINT fkey_szenario FOREIGN KEY (kapitelnummer, themanummer) REFERENCES Thema (kapitelnummer, themanummer)
);

CREATE TABLE MC_Frage (
    szenarioID INT UNSIGNED,
    frage VARCHAR(1000) NOT NULL,
    bild_url VARCHAR(255),
    CONSTRAINT PRIMARY KEY (szenarioID),
    CONSTRAINT fkey_mcfrage FOREIGN KEY (szenarioID) REFERENCES Szenario (szenarioID)
);

CREATE TABLE MC_Antwort (
    antwortID INT UNSIGNED AUTO_INCREMENT,
    szenarioID INT UNSIGNED,
    text VARCHAR(1000) NOT NULL,
    korrekt BOOLEAN DEFAULT (False),
    CONSTRAINT PRIMARY KEY (antwortID, szenarioID),
    CONSTRAINT fkey_mcantwort FOREIGN KEY (szenarioID) REFERENCES MC_Frage (szenarioID)
);

CREATE TABLE Zuordnung (
    szenarioID INT UNSIGNED,
    anweisung VARCHAR(1000) NOT NULL,
    CONSTRAINT PRIMARY KEY (szenarioID),
    CONSTRAINT fkey_zuordnung FOREIGN KEY (szenarioID) REFERENCES Szenario (szenarioID)
);

CREATE TABLE Eintrag (
    eintragID INT UNSIGNED AUTO_INCREMENT,
    szenarioID INT UNSIGNED,
    begriff VARCHAR(255) NOT NULL,
    beschreibung VARCHAR(1000) NOT NULL,
    CONSTRAINT PRIMARY KEY (eintragID, szenarioID),
    CONSTRAINT fkey_eintrag FOREIGN KEY (szenarioID) REFERENCES Zuordnung (szenarioID)
);

CREATE TABLE User (
    benutzername VARCHAR(255),
    vorname VARCHAR(255) NOT NULL,
    nachname VARCHAR(255) NOT NULL,
    passwort VARCHAR(64) NOT NULL,
    rolle ENUM ('ANWENDER', 'TRAINER') NOT NULL,
    CONSTRAINT PRIMARY KEY (benutzername)
);

CREATE TABLE Assessment (
    assessmentID INT UNSIGNED AUTO_INCREMENT,
    typ ENUM('VORTRAINING', 'NACHTRAINING', 'PRUEFUNG'),
    benutzername VARCHAR(255),
    zeitpunkt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    abgeschlossen BOOLEAN NOT NULL DEFAULT (False),
    CONSTRAINT PRIMARY KEY (assessmentID, typ, benutzername),
    CONSTRAINT fkey_assessment FOREIGN KEY (benutzername) REFERENCES User (benutzername)
);

CREATE TABLE benutzer_beantwortet_szenario (
    szenarioID INT UNSIGNED,
    assessmentID INT UNSIGNED,
    typ ENUM('VORTRAINING', 'NACHTRAINING', 'PRUEFUNG'),
    benutzername VARCHAR(255),
    korrekt BOOLEAN NOT NULL,
    CONSTRAINT PRIMARY KEY (szenarioID, benutzername, assessmentID, typ),
    CONSTRAINT fkey_beantwortet_szenario FOREIGN KEY (szenarioID) REFERENCES Szenario (szenarioID),
    CONSTRAINT fkey_beantwortet_assessment FOREIGN KEY (benutzername, assessmentID, typ) REFERENCES Assessment (benutzername, assessmentID, typ)
);