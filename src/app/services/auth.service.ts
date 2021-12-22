import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(data: any){
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data);
  }
  registerUser(userName: string, userPass: string){
    let newUser = {
      username: userName,
      password: userPass
    };
    return this.http.post("http://smktesting.herokuapp.com/api/register/",newUser);

  }
}
