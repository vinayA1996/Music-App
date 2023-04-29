import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus: boolean=false;

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:1829/user/";

  signUpUrl:string="http://localhost:63300/spotify/user/addUser"

  signUp(signUpData:any){
    return this.httpClient.post(this.signUpUrl,signUpData);
}
logIn(loginData:any){
  return this.httpClient.post(this.baseUrl+"login",loginData);
}

}
