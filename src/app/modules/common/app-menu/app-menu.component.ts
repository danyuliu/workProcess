import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"]
})
  
export class AppMenuComponent implements OnInit {

  menuList: any = [];
  @Output() onPageNavigation: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.menuList = [
      {
        displayText: "Employee",
        routeLink: "addEmployee",
        class: "pi-users"
      },
      { 
        displayText: "Email",
        routeLink: "emailTemplate",
        class: "pi-envelope"   
      }
    ];
  }

  onMenuClick(routeLink) {
    this.onPageNavigation.emit(routeLink);
  }

}