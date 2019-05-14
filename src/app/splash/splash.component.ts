import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  logIn = "Log In";
  signup = "Sign Up";
  title = true;
  constructor() {}

  ngOnInit() {}

  changeForm() {
    this.title = !this.title;
  }
}
