import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumnesService {
url = "https://jsonplaceholder.typicode.com/albums"
  constructor(
    private http: HttpClient
  ) { 

    console.log("Servicio albumnes");
  }

  getAlbumnes(){
    let header = new HttpHeaders()
     .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers : header
    });

  }
}
