USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Cookies sind prinzipiell gefährlich.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wahr',
    False 
),(
    LAST_INSERT_ID(),
    'Falsch',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Tracking Cookies stehlen meine daten.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wahr',
    False 
),(
    LAST_INSERT_ID(),
    'Falsch',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Tracking Cookies werden für personalisierte Werbung verwendet.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wahr',
    True 
),(
    LAST_INSERT_ID(),
    'Falsch',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Angenommen Sie sind mit personalisierter Werbung einverstanden, weil Sie dadurch Produkte die Sie interessieren schneller finden. Bestehen weitere bedenken zu Tracking Cookies?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ja',
    False 
), (
    LAST_INSERT_ID(),
    'Nein',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Cookies sind ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... Programme, die auf meinem Computer laufen.',
    False 
), (
    LAST_INSERT_ID(),
    '... Daten, die auf meinem Computer gespeichert sind.',
    True 
), (
    LAST_INSERT_ID(),
    '... immer unerwünscht.',
    False 
), (
    LAST_INSERT_ID(),
    '... bösartige Programme, die Webseiten auf meinem Computer speichern können.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie wollen sich einen neuen Geschirrspüler kaufen und sehen sich auf Produkte auf unterschiedlichen Herstellerseiten an. Am nächsten Tag fällt Ihnen auf, dass Sie auf Ihrem Social Media Profil Werbung zu Geschirrspülern bekommen. Warum ist das so?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Google hat meine Daten verkauft.',
    False 
), (
    LAST_INSERT_ID(),
    'Mein Smartphone hört mich über das Mikrofon ab.',
    False 
), (
    LAST_INSERT_ID(),
    'Tracking Cookies haben meine Suche nach Geschirrspülern gespeichert.',
    True 
), (
    LAST_INSERT_ID(),
    'Mein Computer ist mit einem Virus infiziert.',
    False 
);

