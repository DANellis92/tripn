import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  @Input("expenses") expenses: object;
  @Output() editRefreshed = new EventEmitter<any>();

  refreshEdit(){
    this.editRefreshed.emit();
    console.log('editRefreshed() called');
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EditExpenseDialog, {
      height: '80vh',
      width: '90vw',
      panelClass:"tripn-no-padding-dialog",
      data: this.expenses
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.refreshEdit();
    });
  }
  
  ngOnInit() {
  }
}

@Component({
  selector: 'edit-expense-dialog',
  templateUrl: 'edit-expense-dialog.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseDialog {
  editExpense: FormGroup
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);
  @Input("sessionToken") sessionToken: string

  constructor(
    public dialogRef: MatDialogRef<EditExpenseDialog>,
    private fb: FormBuilder,
    public expenseService: ExpenseService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.editExpense = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  @Input("expenses") expenses: object;

  ngOnInit() {
    this.editExpense = this.fb.group({
      date: new FormControl(this.data[0].date, [Validators.required]),
      description: new FormControl(this.data[0].description, [Validators.required]),
      amount: new FormControl(this.data[0].amount, [Validators.required]),
    });
    console.log(this.data);
  }

  onEditExpense(): void {
    this.expenseService
      .updateExpense(this.editExpense.value, this.sessionToken, this.data[0].tripId, this.data[0].id)
      .subscribe(Expense => this.dialogRef.close());
      console.log(this.data);
  }

  getExpensedateError() {
    return this.date.hasError('required') ? 'You must enter a date' : '';
  }

  getExpensedescriptionError() {
    return this.description.hasError('required') ? 'You must enter a description' : '';
  }

  getExpenseamountError() {
    return this.amount.hasError('required') ? 'You must enter an amount' : '';
  }
}
