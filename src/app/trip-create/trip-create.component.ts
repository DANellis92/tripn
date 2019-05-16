import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { TripService } from "../trip.service";

@Component({
  selector: "app-trip-create",
  templateUrl: "./trip-create.component.html",
  styleUrls: ["./trip-create.component.css"]
})
export class TripCreateComponent implements OnInit {
  @Input("userId") userId: any;
  @Input("sessionToken") sessionToken: string;
  @Output() refreshed = new EventEmitter<any>();

  refreshTrips(){
    this.refreshed.emit('test');
    console.log('refreshTrips() called')
  }

  constructor(public dialog: MatDialog, public tripService: TripService) {}

  openDialog() {
    const dialogRef = this.dialog.open(TripCreateDialog, {
      height: "80vh",
      width: "90vw",
      panelClass:"tripn-no-padding-dialog"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("check for closed");
      this.refreshTrips();
    });
  }

  ngOnInit() {}
}

@Component({
  selector: "trip-create-dialog",
  templateUrl: "trip-create-dialog.html",
  styleUrls: ["./trip-create.component.css"]
})
export class TripCreateDialog {
  tripCreate: FormGroup;
  tripName = new FormControl("", [Validators.required]);
  startDate = new FormControl("", [Validators.required]);
  endDate = new FormControl("");
  distance = new FormControl("", [Validators.required]);
  @Input("sessionToken") sessionToken: string;
  @Input("userId") userId: any;
 

  constructor(
    public dialogRef: MatDialogRef<TripCreateDialog>,
    private fb: FormBuilder,
    public tripService: TripService
  ) {
    this.tripCreate = fb.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }

  ngOnInit() {
    this.tripCreate = this.fb.group({
      tripName: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null),
      distance: new FormControl(null, [Validators.required])
    });
  }

  onCreateTrip(): void {
    this.tripService
      .createTrip(this.tripCreate.value, this.sessionToken)
      .subscribe(Trip => this.dialogRef.close());
    console.log(this.tripCreate.value);
  }

  getTripnameError() {
    return this.tripName.hasError("required") ? "You must enter a name" : null;
  }

  getStartdateError() {
    return this.startDate.hasError("required")
      ? "You must enter a start date"
      : null;
  }

  getMilesError() {
    return this.distance.hasError("required")
      ? "You must enter a distance"
      : null;
  }
}
