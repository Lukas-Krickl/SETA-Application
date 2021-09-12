USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Für wie viele Benutzerkonten kann ein Passwort verwendet werden?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '2',
    False 
), (
    LAST_INSERT_ID(),
    '1',
    True 
), (
    LAST_INSERT_ID(),
    '3',
    False 
), (
    LAST_INSERT_ID(),
    '2, wenn es besonders stark ist',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Es ist prinzipiell keine gute Idee Passwörter zu speichern.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wenn mich mein Vorgesetzter oder meine Vorgesetzte um das Passwort eines Benutzerkontos bittet, teile ich es ihm oder ihr sofort mit. '
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Passwörter sollten nicht verschickt werden. Auch nicht bei garantierter Verschlüsselung.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wenn eine unberechtigte Person mein Passwort zu einem meiner Benutzerkonten erhält, bestehen mehr Risiken als das unerlaubte Lesen meiner Daten.'
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


INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sollte eine unberechtigte Person das Passwort zu eines meiner Benutzerkonten erhalten, ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... kann es passieren, dass ich keinerlei Zugriff mehr auf mein Benutzerkonto habe. Es gäbe auch keine Möglichkeit mehr meinen Zugang wiederherzustellen.',
    True 
), (
    LAST_INSERT_ID(),
    '... kann ich in jedem Fall mit einer "Passwort vergessen" funktion mein Passwort zurücksetzen.',
    False 
), (
    LAST_INSERT_ID(),
    '... sind alle Risiken abgewandt, wenn ich dies rechtzeitig erkannt und mein Passwort geändert habe.',
    False 
), (
    LAST_INSERT_ID(),
    '... und sollte es sich um ein E-Mail Konto handeln, könnte sie eine Weiterleitung aller Mails an eine fremde Adresse einrichten und ich würde es nicht bemerken.',
    True 
);