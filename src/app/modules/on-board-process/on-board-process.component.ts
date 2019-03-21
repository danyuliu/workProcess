import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: "on-board-process",
  templateUrl: "./on-board-process.component.html",
  styleUrls: ["./on-board-process.component.scss"]
})
  
export class OnBoardProcessComponent implements OnInit {
  
  items: MenuItem[];
  activeIndex: number = 1;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {label: 'Email Notification'},
      {label: 'Background Check'},
      {label: 'On-boarding'},
      {label: 'First Survey'}
    ];
  }

  save() {

  }

  back() {
    this.router.navigate(["../"]);
  }

}