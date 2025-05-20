import { Component } from '@angular/core';
import { SubjectService } from 'src/app/sevices/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  constructor(private subjectService:SubjectService){}

  subject={
    name:''
  }

  addSubject(){
    this.subjectService.addSubject(this.subject).subscribe((res) =>{
      if(res!=null){
        alert("Subject added Successfully.");
        this.subject.name='';
      }else{
        alert("Something went wrong.");
      }
    })
  }
}
