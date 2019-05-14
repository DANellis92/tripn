import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.models";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public dbUrl = "https://tripn-server.herokuapp.com/user/";

  constructor(public jwtHelper: JwtHelperService, public http: HttpClient) {}

  signUpAuth(user: User): Observable<any> {
    let userObj = { user: user };
    console.log("inside service => ", userObj);
    return this.http.post<any>(
      this.dbUrl + "signup",
      { user: user },
      httpOptions
    );
  }
  logInAuth(user: User): Observable<any> {
    return this.http.post<any>(this.dbUrl + "login", user, httpOptions);
  }

  public isAuthenticated(): boolean {
    const sessionToken = sessionStorage.getItem("sessionToken");

    if (sessionToken === undefined || sessionToken === null) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(sessionToken);
    }
  }
}
