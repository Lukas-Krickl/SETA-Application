USE seta;
INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Unter welchen Bedingungen ist es erlaubt personenbezogene Daten weiterzugeben?'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Wenn mir mein Arbeitgeber klare Anweisungen dazu gibt.',
    True 
), (
    LAST_INSERT_ID(),
    'Wenn mich ein Polizist darum bittet.',
    False 
), (
    LAST_INSERT_ID(),
    'Wenn es offenbar die Person ist, der die Daten zugehörig sind.',
    False 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Sensible personenbezogene Daten stehen unter besonderem Schutz. Wählen Sie alle Datentypen aus, die als solche gelten!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'philosophische Überzeugung',
    True 
), (
    LAST_INSERT_ID(),
    'Gewerkschaftszugehörigkeit',
    True 
), (
    LAST_INSERT_ID(),
    'Ausbildung',
    False 
), (
    LAST_INSERT_ID(),
    'politische Meinung',
    True 
);

INSERT Szenario (kapitelnummer, themanummer) VALUES (1, 1);
INSERT MC_Frage (szenarioID, frage) VALUES (
    LAST_INSERT_ID(),
    'Wählen Sie folgende Datentypen aus, die als personenbezogene Daten gelten!'
);
INSERT MC_Antwort (szenarioID, text, korrekt) VALUES (
    LAST_INSERT_ID(),
    'Arbeitsverträge und Dienstzettel',
    True 
), (
    LAST_INSERT_ID(),
    'Standortdaten',
    True 
), (
    LAST_INSERT_ID(),
    'Sexualleben',
    True 
), (
    LAST_INSERT_ID(),
    'politische Meinung',
    True 
);