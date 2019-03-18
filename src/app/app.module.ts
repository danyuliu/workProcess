import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNG */
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FileUploadModule} from 'primeng/fileupload';
/* END */

/* Components */
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EmailTemplateComponent } from './modules/email-template/email-template.component';
/* END */

@NgModule({
  declarations: [
    AppComponent,
    /* Components */
    AddEmployeeComponent,
    EmailTemplateComponent
    /* END */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    /* PrimeNG */
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    FileUploadModule
    /* END */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
