import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.css']
})
export class ExpenseDisplayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ExpenseDisplayDialog, {
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
  selector: 'expense-display-dialog',
  templateUrl: 'expense-display-dialog.html',
})
export class ExpenseDisplayDialog {

}


