import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ExpensesComponent } from '../../expenses/expenses.component';
import { IncomeComponent } from '../../income/income.component';
import { ProgresscircleComponent } from '../../progresscircle/progresscircle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RecentComponent } from '../../recent/recent.component';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { DemoMaterialModule } from '../../layouts/admin-layout/material.module';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot({
      "percent": 54,
      "maxPercent": 100,
      "radius": 62,
      "space": 5,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 9,
      "outerStrokeColor": "#E91E63",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 6,
      "showTitle": true,
      "showUnits": true,
      "animateTitle": true,
      "animationDuration": 1200,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": true,
      "animation": true,
      "responsive": true

    }),
    InputsModule.forRoot(),
    WavesModule.forRoot(),
    ButtonsModule,
    DemoMaterialModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ExpensesComponent,
    IncomeComponent,
    ProgresscircleComponent,
    RecentComponent
  ]
})

export class AdminLayoutModule { }
