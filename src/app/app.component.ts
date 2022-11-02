import { Component } from '@angular/core';
import { AlbumnesService } from './services/Albumnes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  public Albumns: Array<any> = []

  constructor(
    private AlbumnesService: AlbumnesService
    ){
      this.AlbumnesService.getAlbumnes().subscribe((resp:any)=> {
        console.log(resp);
        this.Albumns = resp
      })

  }
}
