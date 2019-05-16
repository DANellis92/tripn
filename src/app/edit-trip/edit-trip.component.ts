import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  @Input("trip") trip: Object;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EditTripDialog, {
      height: '80vh',
      width: '90vw',
      panelClass:"tripn-no-padding-dialog",
      data: this.trip
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'edit-trip-dialog',
  templateUrl: 'edit-trip-dialog.html',
})
export class EditTripDialog {
  editTrip: FormGroup
  tripName = new FormControl('', [Validators.required]);
  startDate = new FormControl('', [Validators.required]);
  endDate = new FormControl('');
  distance = new FormControl('', [Validators.required]);
  @Input("sessionToken") sessionToken; string;
  @Input("userId") userId: any;

  constructor(
    public dialogRef: MatDialogRef<EditTripDialog>, 
    private fb: FormBuilder,
    public tripService: TripService,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { 
    this.editTrip = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.editTrip = this.fb.group({
      tripName: new FormControl(this.data.tripName, [Validators.required]),
      startDate: new FormControl(this.data.startDate, [Validators.required]),
      endDate: new FormControl(this.data.endDate),
      distance: new FormControl(this.data.distance, [Validators.required])
    });
    console.log(this.data);
  }

  onEditTrip(): void {
    this.tripService
      .editTrip(this.editTrip.value, this.sessionToken, this.data.id )
      .subscribe(Trip => this.dialogRef.close());
  }

  getTripnameError() {
    return this.tripName.hasError('required') ? 'You must enter a name' : null;
  }

  getStartdateError() {
    return this.startDate.hasError('required') ? 'You must enter a start date' : null;
  }

  getMilesError() {
    return this.distance.hasError('required') ? 'You must enter a distance' : null;
  }
}
