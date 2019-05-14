import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  
  constructor(private http: HttpClient) {}

  getMyTrips() {
    return this.http.get(
      "https://tripn-server.herokuapp.com/trips/mytrips"
    )
  }

  getSingleTrip() {

  }

  createTrip() {

  }

  editTrip() {

  }

  deleteTrip() {

  }
}
