import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  message: string = '';

  private apiUrl = '/api/login'; // Usar el proxy para redirigir las solicitudes

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = { username: this.username, password: this.password };
    const headers = new HttpHeaders({
      Authorization: this.username, // La API requiere este encabezado con el username
      'Content-Type': 'application/json',
    });

    this.http.post(this.apiUrl, body, { headers }).subscribe(
      (response: any) => {
        if (response.success) {
          this.message = 'Login exitoso';
          localStorage.setItem('authToken', response.data.authToken); // Guarda el token para futuras solicitudes
          this.router.navigate(['/info-usuario']); // Redirige a la página de información del usuario
        } else {
          this.message = response.message || 'Login fallido';
        }
      },
      (error) => {
        console.error(error);
        this.message = 'Error al conectar con el servidor.';
      }
    );
  }
}
