import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appMenu = [
    {title: 'Menú', url: '/tabs/menutab', icon: 'home'},
    {title: 'Calendario', url: '/tabs/calendartab', icon: 'calendar'},
    {title: 'Actividades', url: '/tabs/activitiestab', icon: 'cube'},
    {title: 'Perfil', url: '/tabs/profiletab', icon: 'person'}
  ];
  constructor() {}
}

export class MenuEx {
  constructor(private menu: MenuController) { }
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
    openEnd() {
      this.menu.open('end');
    }
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
}
