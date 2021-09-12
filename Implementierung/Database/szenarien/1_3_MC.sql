USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie entsorgen eine Festplattte, die Sie nicht mehr benötigen. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich werfe sie in den Restmüll.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich mache sie mit einem Hammer unbrauchbar.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich übergebe sie der EDV-Abteilung.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich mache sie mit einem starken Magneten unbrauchbar, denn Festplatten speichern Daten durch Magnetismus.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wie entsorgt man Papierdokumente in einem Unternehmen richtig?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Schredder',
    True 
), (
    LAST_INSERT_ID(),
    'Altpapier',
    False 
), (
    LAST_INSERT_ID(),
    'Restmüll',
    False 
), (
    LAST_INSERT_ID(),
    'Gelber Sack',
    False 
);