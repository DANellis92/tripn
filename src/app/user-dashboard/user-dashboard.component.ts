import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {

  trips: Object;

  constructor(private data: TripService) { }

  ngOnInit() {
    this.data.getMyTrips().subscribe(data => {
      this.trips = data
      console.log(this.trips);
    })
  }

}
