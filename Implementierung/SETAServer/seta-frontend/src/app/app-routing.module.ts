import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { FortschrittPageComponent } from './pages/fortschritt/fortschritt-page/fortschritt-page.component';
import { InhaltePageComponent } from './pages/inhalte/inhalte-page/inhalte-page.component';
import { PruefungPageComponent } from './pages/pruefung/pruefung-page/pruefung-page.component';
import { TrainingPageComponent } from './pages/training/training-page/training-page.component';
import { Kapitel1Component } from './pages/inhalte/kapitel1/kapitel1.component';
import { Kapitel2Component } from './pages/inhalte/kapitel2/kapitel2.component';
import { Kapitel3Component } from './pages/inhalte/kapitel3/kapitel3.component';
import { Kapitel4Component } from './pages/inhalte/kapitel4/kapitel4.component';
import { Kapitel5Component } from './pages/inhalte/kapitel5/kapitel5.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { ReferenzenComponent } from './pages/referenzen/referenzen.component';

const routes: Routes = [
  {
    path: 'inhalte', component: InhaltePageComponent, children: [
      {
        path: 'kapitel/1', component: Kapitel1Component
      }, {
        path: 'kapitel/2', component: Kapitel2Component
      }, {
        path: 'kapitel/3', component: Kapitel3Component
      }, {
        path: 'kapitel/4', component: Kapitel4Component
      }, {
        path: 'kapitel/5', component: Kapitel5Component
      }, {
        path: '', redirectTo: 'kapitel/1', pathMatch: 'full'
      }
    ]
  },
  { path: 'training', component: TrainingPageComponent },
  { path: 'pruefung', component: PruefungPageComponent },
  { path: 'fortschritt', component: FortschrittPageComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'referenzen', component: ReferenzenComponent },
  { path: '', component: DefaultPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
