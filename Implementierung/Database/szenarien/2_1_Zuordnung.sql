USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
'Beurteilen Sie die Stärke gegebener Passwörter!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'stark',
    'i9YlFnLDYel8V32l1hil'
), (
    LAST_INSERT_ID(),
    'stark',
    '3a0dead123d4b5c5213e47db67bd0877'
), (
    LAST_INSERT_ID(),
    'schwach',
    'Bruno97'
), (
    LAST_INSERT_ID(),
    'schwach',
    'f#%d2d'
), (
    LAST_INSERT_ID(),
    'stark',
    'DaHamIsAmSch,enstenDa4aFad'
), (
    LAST_INSERT_ID(),
    'schwach',
    'FiatPunto2004'
);


INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT Zuordnung (szenarioID, anweisung) VALUES (LAST_INSERT_ID(), 
'Beurteilen Sie die Stärke gegebener Passwörter!');
INSERT Eintrag (szenarioID, begriff, beschreibung) VALUES (
    LAST_INSERT_ID(),
    'stark',
    'Co!!ectHorseBadderyStaple'
), (
    LAST_INSERT_ID(),
    'schwach',
    'wertzyxcvasdf123'
), (
    LAST_INSERT_ID(),
    'schwach',
    'trowssap9182'
), (
    LAST_INSERT_ID(),
    'stark',
    'SteiraBua84S.T.SFiastnföd'
), (
    LAST_INSERT_ID(),
    'stark',
    'mei1B!ERisneddep*pad'
), (
    LAST_INSERT_ID(),
    'schwach',
    'Maximilian98Paul02'
);
