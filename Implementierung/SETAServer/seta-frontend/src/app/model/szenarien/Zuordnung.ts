import { Szenario } from "./Szenario";
import { ZuordnungsEintrag } from "./ZuordnungsEintrag";

export interface Zuordnung extends Szenario {
    anweisung:string;
    eintraege:ZuordnungsEintrag[]
}