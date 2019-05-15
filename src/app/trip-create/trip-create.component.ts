import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { TripService } from "../trip.service";

@Component({
  selector: "app-trip-create",
  templateUrl: "./trip-create.component.html",
  styleUrls: ["./trip-create.component.css"]
})
export class TripCreateComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TripCreateDialog, {
      height: "80vh",
      width: "90vw"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
}

@Component({
  selector: "trip-create-dialog",
  templateUrl: "trip-create-dialog.html"
})
export class TripCreateDialog {
  tripCreate: FormGroup;
  tripName = new FormControl("", [Validators.required]);
  startDate = new FormControl("", [Validators.required]);
  endDate = new FormControl("");
  distance = new FormControl("", [Validators.required]);
  trip = [];
  @Input("sessionToken") sessionToken: string;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private tripService: TripService
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
      endDate: new FormControl(""),
      distance: new FormControl(null, [Validators.required])
    });
  }

  onCreateTrip(tripCreate): void {
    this.tripService
      .createTrip(tripCreate, this.sessionToken)
      .subscribe(Trip => (this.trip = Trip));
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
