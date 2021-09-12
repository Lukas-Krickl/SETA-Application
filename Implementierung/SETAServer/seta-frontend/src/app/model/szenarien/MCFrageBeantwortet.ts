import { MCFrage } from "./MCFrage";

export interface MCFrageBeantwortet extends MCFrage {
    ausgewaehlt: Set<number> //antwortID
}