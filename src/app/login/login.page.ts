import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(private navCtrl: NavController,
        private authService: AuthenticateService,
        private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
      ])),
      });
  }

  validation_messages = {
    'email': [
    { type: 'required', message: 'Un Email es requerido.' },
    { type: 'pattern', message: 'Por favor ingrese un Email válido.' }
    ],
    'password': [
    { type: 'required', message: 'La contraseña es requerida.' },
    { type: 'minlength', message: 'La contraseña debe tener como mínimo 5 carácteres.' }
    ]
};

loginUser(value) {
    this.authService.loginUser(value)
    .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/tabs/menutab');
    }, err => {
        this.errorMessage = err.message;
    })
}

}
