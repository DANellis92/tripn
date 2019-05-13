import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserDisplayComponent } from './admin-user-display/admin-user-display.component';
import { SplashComponent } from './splash/splash.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TripDisplayComponent } from './trip-display/trip-display.component';
import { TripCreateComponent, TripCreateDialog } from './trip-create/trip-create.component';
import { ExpenseDisplayComponent } from './expense-display/expense-display.component';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { AuthGuardService as AuthGuard } from './auth-service/auth-guard.service';
 

const routes: Routes = [
  { path: '', component: SplashComponent},
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
