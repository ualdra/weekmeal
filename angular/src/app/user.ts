import { Tolerancia } from "./tolerancia";

export interface User {
  idUsuario?: number;
  username: string;
  password: string;
  email: string;
  telefono: string;
  nombre: string;
  apellidos: string;
  tolerancias: number;
}
