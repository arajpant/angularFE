import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  date = new Date();
  curr_year : any;
  ngOnInit(): void {
    this.curr_year = this.date.getFullYear()

  }

}
