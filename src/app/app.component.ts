import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isShowMenu: boolean = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit() { }

  onPageNavigation(routeLink) {
    this.isShowMenu = false;
    this.router.navigate([routeLink]);
  }

}
