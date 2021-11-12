import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staging-scheduler',
  templateUrl: './staging-scheduler.component.html',
  styleUrls: ['./staging-scheduler.component.scss']
})
export class StagingSchedulerComponent implements OnInit {

  constructor() { }
  title:any;
  ngOnInit(): void {
    this.title ="Scheduler-Staging"
  }

}


