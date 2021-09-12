USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wann benötigen Sie Antivieren-Software?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Nur wenn der Computer mit dem Internet verbunden ist.',
    False 
), (
    LAST_INSERT_ID(),
    'Immer',
    True 
), (
    LAST_INSERT_ID(),
    'Dann, wenn ich einen Virus habe.',
    False 
), (
    LAST_INSERT_ID(),
    'Nicht wenn ich eine Firewall habe, die Viren aufhält und erst garnicht in mein System kommen lässt.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Einer Ihrer Kollegen sagt Ihnen, das er keine Updates durchführe, weil im Anschluss einige seiner Programme nicht mehr funktionieren würden. Was sagen Sie dazu?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Er soll mir die problematischen Programme nennen um zu wissen, ob ich auch betroffen sein könnte und Updates aussetzen sollte.',
    False 
), (
    LAST_INSERT_ID(),
    'In Updates schließen hersteller potentielle Sicherheitslücken und sollten so früh wie möglich durchgeführt werden.',
    True 
), (
    LAST_INSERT_ID(),
    'Seine problematischen Programme könnten Viren sein.',
    False 
), (
    LAST_INSERT_ID(),
    'Updates installieren nur weitere Features und er kann sie aussetzen, wenn er sie nicht brauchen sollte.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie alle Gründe aus, warum das Herunterladen von Daten und Programmen aus dem Internet mit Vorsicht zu genißen ist.'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Programme könnten Viren enthalten',
    True 
), (
    LAST_INSERT_ID(),
    'Meine Festplatte könnte voll werden.',
    False 
), (
    LAST_INSERT_ID(),
    'Sie könnten unrechtmäßig verändert worden sein und Lizenzprobleme schaffen.',
    True 
), (
    LAST_INSERT_ID(),
    'Sie könnten Rechenleistung verschwenden',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Komprimierte Ordner können sofort mit Anti-Viren-Software überprüft werden. '
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Komprimierte Ordner müssen zuerst entpackt und anschließend mit Anti-Viren-Software überprüft werden. '
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

INSERT Szenario (kapitelnummer, themanummer) VALUES (5, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Bei der Installation von neuer Software wähle ich die Empfohlenen Instalations-Optionen.'
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

