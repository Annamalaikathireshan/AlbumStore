import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FatherOfAsahdComponent } from './father-of-asahd/father-of-asahd.component';
import { RevivalComponent } from './revival/revival.component';
import { IcarusFallsComponent } from './icarus-falls/icarus-falls.component';
import { ChangesComponent } from './changes/changes.component';
import { GangLeaderComponent } from './gang-leader/gang-leader.component';
import { NavarasaComponent } from './navarasa/navarasa.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FatherOfAsahdComponent,
    RevivalComponent,
    IcarusFallsComponent,
    ChangesComponent,
    GangLeaderComponent,
    NavarasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
