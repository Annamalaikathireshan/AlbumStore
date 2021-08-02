import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FatherOfAsahdComponent } from './father-of-asahd/father-of-asahd.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
