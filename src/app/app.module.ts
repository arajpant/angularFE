import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { StagingSchedulerComponent } from './settings/staging-scheduler/staging-scheduler.component';
import { TransactSchedulerComponent } from './settings/transact-scheduler/transact-scheduler.component'

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    AnalyticsComponent,
    StagingSchedulerComponent,
    TransactSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
