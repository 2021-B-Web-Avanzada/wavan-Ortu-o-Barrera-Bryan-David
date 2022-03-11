import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-add-pais',
  templateUrl: './add-pais.component.html',
  styleUrls: ['./add-pais.component.css']
})
export class AddPaisComponent implements OnInit {
  genero = {
    nombre_pais: '',
    num_subgeneros: 0,
    genero_activo: false,
    genero_ganancias: 0.0,
  };
  submitted = false;

  constructor(private generoService: PaisService) { }

  ngOnInit(): void {
  }

  saveGenero(): void {
    const data = {
      nombre_genero: this.genero.nombre_pais,
      num_subgeneros: this.genero.num_subgeneros,
      genero_ganancias: this.genero.genero_ganancias,
      genero_activo: false
    };

    this.generoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGenero(): void {
    this.submitted = false;
    this.genero = {
      nombre_pais: '',
      num_subgeneros: 0,
      genero_activo: false,
      genero_ganancias: 0.0
    };
  }
}
