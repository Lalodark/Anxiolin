import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesPage } from './activitiestab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ActivitiesPageRoutingModule } from './activitiestab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ActivitiesPage }]),
    ActivitiesPageRoutingModule,
  ],
  declarations: [ActivitiesPage]
})
export class ActivitiesPageModule {}
