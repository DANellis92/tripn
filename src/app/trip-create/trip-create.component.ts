import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  miles = new FormControl('', [Validators.required])

  constructor(public dialog: MatDialog, fb: FormBuilder) { 
    this.tripCreate = fb.group({
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

