import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  generos: any;
  currentGenero: any;
  currentIndex = -1;
  nombre_genero = '';

  constructor(private generoService: PaisService) { }

  ngOnInit(): void {
    this.retrieveGeneros();
  }

  retrieveGeneros(): void {
    this.generoService.getAll()
      .subscribe(
        data => {
          this.generos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGeneros();
    this.currentGenero = null;
    this.currentIndex = -1;
  }

  setActiveGenero(genero: any, index: number): void {
    this.currentGenero = genero;
    this.currentIndex = index;
  }

  removeAllGeneros(): void {
    this.generoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveGeneros();
        },
        error => {
          console.log(error);
        });
  }

  searchNombreGenero(): void {
    this.generoService.findByTitle(this.nombre_genero)
      .subscribe(
        data => {
          this.generos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
