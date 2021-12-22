import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  constructor(private auth: AuthService) { }
  
  ngOnInit(): void {
  }
  loginUser(loginForm: FormGroup){
    const data = loginForm.value;
    this.auth.loginUser(data).subscribe(data => console.log(data));
  }
}
