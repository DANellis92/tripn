import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from './models/trip.models';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: sessionStorage.getItem("sessionToken")
  })
}

@Injectable({
  providedIn: 'root'
})

export class TripService {
  private dbUrl = 'https://tripn-server.herokuapp.com/';
  
  constructor(private http: HttpClient) {}

  getMyTrips(userId, sessionToken): Observable<any> {
    console.log(userId);
    return this.http.get(
      this.dbUrl+"trips/mytrips/", httpOptions
    );
  }

  getSingleTrip() {

  }

  createTrip(trip: Trip, sessionToken) : Observable<any> {
    return this.http.post<any>(
      this.dbUrl+"trips/create", {trip: trip}, httpOptions
    );
  }

  editTrip() {

  }

  deleteTrip() {

  }
}
