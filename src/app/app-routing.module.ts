import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    data:{
      title: 'Dashboard'
    }
  },
  {
    path:'analytic',
    component:AnalyticsComponent,
    data:{
      title: 'Analytic'
    }
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
