USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie bemerken eine potenzielle Vireninfektion, aber leider ist keine IT-Fachkraft erreichbar. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich löse das Problem, indem ich über den Taskmanager herausfinde welches programm der Virus sein könnte und lösche dessen Daten.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich schalte den Computer sofort aus.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich lade mir externe Software zur beseitigung des Virus herunter.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich versuche im Internet mehr zu den Symptomen des Virus herauszufinden.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wenn meine Anti-Vieren-Software einen Virus in Quarantäne stellt muss ich noch ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... den Virus löschen.',
    False 
), (
    LAST_INSERT_ID(),
    '... die EDV-Abteilung informieren.',
    True 
), (
    LAST_INSERT_ID(),
    '... das Programm, mit dem der Virus in mein System gekommen ist entfernen.',
    False 
), (
    LAST_INSERT_ID(),
    '... meinen Computer neu starten.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 4);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Was tun Sie wenn Sie bemerken, dass Schadsoftware auf Ihren PC gelangt sein könnte?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich informiere die IT-Abteilung und schalte den Computer aus.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich informiere die IT-Abteilung und arbeite weiter.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich informiere die IT-Abteilung wenn ich jemanden aus dieser Abteilung treffe.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich informiere die IT-Abteilung und zerstöre den Computer.',
    False 
);