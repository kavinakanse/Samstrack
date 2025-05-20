import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/sevices/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute) {}

  student={
    id:0,
    name:'',
    email:''
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  getStudentById(id:any){
    this.studentService.getStudentById(id).subscribe((res)=>{
      this.student = res as any;
    });
  }
  updateStudent() {
    this.studentService.updateStudent(this.student).subscribe((res) =>{
      if(res){
        alert("Student updated Successfully")
      }
      else{
        alert("Error occurred while updating student")
      }
    })
  }

}
