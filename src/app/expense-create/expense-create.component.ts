import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
  templateUrl: 'expense-create-dialog.html'
})
export class ExpenseCreateDialog {
  expenseCreate: FormGroup
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);

  constructor(public dialog: MatDialog, fb: FormBuilder) {
    this.expenseCreate = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    })
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