import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ProvinciaService} from "../../services/provincia.service";

@Component({
  selector: 'app-provincia-list',
  templateUrl: './provincia-list.component.html',
  styleUrls: ['./provincia-list.component.css']
})
export class ProvinciaListComponent implements OnInit {

  peliculas: any;
  currentPelicula: any;
  currentIndex = -1;
  nombre_pelicula = '';

  constructor(private peliculaService: ProvinciaService) { }

  ngOnInit(): void {
    this.retrievePeliculas();
  }

  retrievePeliculas(): void {
    this.peliculaService.getAll()
      .subscribe(
        data => {
          this.peliculas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePeliculas();
    this.currentPelicula = null;
    this.currentIndex = -1;
  }

  setActivePelicula(genero: any, index: number): void {
    this.currentPelicula = genero;
    this.currentIndex = index;
  }

  removeAllPeliculas(): void {
    this.peliculaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePeliculas();
        },
        error => {
          console.log(error);
        });
  }

  searchNombrePelicula(): void {
    this.peliculaService.findByTitle(this.nombre_pelicula)
      .subscribe(
        data => {
          this.peliculas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
