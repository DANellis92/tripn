import { Component, OnInit, Input, } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {

  trips: Object;
  userId: any;
  @Input("sessionToken") sessionToken: string;


  constructor(private data: TripService) {
    this.userId = sessionStorage.getItem("userId");
  }

  ngOnInit() {
    this.data.getMyTrips(this.userId, this.sessionToken).subscribe(data => {
      this.trips = data;
      console.log(this.trips);
    })
  }

}
