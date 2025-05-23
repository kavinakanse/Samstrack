import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AllUserComponent } from './components/admin/all-user/all-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/admin/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/admin/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/admin/edit-subject/edit-subject.component';
import { AddStudentComponent } from './components/faculty/add-student/add-student.component';
import { AllStudentComponent } from './components/faculty/all-student/all-student.component';
import { EditStudentComponent } from './components/faculty/edit-student/edit-student.component';
import { TakeAttendenceComponent } from './components/faculty/take-attendence/take-attendence.component';
import { ViewAttendenceComponent } from './components/faculty/view-attendence/view-attendence.component';
import { ViewAllAttendenceComponent } from './components/admin/view-all-attendence/view-all-attendence.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'all-user',
    component:AllUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-user',
    component:EditUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-subject',
    component:AddSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'all-subject',
    component:AllSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-subject',
    component:EditSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-student',
    component:AddStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'all-student',
    component:AllStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-student',
    component:EditStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'take-attendence',
    component:TakeAttendenceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-attendence',
    component:ViewAttendenceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-all-attendence',
    component:ViewAllAttendenceComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
