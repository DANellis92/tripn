import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthService } from "../auth-service/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: "";
  @Input("sessionToken") sessionToken = "";

  constructor(public fb: FormBuilder, public User: AuthService) {
    // this.signupForm = fb.group({
    //   hideRequired: false,
    //   floatLabel: "auto"
    // });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: "",
      username: "",
      email: "",
      password: ""
    });
  }

  onSignUp() {
    console.log(this.signupForm.value, "ahhhh");
    // console.log(this.user);
    this.User.signUpAuth(this.signupForm.value).subscribe(
      res => (
        (this.sessionToken = res.sessionToken),
        console.log(this.sessionToken),
        sessionStorage.setItem("sessionToken", this.sessionToken)
      )
    );
  }
  fullName = new FormControl("", [Validators.required]);
  username = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  getFullnameError() {
    return this.fullName.hasError("required")
      ? "You must enter a name"
      : "test";
  }

  getUsernameError() {
    return this.username.hasError("required")
      ? "You must enter a username"
      : "";
  }

  getEmailError() {
    return this.email.hasError("required")
      ? "You must enter an email"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  getPasswordError() {
    return this.password.hasError("required")
      ? "You must enter a password"
      : this.password.hasError("password")
      ? "Not a valid password"
      : "";
  }
}
