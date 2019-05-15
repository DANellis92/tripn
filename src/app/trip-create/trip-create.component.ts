import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

    openDialog() {
      const dialogRef = this.dialog.open(TripCreateDialog, {
        height: '80vh',
        width: '90vw'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit() {
  }
}

@Component({
  selector: 'trip-create-dialog',
  templateUrl: 'trip-create-dialog.html',
})
export class TripCreateDialog {
  tripCreate: FormGroup
  tripname = new FormControl('', [Validators.required]);
  startdate = new FormControl('', [Validators.required]);
  enddate = new FormControl('');
  miles = new FormControl('', [Validators.required]);
  trip = [];
  @Input("sessionToken") sessionToken: string;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private tripService: TripService) { 
    this.tripCreate = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.tripCreate = this.fb.group({
      tripname : new FormControl(null, [Validators.required]),
      startdate : new FormControl(null, [Validators.required]),
      enddate : new FormControl(null),
      miles : new FormControl(null, [Validators.required])
    })
  }

  onCreateTrip() : void {
    this.tripService.createTrip(this.tripCreate.value, this.sessionToken).subscribe(Trip => this.trip = Trip);
    console.log(this.tripCreate.value);
  }

  getTripnameError() {
    return this.tripname.hasError('required') ? 'You must enter a name' : null;
  }

  getStartdateError() {
    return this.startdate.hasError('required') ? 'You must enter a start date' : null;
  }

  getMilesError() {
    return this.miles.hasError('required') ? 'You must enter a distance' : null;
  }
}

