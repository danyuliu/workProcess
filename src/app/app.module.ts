import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNG */
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
/* END */

/* Components */
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
/* END */

@NgModule({
  declarations: [
    AppComponent,
    /* Components */
    AddEmployeeComponent
    /* END */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    /* PrimeNG */
    AccordionModule,
    ButtonModule,
    InputTextModule
    /* END */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
