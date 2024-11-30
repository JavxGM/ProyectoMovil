import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Firebase imports
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Inicializar Firebase
initializeApp(environment.firebase);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      // Agregar IonicModule
      IonicModule.forRoot()
    ),
  ],
}).catch((err) => console.error(err));
