import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"]
})
  
export class AppMenuComponent implements OnInit {

  menuList: any = [];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.menuList = [
      {
        displayText: "Employee",
        routeLink: "employeeList",
        class: "pi-users"
      },
      { 
        displayText: "Email",
        routeLink: "emailTemplate",
        class: "pi-envelope" 
      },
      { 
        displayText: "Schedule",
        routeLink: "onBoardProcess",
        class: "pi-spinner" 
      }
    ];
  }
  
  onMenuClick(routeLink) {
    this.router.navigate([routeLink]);
  }

}