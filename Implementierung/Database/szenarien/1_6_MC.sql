USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 6);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Gegen Social Engineering gibt es keine Gegenmaßnahmen, die zu 100% effektiv sind.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 6);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wer sollte besonders bezüglich Social Engineering acht geben?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'neue Mitarbeiter',
    True 
), (
    LAST_INSERT_ID(),
    'langjährig angestellte Mitarbeiter',
    False 
), (
    LAST_INSERT_ID(),
    'Angestellte im Kundenservice',
    True 
), (
    LAST_INSERT_ID(),
    'Angestellte der IT-Abteilung',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 6);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Social Engineering Angriffe nutzen ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... die Gutmütigkeit der Angestellten',
    True 
), (
    LAST_INSERT_ID(),
    '... Repetitivität des Alltages um die sicherheitskritische Situation zu verschleiern',
    True 
), (
    LAST_INSERT_ID(),
    '... Software-Sicherheitslücken',
    False 
), (
    LAST_INSERT_ID(),
    '... Informationen jeder Art',
    True 
);
