import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    
  }

  userForm=new FormGroup({
    "email":new FormControl(''),
    "password":new FormControl('')  

  })

  loginCheck(){
    this.loginService.logIn(this.userForm.value).subscribe(
      response=>{
        alert("login success....");
      },error=>{
      alert("ivalid user");
    }
    )

  }
}
