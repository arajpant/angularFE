import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StagingSchedulerComponent } from './settings/staging-scheduler/staging-scheduler.component';
import { TransactSchedulerComponent } from './settings/transact-scheduler/transact-scheduler.component';


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
    path:'transact_scheduler',
    component:TransactSchedulerComponent,
    data:{
      title: 'Scheduler'
    }
  },
  {
    path:'staging_scheduler',
    component:StagingSchedulerComponent,
    data:{
      title: 'Scheduler'
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
