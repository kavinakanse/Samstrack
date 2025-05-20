import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/sevices/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    
  }
  
    subject: any = {};

  getSubjectById(id:number){
    this.subjectService.getSubjectById(id).subscribe((res) =>{
      this.subject = res;
    })
  }

  updateSubject() {
    this.subjectService.updateSubject(this.subject).subscribe((res) =>{
      alert("Subject is Updated Successfully.");
    })
  }

}
