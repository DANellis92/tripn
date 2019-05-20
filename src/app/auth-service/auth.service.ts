import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.models";
import { APIURL } from "../../environments/environment.prod";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public dbUrl = APIURL;

  constructor(public jwtHelper: JwtHelperService, public http: HttpClient) {}

  signUpAuth(user: User): Observable<any> {
    let userObj = { user: user };
    console.log("inside service => ", userObj);
    return this.http.post<any>(
      this.dbUrl + "/user/signup",
      { user: user },
      httpOptions
    );
  }
  logInAuth(user: User): Observable<any> {
    return this.http.post<any>(this.dbUrl + "/user/login", user, httpOptions);
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
