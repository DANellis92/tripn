import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  private dbUrl = "https://tripn-server.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get("https://tripn-server.herokuapp.com/user/allusers");
  }

  getTripsbyUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.get(
      "https://tripn-server.herokuapp.com/trips/alltrips",
      httpOptions
    );
  }
  tripDelete(id, userId): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.delete(
      "https://tripn-server.herokuapp.com/trips/admindeltrip/" +
        id +
        "/" +
        userId,
      httpOptions
    );
  }
  deleteUser(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.delete(
      "https://tripn-server.herokuapp.com/user/adminuserdelete/" + id,
      httpOptions
    );
  }
}
