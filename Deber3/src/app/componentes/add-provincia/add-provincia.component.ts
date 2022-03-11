import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ProvinciaService} from "../../services/provincia.service";

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  pelicula = {
    nombre_pelicula: '',
    pelicula_en_cartelera: false,
    pelicula_ganancias: 0.0,
    pelicula_director: '',
    genero: -1
  };
  submitted = false;

  constructor(private peliculaService: ProvinciaService) { }

  ngOnInit(): void {
  }

  savePelicula(): void {
    const data = {
      nombre_pelicula: this.pelicula.nombre_pelicula,
      pelicula_en_cartelera: this.pelicula.pelicula_en_cartelera,
      pelicula_ganancias: this.pelicula.pelicula_ganancias,
      pelicula_director: this.pelicula.pelicula_director,
      genero: this.pelicula.genero
    };

    this.peliculaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPelicula(): void {
    this.submitted = false;
    this.pelicula = {
      nombre_pelicula: '',
      pelicula_en_cartelera: false,
      pelicula_ganancias: 0.0,
      pelicula_director: '',
      genero: -1
    };
  }
}
