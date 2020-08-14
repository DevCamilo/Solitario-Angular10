import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  apiFunction(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post('https://cors-anywhere.herokuapp.com/https://pruebatecnicamontechelo.azurewebsites.net/api/GuardarLog?', JSON.stringify(data), httpOptions); // Por problemas con el CORS, tuve que usar una url para saltar esos permisos de parte del servidor
  }
}
