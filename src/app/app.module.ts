import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { ExpenseDisplayComponent } from './expense-display/expense-display.component';
import { ExpenseCreateComponent, ExpenseCreateDialog } from './expense-create/expense-create.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TripDisplayComponent } from './trip-display/trip-display.component';
import { TripCreateComponent, TripCreateDialog } from './trip-create/trip-create.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserDisplayComponent } from './admin-user-display/admin-user-display.component';
import { AdminTripDisplayComponent } from './admin-trip-display/admin-trip-display.component';

import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditExpenseComponent, EditExpenseDialog } from './edit-expense/edit-expense.component';
import { EditTripComponent, EditTripDialog } from './edit-trip/edit-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    ExpenseDisplayComponent,
    ExpenseCreateComponent, 
    ExpenseCreateDialog,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    TripDisplayComponent,
    TripCreateComponent,
    TripCreateDialog,
    AdminDashboardComponent,
    AdminUserDisplayComponent,
    AdminTripDisplayComponent,
    EditExpenseComponent, 
    EditExpenseDialog, 
    EditTripComponent, 
    EditTripDialog,
    
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        },
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    }),
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
  ],

  entryComponents: [
    TripCreateComponent, TripCreateDialog,
    ExpenseCreateComponent, ExpenseCreateDialog,
    EditExpenseComponent, EditExpenseDialog,
    EditTripComponent, EditTripDialog,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
