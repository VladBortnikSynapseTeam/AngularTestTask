
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/core/validators/custom-validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl("",Validators.minLength(6)),
    password: new FormControl("",[
    Validators.required,
    CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
    CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
    CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
    Validators.minLength(8)
  ]),
    userRePassword: new FormControl("",[
      Validators.required,
      CustomValidators.patternValidator(/[a-zA-Z]/,{noAlphabeticCharacters:true}),
      CustomValidators.patternValidator(/[0-9]/,{noNumericCharacters: true}),
      CustomValidators.patternValidator(/[!@\$%\^\&*\)\(+=._-]/,{noSpecialCharacters:true}),
      Validators.minLength(8)
    ]),
    userTerms: new FormControl(false, Validators.required)
  });
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  registerUser(formControl: any):void{
    
  }
  checkValid(){
    
  }
}
