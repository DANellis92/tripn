import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { TripService } from "../trip.service";

@Component({
  selector: "app-trip-display",
  templateUrl: "./trip-display.component.html",
  styleUrls: ["./trip-display.component.css"]
})
export class TripDisplayComponent implements OnInit {
  @Input("trip") trip: Object;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TripDisplayDialog, {
      height: "80vh",
      width: "90vw",
      data: this.trip,
      panelClass: "tripn-no-padding-dialog"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
}

@Component({
  selector: 'trip-display-dialog',
  templateUrl: 'trip-display-dialog.html',
  styleUrls: ['./trip-display.component.css']
})
export class TripDisplayDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private trips: TripService,
    public dialogRef: MatDialogRef<TripDisplayDialog>
  ) {}
  @Input("trip") trip: object;
  selectedTrip = this.trip;

  ngOnInit() {
    console.log(this.data);
  }

  deleteTrip(): void {
    let id = this.data.id;
    this.trips.deleteTrip(id).subscribe(res => this.dialogRef.close());
  }
}
