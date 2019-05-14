import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EditExpenseDialog, {
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
  selector: 'edit-expense-dialog',
  templateUrl: 'edit-expense-dialog.html'
})
export class EditExpenseDialog {
  editExpense: FormGroup
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);

  constructor(public dialog: MatDialog, fb: FormBuilder) {
    this.editExpense = fb.group({
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
