import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  options: FormGroup
  email = new FormControl('',[Validators.required, Validators.email]);

  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
