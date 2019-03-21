import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { EmailService } from "../../../services/email.service";
import * as moment from "moment";

@Component({
  selector: "email-template-list",
  templateUrl: "./email-template-list.component.html",
  styleUrls: ["./email-template-list.component.scss"]
})
  
export class EmailTemplateListComponent implements OnInit {

  cols: any[];
  tableData: any = [];
  selectedTableData: any;

  isShowOperateEmailTem: boolean = false;
  operateType: string;

  isErrorDialogVisible: boolean = false;
  errorDialogHeader: string;
  errorDialogMessage: string;

  constructor(
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'subject', header: 'Template Name', width: '170px' },
      {field: 'attach', header: 'Attachment Address', width: '200px' },
      { field: 'htm', header: 'Html Attachment Address', width: '250px' },
      { field: 'text', header: 'Text Content', width: '150px' },
      { field: 'sentDate', header: 'Send Date', width: '110px' },
      { field: 'days', header: 'Fixed Days', width: '120px' }
    ];
    this.refreshDataTable();
  }

  refreshDataTable() {
    this.emailService.getEmailTemplate().subscribe((res) => {
      if(res) {
        this.tableData = res;
        this.tableData.forEach(data => {
          data.sentDate = data.sentDate? moment(new Date(data.sentDate)).format("DD/MM/YYYY"): "";
        });
      }
    }, (err) => {
      this.isErrorDialogVisible = true;
      this.errorDialogHeader = "Error";
      this.errorDialogMessage = "Error in getEmailTemplate: " + err;
    });
  }

  onOperateEmailTemplate($event) {
    this.refreshDataTable();
    this.isShowOperateEmailTem = $event;
  }

  goOperateEmailTem(operateType) {
    this.operateType = operateType;
    this.isShowOperateEmailTem = true;
  }

  back() {
    this.router.navigate(["../"]);
  }

}