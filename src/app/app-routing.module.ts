import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListRecordsComponent } from './list-records/list-records.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'listrecords',
        component: ListRecordsComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
  {
    path: 'Classes/:id',
    component: ClassesComponent,
  },
  {
    path: 'GetByClassId/:id',
    component: StudentsComponent,
  },

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
