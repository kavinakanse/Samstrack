import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/sevices/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {

   constructor(private subjectService: SubjectService) { }

  subjectList: any[] = [];

  ngOnInit(): void {
    this.allSubject();
  }

  allSubject() {
    this.subjectService.allSubject().subscribe((res) => {
      this.subjectList = res;
    })
  }

  deleteSubject(id: number) {
    const confirmDelete = confirm("Do you want to delete this subject?");
  if (confirmDelete) {
    this.subjectService.deleteSubject(id).subscribe({
      next: (res) => {
        alert("User deleted Successfully.");
        this.allSubject();
      },
      error: (error: any) => {
        alert("Failed to delete subject.");
      }
    });
  }
  }
}
