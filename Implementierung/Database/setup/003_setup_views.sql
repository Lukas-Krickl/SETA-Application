USE seta;
CREATE VIEW mc_szenario_view AS 
SELECT sz.szenarioID, sz.kapitelnummer, sz.themanummer, mc.frage, mc.bild_url
FROM Szenario sz
JOIN MC_Frage mc
ON (sz.szenarioID=mc.szenarioID);

CREATE VIEW zuordnung_szenario_view AS 
SELECT sz.szenarioID, sz.kapitelnummer, sz.themanummer, zu.anweisung
FROM Szenario sz
JOIN Zuordnung zu
ON (sz.szenarioID=zu.szenarioID);