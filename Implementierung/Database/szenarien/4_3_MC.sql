USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (4, 3);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wie finden Sie als Laie heraus, dass eine E-Mail wirklich von einer bestimmten Person stammt?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Ich frage sie persönlich',
    True 
),(
    LAST_INSERT_ID(),
    'Durch die Absenderadresse',
    False 
),(
    LAST_INSERT_ID(),
    'Garnicht, wenn ich die Person nicht kenne.',
    True 
),(
    LAST_INSERT_ID(),
    'Durch den Inhalt der E-Mail',
    False 
);