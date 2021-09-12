USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie Anzeichen für eine Computer-Virusinfektion aus!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Sie können auf bestimmte Daten nicht mehr zugreifen.',
    True 
), (
    LAST_INSERT_ID(),
    'Der Lüfter des Computers wird laut, aber er arbeitet nur sehr langsam.',
    True 
), (
    LAST_INSERT_ID(),
    'Beim starten eines Programmes öffnet sich ein fenster mit dem Titel "Update". Anschließend hat sich das Icon des Programms verändert.',
    False 
), (
    LAST_INSERT_ID(),
    'Mein Computer wird sehr langsam und zeigt Warnmeldungen bezüglich einer "Defragmentierung" an.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie müssen einen Kundenauftrag bearbeiten und bekommen ein Dokument mit dem Namen "Auftrag_Nr2045621.pdf.exe" per E-Mail zugesandt. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich öffne das Dokument mit einem PDF reader.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich lösche die E-Mail und Informiere meinen Vorgesetzten oder meine Vorgesetzte.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich öffne die Datei mit einem Doppel-klick.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich überprüfe die Datei mit meiner Antivieren-Software.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie müssen einen Kundenauftrag bearbeiten und bekommen ein Dokument mit dem Namen "Auftrag_Nr5728456.exp.pdf" per E-Mail zugesandt. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich öffne das Dokument mit einem PDF reader.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich lösche die E-Mail und Informiere meinen Vorgesetzten oder meine Vorgesetzte.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich öffne die Datei mit einem Doppel-klick.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich überprüfe die Datei mit meiner Antivieren-Software.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sie müssen einen Kundenauftrag bearbeiten und bekommen ein Dokument mit dem Namen "Auftrag_Nr9784573.rar" per E-Mail zugesandt. Wie gehen Sie vor?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich öffne das Dokument mit einem PDF reader.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich lösche die E-Mail und Informiere meinen Vorgesetzten oder meine Vorgesetzte.',
    False 
), (
    LAST_INSERT_ID(),
    'Ich öffne die Datei mit einem Doppel-klick.',
    True 
), (
    LAST_INSERT_ID(),
    'Ich überprüfe die Datei mit meiner Antivieren-Software.',
    True 
);
