import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()

export class EmailService {

  EmailAPIPath = environment.baseUrl + "mail";

  constructor(
    private http: HttpClient
  ) { }

  getEmailTemplate() {
    var headers = new HttpHeaders({ "Content-Type": "application/json" });
    var url = this.EmailAPIPath;
    return this.http.get(url, { headers: headers })
    // .map((res) => {  
    //   return res;
    // });
  }

  createEmailTemplate(obj) {
    var headers = new HttpHeaders({ "Content-Type": "application/json" });
    var url = this.EmailAPIPath;
    return this.http.post(url, JSON.stringify(obj), { headers: headers })
    // .map((res) => {  
    //   return res;
    // });
  }
  
}