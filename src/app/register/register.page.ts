import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';
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

  tryRegister(value) {
    this.authService.registerUser(value)
    .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Tu cuenta ha sido creada con exito. Por favor logeate.";
    }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
    })
  }
}
