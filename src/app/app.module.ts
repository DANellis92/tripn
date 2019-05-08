import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SplashComponent } from "./splash/splash.component";
import { AuthComponent } from "./auth/auth.component";
import { UserComponent } from "./user/user.component";
import { CreateLogComponent } from "./create-log/create-log.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminUserControlComponent } from "./admin-user-control/admin-user-control.component";
import { ExpenseDisplayComponent } from "./expense-display/expense-display.component";
import { ExpenseCreateComponent } from "./expense-create/expense-create.component";
import { LogDisplayComponent } from "./log-display/log-display.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AuthComponent,
    UserComponent,
    CreateLogComponent,
    AdminComponent,
    AdminUserControlComponent,
    ExpenseDisplayComponent,
    ExpenseCreateComponent,
    LogDisplayComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
