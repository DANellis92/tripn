import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {
  @Input("userId") userId: any;
  @Input("sessionToken") sessionToken: string;

  constructor(public dialog: MatDialog, public expenseService: ExpenseService) {}

    openDialog() {
      const dialogRef = this.dialog.open(ExpenseCreateDialog, {
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
  selector: 'expense-create-dialog',
  templateUrl: 'expense-create-dialog.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateDialog {
  expenseCreate: FormGroup
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);
  @Input("sessionToken") sessionToken: string;
  @Input("userId") userId: any;
  @Input("tripId") tripId: any;

  constructor(
    public dialogRef: MatDialogRef<ExpenseCreateDialog>, 
    private fb: FormBuilder,
    public expenseService: ExpenseService
  ) {
    this.expenseCreate = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.expenseCreate = this.fb.group({
      date: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
    });
  }

  onCreateExpense(): void {
    this.expenseService
      .createExpense(this.expenseCreate.value, this.sessionToken)
      .subscribe(Expense => this.dialogRef.close());

  }

  getExpensedateError() {
    return this.date.hasError('required') ? 'You must enter a date' : '';
  }

  getExpensedescriptionError() {
    return this.description.hasError('required') ? 'You must enter a description' : '';
  }

  getExpenseamountError() {
    return this.description.hasError('required') ? 'You must enter an amount' : '';
  }
}