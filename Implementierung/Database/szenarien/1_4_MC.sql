USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Das Firmen-Mobilgerät für private Angelegenheiten zu verwenden ist unbedenklich.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Unternehmensdaten in der privaten Cloud zu speichern ist unbedenklich.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Privatdaten in der Unternehmens-Cloud zu speichern ist unbedenklich.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Unternehmensdaten in der Unternehmens-Cloud zu speichern ist unbedenklich.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wahr',
    True 
), (
    LAST_INSERT_ID(),
    'Falsch',
    False 
);
