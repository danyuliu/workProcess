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
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
  }

  save() {

  }

  back() {
    this.router.navigate(["../"]);
  }

}