import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITokenResponse, IUserAuthRequest} from '../core/interfaces/model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(data: IUserAuthRequest){
    return this.http.post<ITokenResponse>('http://smktesting.herokuapp.com/api/login/', data);
  }
  registerUser(userName: string, userPass: string){
    let newUser = {
      username: userName,
      password: userPass
    };
    return this.http.post<ITokenResponse>("http://smktesting.herokuapp.com/api/register/",newUser);
  }
}
