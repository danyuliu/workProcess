import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

/* PrimeNG */
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SpinnerModule} from 'primeng/spinner';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
/* END */

/* Components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent } from './modules/common/app-menu/app-menu.component';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EmailTemplateListComponent } from './modules/email-template/email-template-list/email-template-list.component';
import { EmailTemplateCreateComponent } from './modules/email-template/email-template-operate/email-template-operate.component';
/* END */

/* Service */
import { EmailService } from './services/email.service';
/* END */

@NgModule({
  declarations: [
    /* Components */
    AppComponent,
    AppMenuComponent,
    AddEmployeeComponent,
    EmailTemplateListComponent,
    EmailTemplateCreateComponent
    /* END */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    /* PrimeNG */
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    SpinnerModule,
    CalendarModule,
    DialogModule,
    TableModule,
    /* END */
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
