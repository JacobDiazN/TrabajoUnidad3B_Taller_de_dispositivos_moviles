import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if (this.email === 'jdiaz@uniacc.cl' && this.password === '123456') {
      // Redirige a la página de inicio si los datos son correctos
      this.router.navigate(['/inicio']);
    } else {
      // Muestra una alerta si el inicio de sesión falla
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo electrónico o contraseña incorrectos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

