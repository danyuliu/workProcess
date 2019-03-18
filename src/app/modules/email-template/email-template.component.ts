import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "email-template",
    templateUrl: "./email-template.component.html",
    styleUrls: ["./email-template.component.scss"]
})
  
export class EmailTemplateComponent implements OnInit {

    templateName: string;
    bodyFormat: string = "htmlBody";
    isHtmlBody: boolean = true;
    templateContent: any;
    uploadUrl: string;

    ngOnInit() {
    }

    selectRadio(){
        if(this.bodyFormat == "htmlBody") {
            this.isHtmlBody = true;
            this.templateContent = null;
        } else {
            this.isHtmlBody = false;
        }
    }
}