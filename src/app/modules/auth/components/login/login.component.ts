import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/validators/custom-validators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successLogin: boolean = true;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl("",Validators.minLength(6)),
    password: new FormControl("",[
      Validators.required,
    CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
    CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
    CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
    Validators.minLength(8)
    ])
  })
  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }
  loginUser(loginForm: FormGroup){
    const data = loginForm.value;
    this.auth.loginUser(data).subscribe(res =>{
      if(res.success == false){
        this.successLogin = false;
      }else{
        console.log('successlogin')
        localStorage.setItem("userAccessToken",res.token);
        this.router.navigate(['/products/list'])
      }
    })
  }
}
