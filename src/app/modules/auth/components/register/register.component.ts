
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/core/validators/custom-validators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  userTerms: false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  registerForm: FormGroup;
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.minLength(6), Validators.required]),
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
      userTerms: new FormControl(false, [Validators.required])
    });
  }

  registerUser(formControl: any){

    if(formControl.valid && formControl.value.userTerms == true){
      let data = formControl.value;
      this.auth.registerUser(data.username,data.password)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem("userAccessToken",res.token);
        this.router.navigate(['/products/list'])
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
