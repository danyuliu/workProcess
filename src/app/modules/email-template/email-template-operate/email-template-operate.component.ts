import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from '@angular/router';
import { EmailService } from "../../../services/email.service";

@Component({
  selector: "email-template-operate",
  templateUrl: "./email-template-operate.component.html",
  styleUrls: ["./email-template-operate.component.scss"]
})
  
export class EmailTemplateOperateComponent implements OnInit {

  @Input() operateType: string;
  @Input() operateData: any;
  @Output() operateEmailTemplate: EventEmitter<boolean> = new EventEmitter<boolean>();

  emailTemplate: any = {
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
    if(this.operateType == 'Modify') {
      this.emailTemplate = this.operateData;
    }
  }

  selectbodyFormat() {
    if(this.bodyFormat == "htmlBody") {
      this.isHtmlBody = true;
      this.emailTemplate.text = null;
    } else {
      this.isHtmlBody = false;
      this.emailTemplate.htm = null;
    }
  }

  selectsendDate() {
    if(this.sendDate == "sentDate") {
      this.isFixedDate = true;
      this.daysDisplay = null;
    } else {
      this.isFixedDate = false;
      this.emailTemplate.sentDate = null;
    }
  }

  validateInput() {
    var checkStatus = true;
    if(!this.emailTemplate.subject) {
      checkStatus = false;
    }
    if(!this.emailTemplate.htm || !this.emailTemplate.text) {
      checkStatus = false;
    }
    if(!this.emailTemplate.sentDate || !this.daysDisplay) {
      checkStatus = false;
    }
    return checkStatus;
  }

  save() {
    if(this.validateInput()) {
      this.emailTemplate.days = this.daysDisplay;
      this.emailService.createEmailTemplate(this.emailTemplate).subscribe((data) => {
        if(data && data['id']) {
          this.isErrorDialogVisible = true;
          this.errorDialogHeader = "Information";
          this.errorDialogMessage = "Email Template is created successfully, The Email # is " + data['id'];
          this.operateEmailTemplate.emit(false);
        }
      });
    } else {
      this.isErrorDialogVisible = true;
      this.errorDialogHeader = "Information";
      this.errorDialogMessage = "Mandatory fields";
    }
  }

  cancel() {
    this.operateEmailTemplate.emit(false);
  }

}