import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService,
    private router:Router
  ){}

  usercredentials = {
  username: '',
  password: ''
}

  loginUser(){
    this.userService.loginUser(this.usercredentials).subscribe(res =>{

      if(res === null){
        alert("Invalid username & password!");
      }
      else{
        if(res.role==='admin'){
          this.router.navigateByUrl('/admin-dashboard');
        }else{
          this.router.navigateByUrl('/faculty-dashboard')
        }
        
      }
      
      console.log(res);

    })

      
  }
}
