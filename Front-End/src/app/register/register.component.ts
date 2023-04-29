import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit{
  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    
  }

  userForm=new FormGroup({
    "firstName":new FormControl(''),
    "lastName":new FormControl(''),
    "email":new FormControl(''),
    "password":new FormControl('')  

  })

  registerCheck(){
    const user={
      firstName:this.userForm.value.firstName,
      lastName:this.userForm.value.lastName,
      email:this.userForm.value.email,
      password:this.userForm.value.password,
      playlist:[]

    }
    this.loginService.signUp(user).subscribe(
      response=>{
        alert("registered success....");
      },error=>{
      alert("ivalid user");
    }
    )

  }
}

