USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 1);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
'Beurteilen Sie, welche dieser Situationen anzeichen für eine Vireninfektion sind!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'könnte ein Virus sein',
    'Es werden Warnungen angezeigt, dass bestimmte Programme eine Verbindung mit dem Internet herzustellen versuchen.'
), (
    LAST_INSERT_ID(),
    'normales Verhalten',
    'Sie installieren ein Programm und mehrere Fenster öffnen und schließen sich.'
), (
    LAST_INSERT_ID(),
    'normales Verhalten',
    'Beim starten des Computers öffnet sich ein schwarzes Fenster, das laufend sehr viel Text anzeigt.'
), (
    LAST_INSERT_ID(),
    'könnte ein Virus sein',
    'Sie erhalten eine E-Mail-Nachricht mit Anhang. Beim Öffnen des Anhangs öffnen und schließen sich verschiedene Dialogfenster und die Systemleistung nimmt sofort deutlich ab.'
), (
    LAST_INSERT_ID(),
    'könnte ein Virus sein',
    'Nach dem Einschalten erscheint ein leerer Bildschirm. '
);
