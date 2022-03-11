import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html',
  styleUrls: ['./pais-details.component.css']
})
export class PaisDetailsComponent implements OnInit {

  currentGenero: any;
  message = '';

  constructor(
    private generoService: PaisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: any): void {
    this.generoService.get(id)
      .subscribe(
        data => {
          this.currentGenero = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateActivo(status: any): void {
    const data = {
      nombre: this.currentGenero.nombre_genero,
      activo: status
    };

    this.generoService.update(this.currentGenero.id, data)
      .subscribe(
        response => {
          this.currentGenero.genero_activo = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateGenero(): void {
    this.generoService.update(this.currentGenero.id, this.currentGenero)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Este género ha sido actualizado con éxito';
        },
        error => {
          console.log(error);
        });
  }

  deleteGenero(): void {
    this.generoService.delete(this.currentGenero.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/generos']);
        },
        error => {
          console.log(error);
        });
  }
}
