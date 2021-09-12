USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT MC_Frage (szenarioID, frage, bild_url) VALUES (
    LAST_INSERT_ID(),
    'Was bedeutet dieses Symbol neben der URL einer Webseite?', 
    '/images/kapitel/3/themen/2/grey_lock.jpg'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Die Verbindung zu dieser Seite ist TLS verschlüsselt.',
    True 
), (
    LAST_INSERT_ID(),
    'Das Zertifikat dieser Seite wurde verifiziert.',
    True 
), (
    LAST_INSERT_ID(),
    'Das HTTPS Protokoll wird für die Verbindung verwendet.',
    True 
), (
    LAST_INSERT_ID(),
    'Das HTML Protokoll wird für die Verbindung verwendet.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT MC_Frage (szenarioID, frage, bild_url) VALUES (
    LAST_INSERT_ID(),
    'Was bedeutet dieses Symbol neben der URL einer Webseite?', 
    '/images/kapitel/3/themen/2/open_lock.jpg'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Das HTTP Protokoll wird für die Verbindung zu der Seite verwendet.',
    True 
), (
    LAST_INSERT_ID(),
    'Das HTTPS Protokoll wird für die Verbindung zu der Seite verwendet.',
    False 
), (
    LAST_INSERT_ID(),
    'Die Verbindung zu dieser Seite ist TLS verschlüsselt.',
    False 
), (
    LAST_INSERT_ID(),
    'Diese Seite hat kein Zertifikat.',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT MC_Frage (szenarioID, frage, bild_url) VALUES (
    LAST_INSERT_ID(),
    'Was bedeutet dieses Symbol neben der URL einer Webseite?', 
    '/images/kapitel/3/themen/2/grey_lock_warn.jpg'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Das Zertifikat der Webseite kann abgelaufen oder ungülltig sein.',
    True 
), (
    LAST_INSERT_ID(),
    'Alle meine Eingaben werden nicht verschlüsselt.',
    False 
), (
    LAST_INSERT_ID(),
    'Die Seite hat nur eine Teilweise verschlüsselung. Das bedeutet, dass z.B. Bilder nicht verschlüsselt werden.',
    True 
), (
    LAST_INSERT_ID(),
    'Die Seite verwendet keine TLS verschlüsselung.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Eine TLS verschlüsselte verbindung bedeutet, dass ...'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... meine Daten übertragen werden, ohne dass eine dritte Person mithören kann.',
    True 
), (
    LAST_INSERT_ID(),
    '... der Empfänger über ein Zertifikat verifiziert wurde.',
    True 
), (
    LAST_INSERT_ID(),
    '... meine Daten auch beim Empfänger verschlüsselt gespeichert werden.',
    False 
), (
    LAST_INSERT_ID(),
    '... eine staatliche Spionageagentur trozdem mithören kann.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (3, 2);
INSERT MC_Frage (szenarioID, frage, bild_url) VALUES (
    LAST_INSERT_ID(),
    'Eine Webseite mit diesem Symbol kann problemlos benutzt werden, solange ...', 
    '/images/kapitel/3/themen/2/open_lock.jpg'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    '... man keine Daten eingibt, die verschlüsselt werden sollten.',
    True 
), (
    LAST_INSERT_ID(),
    '... man nur die Informationen der Seite liest.',
    True 
), (
    LAST_INSERT_ID(),
    '... die Verbindung TLS verschlüsselt ist.',
    False 
), (
    LAST_INSERT_ID(),
    '... die Seite durch ihr Zertifikat verifiziert wurde.',
    False 
);
