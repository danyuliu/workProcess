import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "add-employee",
    templateUrl: "./add-employee.component.html",
    styleUrls: ["./add-employee.component.scss"]
})
  
export class AddEmployeeComponent implements OnInit {

    employeeId: string;

    ngOnInit() {
    }
}