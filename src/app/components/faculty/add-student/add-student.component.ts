import { Component } from '@angular/core';
import { StudentService } from 'src/app/sevices/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private studentService:StudentService) {}

  student = {
    name:'',
    email:''
  };
  
  addStudent() {
    this.studentService.addStudent(this.student).subscribe((res) =>{
      if(res){
        this.student.name='';
        this.student.email='';
        alert("student added successfully.")
      }
      else{
        alert("failed to add student.")
      }
    })
  }


}
