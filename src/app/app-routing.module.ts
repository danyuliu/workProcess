import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMenuComponent } from './modules/common/app-menu/app-menu.component';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EmailTemplateListComponent } from './modules/email-template/email-template-list/email-template-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/mainMenu', pathMatch: 'full' },
  { path: 'mainMenu', component: AppMenuComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'emailTemplate', component: EmailTemplateListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }