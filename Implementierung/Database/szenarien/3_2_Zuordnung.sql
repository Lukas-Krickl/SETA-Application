USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
'Weisen Sie die Begriffe ihren Beschreibungen zu!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'TLS',
    'Verschlüsselt die Verbindung zu einer Webseite.'
), (
    LAST_INSERT_ID(),
    'Zertifikat',
    'Representiert die Identität der Webseite'
), (
    LAST_INSERT_ID(),
    'HTTP',
    'Ein Protokoll OHNE Verschlüsselung und Verifizierung für die Verbindung zu einer Webseite.'
), (
    LAST_INSERT_ID(),
    'HTTPS',
    'Ein Protokoll MIT Verschlüsselung und Verifizierung für die Verbindung zu einer Webseite.'
), (
    LAST_INSERT_ID(),
    'URL',
    'Representiert die Adresse einer Webseite'
);
