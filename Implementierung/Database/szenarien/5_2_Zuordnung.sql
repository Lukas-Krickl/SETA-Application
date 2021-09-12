USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
    'Weisen Sie den Begriffen ihre Beschreibung zu!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'Hotfix',
    'Behebung einer Sicherheitslücke in einem Programm.'
), (
    LAST_INSERT_ID(),
    'Ransomware',
    'Ein Trojaner Virus, das Daten auf der Festplatte verschlüsselt.'
), (
    LAST_INSERT_ID(),
    'Hoax',
    'Warnungen über angebliche neue Computer-Viren mit Anweisungen der Beseitigung und Weiterleitung.'
), (
    LAST_INSERT_ID(),
    'Horcrux',
    'Ein Objekt der Fantasiewelt von J. K. Rowling.'
), (
    LAST_INSERT_ID(),
    'Würmer',
    'Selbständige, selbstreproduzierende Programme, die sich in einem System (vor allem in Netzen) ausbreiten.'
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
    'Weisen Sie den Begriffen ihre Beschreibung zu!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'Rootkit',
    'Eine Softwaretechnik, mit der ein System manipuliert werden kann, sodass bestimmte Dateien, Prozesse, Netzwerkverbindungen, Speicherbereiche nicht mehr angezeigt werden.'
), (
    LAST_INSERT_ID(),
    'Spyware',
    'Software die Eingaben und Nutzerverhalten aufzeichnet. Wenn die Software zugriff auf Mikrophon oder Kamera hat, können Nutzer auch abgehört werden.'
), (
    LAST_INSERT_ID(),
    'Trojaner',
    'Programme die sich als nützlich verkaufen, aber tatsächlich Schadsoftware sind. '
), (
    LAST_INSERT_ID(),
    'Römer',
    'Ein antiker Einwohner.'
), (
    LAST_INSERT_ID(),
    'Würmer',
    'Selbständige, selbstreproduzierende Programme, die sich in einem System (vor allem in Netzen) ausbreiten.'
);
