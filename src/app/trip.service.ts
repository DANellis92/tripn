import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Trip } from "./models/trip.models";
import { Observable } from "rxjs";
import { APIURL } from "../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class TripService {
  private dbUrl = APIURL;

  constructor(private http: HttpClient) {}

  getMyTrips(userId, sessionToken): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.get(this.dbUrl + "/trips/mytrips/", httpOptions);
  }

  getSingleTrip(userId, tripId, sessionToken): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.get(this.dbUrl + "/trips/thistrip/" + tripId, httpOptions);
  }

  createTrip(trip: Trip, sessionToken): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.post<any>(
      this.dbUrl + "/trips/create",
      { trip: trip },
      httpOptions
    );
  }

  editTrip(trip: Trip, sessionToken, tripId): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.put<any>(
      this.dbUrl + "/trips/edit/" + tripId,
      { trip: trip },
      httpOptions
    );
  }

  deleteTrip(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.delete(
      this.dbUrl + "/trips/deletetrip/" + id,
      httpOptions
    );
  }
}
