USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie alle korrekte Aussagen aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Bekannten Websites sind eher zu vertrauen als Unbekannten.',
    True 
), (
    LAST_INSERT_ID(),
    'Unbekannten Websites ist garnicht zu vertrauen.',
    False 
), (
    LAST_INSERT_ID(),
    'Bei bekannten Websites besteht keinerlei Risiko.',
    False 
), (
    LAST_INSERT_ID(),
    'Einer Website mit verifiziertem TLS Zertifikat kann blind vertraut werden.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie benötigen zusätliche Software um ein Bild zu bearbeiten. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich lade mir ein belibiges Bildbearbeitungsprogramm herunter.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich frage meine Vorgesetzten oder EDV-Verantwortliche um Rat, wenn ich mir unsicher bin.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich lade mir eine gratis Version von Adobe Photoshop herunter, weil dies ein sehr bekanntes und daher ungefähliches Programm ist.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich lade mir vertrauenswürdige Open Source Software herunter.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Eine Ihrer Kolleginnen besteht darauf einen neuen Bildschirmschoner aus dem Internet zu laden und bittet Sie um Hilfe. Was empfehlen Sie ihr?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich rate ihr davon ab, wenn Sie unerfahren mit dem Internet ist. Der Download von Daten birgt immer ein Risiko.',
    True 
), (
    LAST_INSERT_ID(),
    'Personalisierung des Arbeitsplatzes fördert die Arbeitsmoral. Daher empfehle ich ihr den Bildschirmschoner herunterzuladen, der ihr am Besten gefällt.',
    False 
), (
    LAST_INSERT_ID(),
    'Bildschirmschoner sind nur Bilder und daher unbedenklich. Sie kann sich einen belibigen herunterladen.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich rate ihr die EDV-Verantwortlichen zu fragen.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie korrekte Aussagen aus.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Da der Programmcode von Open Source Software offen und frei zugänglich ist, hat diese Software keine Lizenz und kann beliebig verwendet werden.',
    False 
), (
    LAST_INSERT_ID(),
    'Gratis Programme können ohne rechtliche bedenken verwendet werden.',
    False 
), (
    LAST_INSERT_ID(),
    'Software, die ich gekauft und rechtmäßig erworben habe, kann ich verwenden wie ich will.',
    False 
), (
    LAST_INSERT_ID(),
    'Programme haben Lizenzen die mir vorschreiben, wie ich sie verwenden darf.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Soziale Netzwerke die ich nur privat verwende können sich nicht auf meinen Beruf auswirken.'
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


INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Persönliche Daten die sich nicht auf meinen Beruf beziehen kann ich in Sozialen Netzwerken problemlos angeben, da die Hälfte davon schon im Telefonbuch öffentlich ist.'
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Der Grund für Risiken in Sozialen Netzwerken sind deren Anbieter, die meine Daten ohne meiner Zustimmung weitergeben.'
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

