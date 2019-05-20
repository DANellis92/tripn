import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter
} from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ExpenseService } from "../expense.service";

@Component({
  selector: "app-expense-display",
  templateUrl: "./expense-display.component.html",
  styleUrls: ["./expense-display.component.css"]
})
export class ExpenseDisplayComponent implements OnInit {
  @Input("trip") trip: object;
  @Input("expense") expenses: object;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ExpenseDisplayDialog, {
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
  selector: "expense-display-dialog",
  templateUrl: "expense-display-dialog.html",
  styleUrls: ["./expense-display.component.css"]
})
export class ExpenseDisplayDialog {
  expenses: [];
  userId: any;
  tripId: any;
  @Input("sessionToken") sessionToken: string;

  constructor(
    private expenseService: ExpenseService,
    public dialogRef: MatDialogRef<ExpenseDisplayDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userId = sessionStorage.getItem("userId");
  }
  @Input("trip") trip: object;
  @Input("expense") expense: object;

  fetchAllExpenses() {
    this.expenseService
      .getMyExpenses(this.userId, this.data.id, this.sessionToken)
      .subscribe(expense => {
        this.expenses = expense;
        this.expenses.reverse();
        console.log(this.data);
      });
  }

  ngOnInit() {
    this.fetchAllExpenses();
  }
  deleteExpense(expense) {
    console.log(this.data.id, expense.id);
    let tripId = this.data.id;
    let id = expense.id;
    this.expenseService.deleteExpense(tripId, id).subscribe(res => res);
  }
}
