import { MCAntwort } from "./MCAntwort";
import { Szenario } from "./Szenario";

export interface MCFrage extends Szenario {
    frage:string,
    bild_url:string,
    antworten: MCAntwort[]
}