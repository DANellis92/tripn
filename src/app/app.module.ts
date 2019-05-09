import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { ExpenseDisplayComponent } from './expense-display/expense-display.component';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TripDisplayComponent } from './trip-display/trip-display.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserDisplayComponent } from './admin-user-display/admin-user-display.component';
import { AdminTripDisplayComponent } from './admin-trip-display/admin-trip-display.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    ExpenseDisplayComponent,
    ExpenseCreateComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    TripDisplayComponent,
    TripCreateComponent,
    AdminDashboardComponent,
    AdminUserDisplayComponent,
    AdminTripDisplayComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
