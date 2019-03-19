import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { EmailService } from "../../../services/email.service";

@Component({
  selector: "email-template-list",
  templateUrl: "./email-template-list.component.html",
  styleUrls: ["./email-template-list.component.scss"]
})
  
export class EmailTemplateListComponent implements OnInit {

  cars: any = [];

  constructor(
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.cars = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

}