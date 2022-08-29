import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendartab.page';

import { CalendarPageRoutingModule } from './calendartab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalendarPageRoutingModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
