import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
 
  constructor(private http:HttpClient) { }

  addSubject(subject: any):Observable<any> {
    const apiUrl = "http://localhost:8080/subject/add-subject";
    return this.http.post(apiUrl,subject);
  }

  allSubject():Observable<any> {
    const apiUrl = `http://localhost:8080/subject/get-all-subjects`;
    return this.http.get(apiUrl);
  }

  getSubjectById(id: number):Observable<any> {
    const apiUrl = `http://localhost:8080/subject/get-subject-by-id/${id}`;
    return this.http.get(apiUrl);
  }

  updateSubject(subject: any):Observable<any> {
    const apiUrl = `http://localhost:8080/subject/update-subject`;
    return this.http.put(apiUrl, subject);
  }

  deleteSubject(id: number):Observable<any> {
    const apiUrl = `http://localhost:8080/subject/delete-subject/${id}`;
    return this.http.delete(apiUrl, { 'responseType': 'text' });
  }
  

}
