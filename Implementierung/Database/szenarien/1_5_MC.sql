USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 5);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Usb-Sticks die nur innerhalb des Unternehmens verwendet werden müssen nicht Überprüft werden.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wahr',
    False 
), (
    LAST_INSERT_ID(),
    'Falsch',
    True 
);
