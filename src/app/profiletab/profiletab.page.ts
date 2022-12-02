import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-profiletab',
  templateUrl: './profiletab.page.html',
  styleUrls: ['./profiletab.page.scss'],
})
export class ProfiletabPage implements OnInit {

  constructor(private navCtrl: NavController,
    private authService: AuthenticateService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

}
