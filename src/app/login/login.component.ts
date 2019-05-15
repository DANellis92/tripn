import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthService } from "../auth-service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  user: "";
  sessionToken = "";

  constructor(public fb: FormBuilder, public userService: AuthService) {
    this.login = fb.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }

  ngOnInit() {
    this.login = this.fb.group({
      username: "",
      password: ""
    });
  }

  onLogIn() {
    this.userService
      .logInAuth(this.login.value)
      .subscribe(
        res => {
          (this.sessionToken = res.sessionToken);
          sessionStorage.setItem("sessionToken", this.sessionToken);
          sessionStorage.setItem("userId", res.user.id);
        }
      );
  }
  username = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);

  getUsernameError() {
    return this.username.hasError("required")
      ? "You must enter a username"
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
