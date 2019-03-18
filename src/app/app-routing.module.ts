import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EmailTemplateComponent } from './modules/email-template/email-template.component';

const routes: Routes = [
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'emailTemplate', component: EmailTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }