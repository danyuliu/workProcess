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
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
/* END */

/* Components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent } from './modules/common/app-menu/app-menu.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeOperateComponent } from './modules/employee/employee-operate/employee-operate.component';
import { EmailTemplateListComponent } from './modules/email-template/email-template-list/email-template-list.component';
import { EmailTemplateOperateComponent } from './modules/email-template/email-template-operate/email-template-operate.component';
import { OnBoardProcessComponent } from './modules/on-board-process/on-board-process.component';
/* END */

/* Service */
import { EmployeeService } from './services/employee.service';
import { EmailService } from './services/email.service';
/* END */

@NgModule({
  declarations: [
    /* Components */
    AppComponent,
    AppMenuComponent,
    EmployeeListComponent,
    EmployeeOperateComponent,
    EmailTemplateListComponent,
    EmailTemplateOperateComponent,
    OnBoardProcessComponent
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
    StepsModule,
    ToastModule
    /* END */
  ],
  providers: [
    EmployeeService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
