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
        routeLink: "addEmployee",
        class: "pi-users"
      },
      { 
        displayText: "Email",
        routeLink: "emailTemplateList",
        class: "pi-envelope"   
      }
    ];
  }

  onMenuClick(routeLink) {
    this.router.navigate([routeLink]);
  }

}