
INSERT Assessment (typ, benutzername, abgeschlossen) VALUES ('VORTRAINING', 'franziskafischer', True);
INSERT benutzer_beantwortet_szenario (szenarioID, assessmentID, typ, benutzername, korrekt)
VALUES (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'VORTRAINING',
    'franziskafischer', 
    True
);

INSERT Assessment (assessmentID, typ, benutzername, abgeschlossen) VALUES (LAST_INSERT_ID(), 'NACHTRAINING', 'franziskafischer', True);
INSERT benutzer_beantwortet_szenario (szenarioID, assessmentID, typ, benutzername, korrekt)
VALUES (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 9) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 10) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 11) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 12) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 13) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 14) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 15) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 16) b ),
    LAST_INSERT_ID(),
    'NACHTRAINING',
    'franziskafischer', 
    True
);

INSERT Assessment (typ, benutzername, abgeschlossen) VALUES ('PRUEFUNG', 'franziskafischer', False);
INSERT Assessment (typ, benutzername, abgeschlossen) VALUES ('PRUEFUNG', 'franziskafischer', True);
INSERT benutzer_beantwortet_szenario (szenarioID, assessmentID, typ, benutzername, korrekt)
VALUES (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=1 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=2 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
),(
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=3 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=4 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 1) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 2) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 3) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 4) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 5) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
    
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 6) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    False
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 7) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
), (
    (SELECT MAX(b.szenarioID) FROM (SELECT a.szenarioID FROM Szenario a WHERE kapitelnummer=5 ORDER BY szenarioID ASC LIMIT 8) b ),
    LAST_INSERT_ID(),
    'PRUEFUNG',
    'franziskafischer', 
    True
);