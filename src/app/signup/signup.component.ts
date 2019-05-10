import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signup: FormGroup
  fullname = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required])
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])

  constructor(fb: FormBuilder) { 
    this.signup = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  getFullnameError() {
    return this.fullname.hasError('required') ? 'You must enter a name' :
      '';
  }

  getUsernameError() {
    return this.username.hasError('required') ? 'You must enter a username' :
        '';
  }

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('password') ? 'Not a valid password' : 
        '';
  }
 
}
