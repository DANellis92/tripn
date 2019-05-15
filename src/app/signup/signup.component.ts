import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthService } from "../auth-service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: "";
  useBtn = false;
  fullName = new FormControl("", [Validators.required]);
  username = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  @Input("sessionToken") sessionToken = "";

  constructor(
    public fb: FormBuilder,
    public User: AuthService,
    private route: Router
  ) {
    this.signupForm = fb.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSignUp() {
    console.log(this.signupForm.value);
    // console.log(this.user);
    this.User.signUpAuth(this.signupForm.value).subscribe(
      res => (
        (this.sessionToken = res.sessionToken),
        console.log(this.sessionToken),
        sessionStorage.setItem("userId", res.user.id),
        sessionStorage.setItem("sessionToken", this.sessionToken),
        this.route.navigate(["/dashboard"])
      )
    );
  }

  getFullnameError() {
    return this.fullName.hasError("required") ? "You must enter a name" : null;
  }

  getUsernameError() {
    return this.username.hasError("required")
      ? "You must enter a username"
      : null;
  }

  getEmailError() {
    return this.email.hasError("required")
      ? "You must enter an email"
      : this.email.hasError("email")
      ? "Not a valid email"
      : null;
  }

  getPasswordError() {
    return this.password.hasError("required")
      ? "You must enter a password"
      : this.password.hasError("password")
      ? "Not a valid password"
      : null;
  }
}
