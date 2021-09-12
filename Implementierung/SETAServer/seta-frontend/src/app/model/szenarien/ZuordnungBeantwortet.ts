import { Zuordnung } from "./Zuordnung";

export interface ZuordnungBeantwortet extends Zuordnung {
    zugeordnet:Map<number, string> //eintragID, begriff
}