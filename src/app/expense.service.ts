import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Expense } from "./models/expense.models";
import { Observable } from "rxjs";
import { APIURL } from "../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class ExpenseService {
  private dbUrl = APIURL;

  constructor(private http: HttpClient) {}

  getMyExpenses(userId, tripId, sessionToken): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.get(
      this.dbUrl + "/expenses/tripexpenses/" + tripId + "/" + userId,
      httpOptions
    );
  }

  getSingleExpense() {}

  createExpense(expenses: Expense, tripId, sessionToken): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.post<any>(
      this.dbUrl + "/expenses/createExpense/" + tripId,
      { expenses: expenses },
      httpOptions
    );
  }

  updateExpense(
    expenses: Expense,
    sessionToken,
    tripId,
    expenseId
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.put<any>(
      this.dbUrl + "/expenses/edit/" + tripId + "/" + expenseId,
      { expenses: expenses },
      httpOptions
    );
  }

  deleteExpense(tripId, id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("sessionToken")
      })
    };
    return this.http.delete<any>(
      this.dbUrl + "/expenses/delete/" + tripId + "/" + id,
      httpOptions
    );
  }
}
