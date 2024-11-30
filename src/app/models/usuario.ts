export interface Usuario {
    id: number;
    nombre?: string; // Campo opcional
    apellido?: string;
    username?: string;
    password?: string;
    email?: string;
    authToken?: string;
  }
  