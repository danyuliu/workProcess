import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()

export class EmployeeService {

  EmployeeAPIPath = environment.baseUrl + "employee";

  constructor(
    private http: HttpClient
  ) { }

  getEmployeeTemplate() {
    var headers = new HttpHeaders({ "Content-Type": "application/json" });
    var url = this.EmployeeAPIPath;
    return this.http.get(url, { headers: headers })
    // .map((res) => {  
    //   return res;
    // });
  }

  createEmployeeTemplate(obj) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" });
    var url = this.EmployeeAPIPath;
    return this.http.post(url, JSON.stringify(obj), { headers: headers })
    // .map((res) => {  
    //   return res;
    // });
  }
  
}