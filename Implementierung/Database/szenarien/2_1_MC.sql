USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Welche der folgenden Aussagen sind korrekt?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ein Passwort ohne Sonderzeichen ist immer schlecht.',
    False 
), (
    LAST_INSERT_ID(),
    'Ein kurzes Passwort ist immer schlecht.',
    True 
), (
    LAST_INSERT_ID(),
    'Ein Passwort mit 6 Zeichen, dass aber sehr komplex ist, ist trozdem gut.',
    False 
), (
    LAST_INSERT_ID(),
    'Ein Passwort mit 20 Zeichen, bestehend nur aus Buchstaben und Zahlen, ist trozdem gut.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Welche der folgenden Informationen sollte man nicht in Passwörtern verwenden?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Geburtsdaten',
    True 
), (
    LAST_INSERT_ID(),
    'Namen',
    True 
), (
    LAST_INSERT_ID(),
    'Die LOTTO Gewinnzahlen der letzten Ziehung',
    False 
), (
    LAST_INSERT_ID(),
    'Die genauen Koordinaten Ihres ersten Urlaubsziels.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Warum ist folgendes Passwort eine SCHLECHTE Wahl?: Opel€Astra05'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Angreifer könnten herausgefunden haben, welches mein erstes Auto war.',
    True 
), (
    LAST_INSERT_ID(),
    'Namen von Kfz-Herstellern könnten bei einem Wörterbuchangriff verwendet werden.',
    True 
), (
    LAST_INSERT_ID(),
    'Das Passwort ist zu kurz.',
    False 
), (
    LAST_INSERT_ID(),
    'Das Passwort enthält zu wenige Sonderzeichen.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wie bewerten Sie folgendes Passwort?: Opel€1250FünvabaujoahAstra'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Das Passwort ist schlecht. Angreifer könnten herausgefunden haben, welches mein erstes Auto war.',
    False 
), (
    LAST_INSERT_ID(),
    'Das Passwort ist gut. Es ist leicht zu merken, ausreichend lang und meine persönliche Schreibweise der Zahlen 05 in Dialekt verhindert Wörterbuchangriffe.',
    True 
), (
    LAST_INSERT_ID(),
    'Das Passwort ist gut. Es hat verschiedene Zeichenarten und das Sonderzeichen steht nicht am Anfang oder am Ende.',
    True 
), (
    LAST_INSERT_ID(),
    'Das Passwort ist schlecht. Es ist zu leicht zu berechnen.',
    False 
);

