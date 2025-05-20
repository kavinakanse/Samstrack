import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    
  }

  user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    role:''
  }

  getUserByUsername(username:any){
    this.userService.getUserByUsername(username).subscribe((res) =>{
      this.user = res;
    })
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe((res) =>{
      alert("Updated Successfully");
    })
  }

}
