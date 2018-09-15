import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Loading,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { GaleriaPage } from '../galeria/galeria';
import { EmailValidator } from '../../validators/email';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public authData: AuthProvider,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  goToResetPassword() {
    this.navCtrl.push('ResetPasswordPage');
  }

  createAccount() {
    this.navCtrl.push('SignupPage');
  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
      return;
    }

    this.authData.loginEmailPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(authData => {
        this.navCtrl.setRoot('GaleriaPage');
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
}
