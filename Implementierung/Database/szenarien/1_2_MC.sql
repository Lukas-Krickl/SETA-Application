USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie sichere Aufbewahrungsorte für vertrauliche Dokumente aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'auf dem Schreibtisch',
    False 
), (
    LAST_INSERT_ID(),
    'verdeckt unter unwichtigen Dokumenten',
    False 
), (
    LAST_INSERT_ID(),
    'in versperrbare Kästen',
    True 
), (
    LAST_INSERT_ID(),
    'in einem Safe',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie sichere Aufbewahrungsorte für Passwörter aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'als Post-it auf dem Bildschirm',
    False 
), (
    LAST_INSERT_ID(),
    'als Post-it versteckt in einem Kasten',
    False 
), (
    LAST_INSERT_ID(),
    'als Post-it in einem verschlossenen Raum, für den nur berechtigtes Personal den Schlüssel hat',
    False 
), (
    LAST_INSERT_ID(),
    'in einem Passwort-Manager',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'In welchen Situationen ist das Sperren des Computers nicht notwendig?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wenn ich eine Minute den Arbeitsplatz verlasse.',
    False 
), (
    LAST_INSERT_ID(),
    'Wenn der Raum zu dem Computer versperrt ist.',
    False 
), (
    LAST_INSERT_ID(),
    'Wenn ich davor sitze.',
    True 
), (
    LAST_INSERT_ID(),
    'Wenn der Computer keine wertvollen Daten enthällt.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Clear Desk-Policy bedeutet, dass die Mitarbeiterinnen und Mitarbeiter alle vertraulichen Unterlagen bei Abwesenheit verschließen, sodass ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... andere Mitarbeiterinnen und Mitarbeiter vertrauliche Dokumente nicht lesen können.',
    True 
), (
    LAST_INSERT_ID(),
    '... Reinigungspersonal vertrauliche Dokumente nicht lesen kann.',
    True 
);