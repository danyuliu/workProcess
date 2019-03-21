import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeService } from "../../../services/employee.service";

@Component({
  selector: "employee-operate",
  templateUrl: "./employee-operate.component.html",
  styleUrls: ["./employee-operate.component.scss"]
})
  
export class EmployeeOperateComponent implements OnInit {

  @Input() operateType: string;
  @Input() operateData: any;
  @Output() operateEmployee: EventEmitter<boolean> = new EventEmitter<boolean>();

  employee: any = {
    name: null,
    joinDate: null
  }

  todayDate: Date = new Date();
  isErrorDialogVisible: boolean = false;
  errorDialogHeader: string;
  errorDialogMessage: string;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    if(this.operateType == 'Modify') {
      this.employee = this.operateData;
    }
  }

  validateInput() {
    var checkStatus = true;
    if(!this.employee.name) {
      checkStatus = false;
    }
    if(!this.employee.joinDate) {
      checkStatus = false;
    }
    return checkStatus;
  }

  save() {
    if(this.validateInput()) {
      this.employeeService.createEmployeeTemplate(this.employee).subscribe((data) => {
        if(data && data['id']) {
          this.isErrorDialogVisible = true;
          this.errorDialogHeader = "Information";
          this.errorDialogMessage = "Employee Template is created successfully, The Employee # is " + data['id'];
          this.operateEmployee.emit(false);
        }
      });
    } else {
      this.isErrorDialogVisible = true;
      this.errorDialogHeader = "Information";
      this.errorDialogMessage = "Mandatory fields";
    }
  }

  cancel() {
    this.operateEmployee.emit(false);
  }

}