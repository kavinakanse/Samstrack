import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private http:HttpClient) { }

  saveAttendance(attendanceData: { subjectId: number; username: string | null; date: string; time: string; students: any[]; }) {
    const apiUrl = `http://localhost:8080/attendance/take-attendance`;
    return this.http.post(apiUrl, attendanceData);
  }

  allAttendance() {
    const apiUrl = `http://localhost:8080/attendance/get-all-attendance-records`;
    return this.http.get(apiUrl);
  }
  
  filteredAttendance(selectedUser: string, selectedSubject: string, selectedDate: any) {
    const apiUrl = `http://localhost:8080/attendance/get-attendance/${selectedUser}/${selectedSubject}/${selectedDate}`;
    return this.http.get(apiUrl);
  }

}
