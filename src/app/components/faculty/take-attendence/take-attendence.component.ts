import { Component, OnInit } from '@angular/core';
import { AttendenceService } from 'src/app/sevices/attendence.service';
import { StudentService } from 'src/app/sevices/student.service';
import { SubjectService } from 'src/app/sevices/subject.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css']
})
export class TakeAttendenceComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private subjectService: SubjectService,
    private attendenceService : AttendenceService
  ) { }

  ngOnInit(): void {
    this.getAllStudent();
    this.getAllSubject();
  }

  subjects: any[] = [];
  students: any[] =[];

  selectedSubject: number=0;
  selectedUser: any[] = [];
  selectedDate: string = '';
  selectedTime: string = '';
  selectedStudents: any[] = [];

  getAllSubject(){
    this.subjectService.allSubject().subscribe((res) =>{
      this.subjects = res;
    })
  }

  getAllStudent(){
    this.studentService.allStudent().subscribe((res) => {
      this.students = res as any;
    })
  }

  submitAttendance() {
    const selectedStudentsData = this.students.filter(student =>
      this.selectedStudents.includes(student.id)
    );

    const attendanceData = {
      subjectId: this.selectedSubject,
      username: localStorage.getItem('user'),
      date: this.selectedDate,
      time: this.convertTo12HourFormat(this.selectedTime),
      students: selectedStudentsData
    };

    console.log('Attendance Submitted:', attendanceData);

    this.attendenceService.saveAttendance(attendanceData).subscribe((res) => {
    this.selectedStudents = [];
      alert('Attendance successfully submitted!');
    });

  }
  
  toggleStudent(studentId: number) {
    if(this.selectedStudents.includes(studentId)){
      this.selectedStudents = this.selectedStudents.filter(id => id !== studentId);
    }else{
      this.selectedStudents.push(studentId);
    }
  }


  toggleAll(event: any) {
    if(event.target.checked){
      this.selectedStudents = this.students.map(student => student.id);
    }else{
      this.selectedStudents = [];
    }
  }

  convertTo12HourFormat(time: string): string {
    if (!time) return '';

    let [hours, minutes] = time.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  changeTime($event: Event) {
    this.selectedTime = ($event.target as HTMLSelectElement).value;
  }

  changeDate($event: Event) {
    this.selectedDate = ($event.target as HTMLInputElement).value;
  }

  changeSubject($event: Event) {
    this.selectedSubject = Number(($event.target as HTMLSelectElement).value);
  }

}
