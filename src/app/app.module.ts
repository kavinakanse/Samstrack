import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AllUserComponent } from './components/admin/all-user/all-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/admin/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/admin/edit-subject/edit-subject.component';
import { ViewAllAttendenceComponent } from './components/admin/view-all-attendence/view-all-attendence.component';
import { FacultyDashboardComponent } from './components/faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './components/faculty/faculty-menu/faculty-menu.component';
import { AddStudentComponent } from './components/faculty/add-student/add-student.component';
import { AllStudentComponent } from './components/faculty/all-student/all-student.component';
import { EditStudentComponent } from './components/faculty/edit-student/edit-student.component';
import { TakeAttendenceComponent } from './components/faculty/take-attendence/take-attendence.component';
import { ViewAttendenceComponent } from './components/faculty/view-attendence/view-attendence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HidePasswordPipe } from './pipes/hide-password.pipe';
import { AllSubjectComponent } from './components/admin/all-subject/all-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AllUserComponent,
    EditUserComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ViewAllAttendenceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentComponent,
    EditStudentComponent,
    TakeAttendenceComponent,
    ViewAttendenceComponent,
    HidePasswordPipe,
    AllSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
