import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { EmailService } from "../../../services/email.service";

@Component({
  selector: "email-template",
  templateUrl: "./email-template.component.html",
  styleUrls: ["./email-template.component.scss"]
})
  
export class EmailTemplateCreateComponent implements OnInit {

  newTemplate: any = {
    subject: null,
    attach: null,
    htm: null,
    text: null,
    sentDate: null,
    days: null
  }

  daysDisplay: string;
  bodyFormat: string = "htmlBody";
  isHtmlBody: boolean = true;
  sendDate: string = "sentDate";
  isFixedDate: boolean = true;
  todayDate: Date = new Date();
  isErrorDialogVisible: boolean = false;
  errorDialogHeader: string;
  errorDialogMessage: string;

  constructor(
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit() {
  }

  selectbodyFormat() {
    if(this.bodyFormat == "htmlBody") {
      this.isHtmlBody = true;
      this.newTemplate.text = null;
    } else {
      this.isHtmlBody = false;
      this.newTemplate.htm = null;
    }
  }

  selectsendDate() {
    if(this.sendDate == "sentDate") {
      this.isFixedDate = true;
      this.daysDisplay = null;
    } else {
      this.isFixedDate = false;
      this.newTemplate.sentDate = null;
    }
  }

  validateInput() {
    var checkStatus = true;
    return checkStatus;
  }

  save() {
    if(this.validateInput()) {
      this.newTemplate.days = this.daysDisplay;
      this.emailService.createEmailTemplate(this.newTemplate).subscribe((data) => {
        if(data && data['id']) {
          this.isErrorDialogVisible = true;
          this.errorDialogHeader = "Information";
          this.errorDialogMessage = "Email Template is created successfully, The Email # is " + data['id'];
        }
      });
    } else {
      this.isErrorDialogVisible = true;
      this.errorDialogHeader = "Information";
      this.errorDialogMessage = "Mandatory fields";
    }
  }

  cancel() {
    this.router.navigate(["../"]);
  }

}