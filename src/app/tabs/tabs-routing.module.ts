import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menutab',
        loadChildren: () => import('../menutab/menutab.module').then(m => m.MenuPageModule)
      },
      {
        path: 'calendartab',
        loadChildren: () => import('../calendartab/calendartab.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'activitiestab',
        loadChildren: () => import('../activitiestab/activitiestab.module').then(m => m.ActivitiesPageModule)
      },
      {
        path: 'profiletab',
        loadChildren: () => import('../profiletab/profiletab.module').then( m => m.ProfiletabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/menutab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menutab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
