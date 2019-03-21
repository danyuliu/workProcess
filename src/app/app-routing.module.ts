import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMenuComponent } from './modules/common/app-menu/app-menu.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmailTemplateListComponent } from './modules/email-template/email-template-list/email-template-list.component';
import { OnBoardProcessComponent } from './modules/on-board-process/on-board-process.component';

const routes: Routes = [
  { path: '',   redirectTo: '/mainMenu', pathMatch: 'full' },
  { path: 'mainMenu', component: AppMenuComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'emailTemplate', component: EmailTemplateListComponent },
  { path: 'onBoardProcess', component: OnBoardProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }