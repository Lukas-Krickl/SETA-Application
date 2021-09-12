USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (4, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Das erste Anzeichen einer bösartigen E-Mail ist:'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'ein Anhang',
    False 
),(
    LAST_INSERT_ID(),
    'kein Betreff',
    False 
),(
    LAST_INSERT_ID(),
    'Rechtschreib- oder Grammatikfehler',
    True 
),(
    LAST_INSERT_ID(),
    'ein Link',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (4, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Ausführbare Programme sollten nicht per E-Mail gesendet und schon garnicht geöffnet werden. Wählen Sie Dateiendungen von ausführbaren Programmen aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '.exe',
    True 
),(
    LAST_INSERT_ID(),
    '.bat',
    True 
),(
    LAST_INSERT_ID(),
    '.pdf',
    False 
),(
    LAST_INSERT_ID(),
    '.zip',
    False 
),(
    LAST_INSERT_ID(),
    '.rar',
    False 
),(
    LAST_INSERT_ID(),
    '.sh',
    True 
);
