
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    userPassword: new FormControl(""),
    userRePassword: new FormControl(""),
    userTerms: new FormControl()
  });
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  registerUser(formControl: any):void{
    console.log(formControl.value.userName)
    if(formControl.value.userPassword === formControl.value.userRePassword && formControl.value.userTerms === true){
      this.auth.registerUser(formControl.value.userName, formControl.value.userPassword).subscribe(data => console.log(data))
    }else{
      alert("Password does not match or missed the terms agreement")
    }
  }
}
