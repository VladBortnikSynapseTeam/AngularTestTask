import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITokenResponse, IUserAuthRequest } from '../core/interfaces/user-auth/user-auth.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(data: IUserAuthRequest){
    return this.http.post<ITokenResponse>(`${environment.apiURL}/login/`, data);
  }
  registerUser(userName: string, userPass: string){
    let newUser = {
      username: userName,
      password: userPass
    };
    return this.http.post<ITokenResponse>(`${environment.apiURL}/register/`,newUser);
  }
}
