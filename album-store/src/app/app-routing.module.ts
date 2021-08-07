import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesComponent } from './changes/changes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FatherOfAsahdComponent } from './father-of-asahd/father-of-asahd.component';
import { GangLeaderComponent } from './gang-leader/gang-leader.component';
import { IcarusFallsComponent } from './icarus-falls/icarus-falls.component';
import { NavarasaComponent } from './navarasa/navarasa.component';
import { RevivalComponent } from './revival/revival.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'FatherofAsahd',
    component: FatherOfAsahdComponent
  },
  {
    path: 'revival',
    component: RevivalComponent
  },
  {
    path: 'Icarus-Falls',
    component: IcarusFallsComponent
  },
  {
    path: 'Changes',
    component: ChangesComponent
  },
  {
    path: 'Navarasa',
    component: NavarasaComponent
  },
  {
    path: 'Gang-leader',
    component: GangLeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
