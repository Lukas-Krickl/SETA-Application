USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (4, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wozu könnte eine zweite, nicht personalisierte E-Mail Adresse nützlich sein.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Für das Erstellen von Nutzerkonten, die ich nur ein mal benötige.',
    True 
),(
    LAST_INSERT_ID(),
    'Für das Anmelden von mehreren Newslettern.',
    False 
),(
    LAST_INSERT_ID(),
    'Für das senden von Spam.',
    False 
),(
    LAST_INSERT_ID(),
    'Um meine Identität mit meiner E-Mail Adresse nicht zu verraten.',
    True 
);