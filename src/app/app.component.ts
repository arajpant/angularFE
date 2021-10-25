import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }
  output:any;
  title:any;
  ngOnInit() {
 
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute)
        rt.data.subscribe((data: { title: string; }) => {
          console.log(data);
          this.title = data.title;
          this.titleService.setTitle(data.title)})
      })
 
  }
 
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      this.output = this.getChild(activatedRoute.firstChild);
      return this.output;
    } else {
      return activatedRoute;
    }
 
  }
 
}