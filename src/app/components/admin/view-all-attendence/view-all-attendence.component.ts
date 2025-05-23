import { Component, OnInit } from '@angular/core';
import { AttendenceService } from 'src/app/sevices/attendence.service';
import { SubjectService } from 'src/app/sevices/subject.service';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-view-all-attendence',
  templateUrl: './view-all-attendence.component.html',
  styleUrls: ['./view-all-attendence.component.css']
})
export class ViewAllAttendenceComponent implements OnInit {
  constructor(
      private subjectService: SubjectService,
      private userService: UserService,
      private attendanceService: AttendenceService
    ) { }
  
    subjects: any[] = [];
    users: any[] = [];
    attendanceRecords: any[] = [];
  
    selectedUser: string = '';
    selectedSubject: any;
    selectedDate: string = '';
  
    ngOnInit(): void {
      this.getSubjects();
      this.getUsers();
    }
  
    getSubjects() {
      this.subjectService.allSubject().subscribe((res) => {
        this.subjects = res;
      });
    }
  
    getUsers() {
      this.userService.getAllFaculty().subscribe((res) => {
        this.users = res;
      })
    }
  
    changeUser(event: any) {
      this.selectedUser = event.target.value;
  
    }
    changeSubject(event: any) {
      this.selectedSubject = event.target.value;
    }
  
    changeDate(event: any) {
      this.selectedDate = event.target.value;
    }
  
    selectedStudents: any[] = [];
    isModalOpen: boolean = false;
    showStudents(students: any[]) {
      this.selectedStudents = students;
      this.isModalOpen = true;
      console.log(this.selectedStudents);
  
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
  
    fetchAttendanceRecords() {
      this.attendanceService.filteredAttendance(this.selectedUser, this.selectedSubject, this.selectedDate).subscribe((res) => {
        this.attendanceRecords  = res as any;
        if (this.attendanceRecords.length === 0) {
          alert("No attendance records found for the selected date");
        }
      })
    }
  
    fetchAllAttendanceRecords() {
      this.attendanceService.allAttendance().subscribe((res) => {
        this.attendanceRecords = res as any;
        if (this.attendanceRecords.length === 0) {
          alert("No attendance records found for the selected date");
        }
      })
    }
}
