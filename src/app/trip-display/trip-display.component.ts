import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-display',
  templateUrl: './trip-display.component.html',
  styleUrls: ['./trip-display.component.css']
})
export class TripDisplayComponent implements OnInit {

  @Input("trip") trip: Object;


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(TripDisplayDialog, {
      height: '80vh',
      width: '90vw',
      data: this.trip,
      panelClass:"tripn-no-padding-dialog"

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit() {

  }
}

@Component({
  selector: 'trip-display-dialog',
  templateUrl: 'trip-display-dialog.html',
})
export class TripDisplayDialog {
  userId: any;
  @Input("sessionToken") sessionToken: string;

  onEdit() {
    this.fetchSingleTrip();
    console.log('received event');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tripService: TripService
  ){}

  fetchSingleTrip() {
    this.tripService.getSingleTrip(this.userId, this.data.id, this.sessionToken).subscribe(data => {
      this.data = data
      console.log(this.data);
    })
  }

  ngOnInit() {
  }
}
