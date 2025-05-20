import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/sevices/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  constructor(private studentService:StudentService) {}

  students: any[] = [];

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this.studentService.allStudent().subscribe((res)=>{
      this.students = res as any[];
      if(this.students.length == 0){
        alert("No student found")
      }
    })
  }

  deleteStudent(id: number) {
     const confirmDelete = confirm("Do you want to delete this student?");
  if (confirmDelete) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        alert("Student deleted Successfully.");
        this.getAllStudent();
      },
      error: (error: any) => {
        alert("Failed to delete Student.");
      }
    });
  }
    
  }

}
