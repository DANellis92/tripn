import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EditTripDialog, {
      height: '80vh',
      width: '90vw',
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
  selector: 'edit-trip-dialog',
  templateUrl: 'edit-trip-dialog.html',
})
export class EditTripDialog {
  editTrip: FormGroup
  tripname = new FormControl('', [Validators.required]);
  startdate = new FormControl('', [Validators.required]);
  enddate = new FormControl('');
  miles = new FormControl('', [Validators.required])

  constructor(public dialog: MatDialog, fb: FormBuilder) { 
    this.editTrip = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

getTripnameError() {
  return this.tripname.hasError('required') ? 'You must enter a name' : '';
}

getStartdateError() {
  return this.startdate.hasError('required') ? 'You must enter a start date' : '';
}

getMilesError() {
  return this.miles.hasError('required') ? 'You must enter a distance' : '';
}
}
