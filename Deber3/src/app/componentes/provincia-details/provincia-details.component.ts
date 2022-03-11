import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProvinciaService} from "../../services/provincia.service";

@Component({
  selector: 'app-provincia-details',
  templateUrl: './provincia-details.component.html',
  styleUrls: ['./provincia-details.component.css']
})
export class ProvinciaDetailsComponent implements OnInit {

  currentPelicula: any;
  message = '';

  constructor(
    private peliculaService:ProvinciaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: any): void {
    this.peliculaService.get(id)
      .subscribe(
        data => {
          this.currentPelicula = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateActivo(status: any): void {
    const data = {
      nombre: this.currentPelicula.nombre_pelicula,
      activo: status
    };

    this.peliculaService.update(this.currentPelicula.id, data)
      .subscribe(
        response => {
          this.currentPelicula.pelicula_en_cartelera = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePelicula(): void {
    this.peliculaService.update(this.currentPelicula.id, this.currentPelicula)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Esta película ha sido actualizada con éxito';
        },
        error => {
          console.log(error);
        });
  }

  deletePelicula(): void {
    this.peliculaService.delete(this.currentPelicula.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/peliculas']);
        },
        error => {
          console.log(error);
        });
  }
}
