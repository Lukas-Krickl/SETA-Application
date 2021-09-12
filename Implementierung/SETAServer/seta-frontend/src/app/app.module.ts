import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { Kapitel1Component } from './pages/inhalte/kapitel1/kapitel1.component';
import { Kapitel2Component } from './pages/inhalte/kapitel2/kapitel2.component';
import { Kapitel3Component } from './pages/inhalte/kapitel3/kapitel3.component';
import { Kapitel4Component } from './pages/inhalte/kapitel4/kapitel4.component';
import { Kapitel5Component } from './pages/inhalte/kapitel5/kapitel5.component';
import { TrainingPageComponent } from './pages/training/training-page/training-page.component';
import { PruefungPageComponent } from './pages/pruefung/pruefung-page/pruefung-page.component';
import { FortschrittPageComponent } from './pages/fortschritt/fortschritt-page/fortschritt-page.component';
import { InhaltePageComponent } from './pages/inhalte/inhalte-page/inhalte-page.component';
import { AssessmentComponent } from './pages/components/assessment/assessment.component';
import { PruefungResultComponent } from './pages/components/pruefung-result/pruefung-result.component';
import { TrainingResultComponent } from './pages/components/training-result/training-result.component';
import { MonitoringComponent } from './pages/monitoring/monitoring.component';
import { ReferenzenComponent } from './pages/referenzen/referenzen.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DefaultPageComponent,
    Kapitel1Component,
    Kapitel2Component,
    Kapitel3Component,
    Kapitel4Component,
    Kapitel5Component,
    TrainingPageComponent,
    PruefungPageComponent,
    FortschrittPageComponent,
    InhaltePageComponent,
    AssessmentComponent,
    PruefungResultComponent,
    TrainingResultComponent,
    MonitoringComponent,
    ReferenzenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
