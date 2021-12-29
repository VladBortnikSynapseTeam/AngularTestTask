import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITokenResponse, IUserAuthRequest} from '../core/interfaces/model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUser(data: IUserAuthRequest){
    return this.http.post<ITokenResponse>(environment.login, data);
  }
  registerUser(userName: string, userPass: string){
    let newUser = {
      username: userName,
      password: userPass
    };
    return this.http.post<ITokenResponse>(environment.register,newUser);
  }
}
