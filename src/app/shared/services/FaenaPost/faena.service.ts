import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definición de la interfaz Faena
interface Faena {
  nombre: string;
  fechaInicio: string;
  fechaTermino: string;
  encargado: string;
}

@Injectable({
  providedIn: 'root',
})
export class FaenaService {
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getFaenas(): Observable<Faena[]> {
    return this.http.get<Faena[]>(this.apiUrl);
  }
}