import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeService } from "../../../services/employee.service";
import * as moment from "moment";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
  
export class EmployeeListComponent implements OnInit {

  cols: any[];
  tableData: any = [];
  selectedTableData: any;

  isShowOperateEmployee: boolean = false;

  isErrorDialogVisible: boolean = false;
  errorDialogHeader: string;
  errorDialogMessage: string;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Employee ID', width: '170px' },
      {field: 'joinDate', header: 'Entry Date', width: '120px' }
    ];
    this.refreshDataTable();
  }

  refreshDataTable() {
    this.employeeService.getEmployeeTemplate().subscribe((res) => {
      if(res) {
        this.tableData = res;
        this.tableData.forEach(data => {
          data.joinDate = data.joinDate? moment(new Date(data.joinDate)).format("DD/MM/YYYY"): "";
        });
      }
    }, (err) => {
      this.isErrorDialogVisible = true;
      this.errorDialogHeader = "Error";
      this.errorDialogMessage = "Error in getEmployeeTemplate: " + err;
    });
  }

  onOperateEmployee($event) {
    this.refreshDataTable();
    this.isShowOperateEmployee = $event;
  }

  create() {
    this.isShowOperateEmployee = true;
  }

  edit(){
    this.isShowOperateEmployee = true;
  }

  back() {
    this.router.navigate(["../"]);
  }

}