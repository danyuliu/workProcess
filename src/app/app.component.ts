import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShowMenu: boolean = true;

  constructor(
    private router: Router
  ) {}

  onPageNavigation(routeLink) {
    this.isShowMenu = false;
    this.router.navigate([routeLink]);
  }

}
