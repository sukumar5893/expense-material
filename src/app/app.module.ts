import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DemoMaterialModule } from './layouts/admin-layout/material.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SignupComponent } from './signup/signup.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';



@NgModule({

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ShowcaseComponent,
    SignupComponent,
    LoginDialogComponent

  ],
  entryComponents: [LoginDialogComponent, SignupComponent],

  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule, HttpClientModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    DemoMaterialModule,
    ReactiveFormsModule
  ],

  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
