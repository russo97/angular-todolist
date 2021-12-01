import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { LoginServiceService as loginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm?: FormGroup;

  constructor (private loginService: loginService) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      user: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmitLogin () {
    let user = this.logInForm?.controls['user'].value;
    let pass = this.logInForm?.controls['password'].value;

    this.loginService.logIn(
      user, pass
    );
  }

}
