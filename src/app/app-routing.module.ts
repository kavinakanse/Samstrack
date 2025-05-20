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
    component:AdminDashboardComponent
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'all-user',
    component:AllUserComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  },
  {
    path:'add-subject',
    component:AddSubjectComponent
  },
  {
    path:'all-subject',
    component:AllSubjectComponent
  },
  {
    path:'edit-subject',
    component:EditSubjectComponent
  },
  {
    path:'add-student',
    component:AddStudentComponent
  },
  {
    path:'all-student',
    component:AllStudentComponent
  },
  {
    path:'edit-student',
    component:EditStudentComponent
  },
  {
    path:'take-attendence',
    component:TakeAttendenceComponent
  },
    {
    path:'view-attendence',
    component:ViewAttendenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
