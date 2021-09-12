import { Injectable } from '@angular/core';
import { MCFrage } from '../model/szenarien/MCFrage';
import { MCFrageBeantwortet } from '../model/szenarien/MCFrageBeantwortet';
import { Zuordnung } from '../model/szenarien/Zuordnung';
import { ZuordnungBeantwortet } from '../model/szenarien/ZuordnungBeantwortet';

@Injectable({
  providedIn: 'root'
})
export class TypeCheckService {

  constructor() { }

  isSzenarioMCFrage(szenario: any): szenario is MCFrage {
    if (szenario === undefined) {
      return false;
    }
    return "frage" in szenario;
  }

  isSzenarioMCFrageBeantwortet(szenario: any): szenario is MCFrageBeantwortet {
    if (szenario === undefined) {
      return false;
    }
    return "ausgewaehlt" in szenario;
  }


  isSzenarioZuordnung(szenario: any): szenario is Zuordnung {
    if (szenario === undefined) {
      return false;
    }
    return "anweisung" in szenario;
  }

  isSzenarioZuordnungBeantwortet(szenario: any): szenario is ZuordnungBeantwortet {
    if (szenario === undefined) {
      return false;
    }
    return "zugeordnet" in szenario;
  }
}
