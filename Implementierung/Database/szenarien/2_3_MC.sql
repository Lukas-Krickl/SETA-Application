USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie VORTEILE eines Passwort-Managers aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager speichert meine Passwörter.',
    True 
), (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager schützt meine Benutzerkonten vor unberechtigtem Zugriff.',
    False 
), (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager kann mir für jedes Benutzerkonto das bestmögliche Passwort erzeugen, welches ich mir nicht einmal merken muss.',
    True 
), (
    LAST_INSERT_ID(),
    'Mit einem Passwort-Manager muss ich mir kein einziges Passwort mehr merken.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie NACHTEILE eines Passwort-Managers aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager speichert meine Passwörter.',
    False 
), (
    LAST_INSERT_ID(),
    'Die Sicherheit aller gespeicherten Passwörter hängt vom Masterpasswort ab.',
    True 
), (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager Anbieter ist für zusätzlich für die Sicherheit meiner Passwörter verantwortlich.',
    True 
), (
    LAST_INSERT_ID(),
    'Ein Passwort-Manager ist nicht sicher.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sollten Sie einen Passwortmanager benutzen?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ja, denn mit dem Passwortmanager kann ich mir für jedes Nutzerkonto ein zufälliges Passwort mit allen Zeichenarten und der maximalen Länge generieren.',
    True 
), (
    LAST_INSERT_ID(),
    'Ja, denn durch das Generieren und Speichern der Passwörter ist das jährliche Wechseln von Passwörtern geringer Aufwand und steigert die Sicherheit meiner Nutzerkonten enorm.',
    True 
), (
    LAST_INSERT_ID(),
    'Ja, denn so muss ich mir nur zu einem Passwort Gedanken machen. Auf diese Weise komme nicht in Versuchung Passwörter mehrfach zu benutzen oder aufzuschreiben.',
    True 
), (
    LAST_INSERT_ID(),
    'Ja, denn manche Passwortmanager, wie z. B. KeePass sind auch als App verfügbar, die meine Passwortdatenbank mit meinem Fingerabdruck entschlüsseln. So gehen meine Passwörter nicht verloren, sollte ich mein Masterpasswort vergessen.',
    True 
), (
    LAST_INSERT_ID(),
    'Ja, denn durch den Open Source Passwort-Manager KeePass werden meine Passwörter lokal gespeichert. Dadurch kann ich meine Passwörter mittels Backup auf einem USB-Stick in einem Safe zu Hause sichern.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Eine lokale Passwortdatenbank Datei Passwort-Manager kann problemlos über ein Cloud-Service wie z. B. Dropbox auf mehrere Geräte verteilt werden, weil sie verschlüsselt ist.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (2, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wenn mein Masterpasswort eines Passwort-Managers schwach ist, sind alle enthaltenen passwörter genau so schwach.'
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