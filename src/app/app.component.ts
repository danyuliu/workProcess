import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isShowMenu: boolean = true;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.isShowMenu = true;
    this.commonService.backToMainMenu().subscribe((res) => {
      
    })
  }

  onPageNavigation(routeLink) {
    this.isShowMenu = false;
    this.router.navigate([routeLink]);
  }

}
