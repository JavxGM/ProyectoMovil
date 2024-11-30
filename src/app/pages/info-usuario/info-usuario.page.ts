import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], // Importar módulos necesarios
})
export class InfoUsuarioPage implements OnInit {
  userInfo: any = null;
  message: string = '';
  private apiUrl = 'https://uasdapi.ia3x.com/info_usuario';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      this.message = 'No autorizado. Por favor, inicia sesión.';
      return;
    }

    const headers = new HttpHeaders({
      Authorization: authToken, // Enviar el token obtenido en el login
    });

    this.http.get(this.apiUrl, { headers }).subscribe(
      (response: any) => {
        if (response.success) {
          this.userInfo = response.data;
        } else {
          this.message = response.message || 'Error al obtener información.';
        }
      },
      (error) => {
        console.error(error);
        this.message = 'Error al conectar con el servidor.';
      }
    );
  }
}
