USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Durch Ransomware entstehen folgende Schäden für das Unternehmen:'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Daten des Unternehmens gehen verloren.',
    True 
), (
    LAST_INSERT_ID(),
    'Der Computer muss ersetzt werden.',
    False 
), (
    LAST_INSERT_ID(),
    'Kapital geht verloren.',
    False 
), (
    LAST_INSERT_ID(),
    'E-Mail Addressen werden veröffentlicht.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wie kann Ransomware beseitigt werden?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Durch das volständige leeren der Festplatten.',
    True 
), (
    LAST_INSERT_ID(),
    'Durch Antivierensoftware.',
    False 
), (
    LAST_INSERT_ID(),
    'Durch Zahlen des geforderten Betrages.',
    False 
), (
    LAST_INSERT_ID(),
    'Durch die Firewall.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Ransomware ... '
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... löscht Daten von meinem Computer.',
    False 
), (
    LAST_INSERT_ID(),
    '... verschlüsselt alle Daten auf der Festplatte.',
    True 
), (
    LAST_INSERT_ID(),
    '... greift die zum Starten des Computers erforderlichen Dateien an',
    False 
), (
    LAST_INSERT_ID(),
    '.... hackt die Firewall meines Computers.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wenn Sie bemerken, dass Symbole von Daten durch das gleiche weiße Symbol ersetzt werden ist Ransomware gerade dabei Ihre Festplatte zu verschlüsseln. Was ist das erste, was Sie tun?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich ziehe den Stecker des Computers, so schnell es geht.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich rufe schnell die IT-Abteilung an und bitte um hilfe.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich Speichere meine offenen Daten und fahre den PC herunter.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich werfe den PC aus dem Fenster.',
    False 
);