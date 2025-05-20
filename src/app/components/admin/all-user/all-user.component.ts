import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  userList:any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void{
    this.allUser();
  }

  allUser(){

    this.userService.allUser().subscribe(res => {
      this.userList = res;
      console.log(res);

    });
  }

 deleteUser(username: string) {
  const confirmDelete = confirm("Do you want to delete this user?");
  if (confirmDelete) {
    this.userService.deleteUser(username).subscribe({
      next: (res) => {
        alert("User deleted Successfully.");
        this.allUser();
      },
      error: (error: any) => {
        alert("Failed to delete user.");
      }
    });
  }
}

}
