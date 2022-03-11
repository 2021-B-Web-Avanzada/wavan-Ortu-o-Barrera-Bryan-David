import { RouterModule, Routes } from '@angular/router';
import {PaisListComponent} from "../componentes/pais-list/pais-list.component";
import {PaisDetailsComponent} from "../componentes/pais-details/pais-details.component";
import {AddPaisComponent} from "../componentes/add-pais/add-pais.component";
import {ProvinciaListComponent} from "../componentes/provincia-list/provincia-list.component";
import {ProvinciaDetailsComponent} from "../componentes/provincia-details/provincia-details.component";
import {AddProvinciaComponent} from "../componentes/add-provincia/add-provincia.component";

const app_routes: Routes = [
  { path: 'generos', component: PaisListComponent },
  { path: 'generos/:id', component: PaisDetailsComponent },
  { path: 'add', component: AddPaisComponent },
  { path: 'peliculas', component: ProvinciaListComponent },
  { path: 'peliculas/:id', component: ProvinciaDetailsComponent },
  { path: 'add_pelicula', component: AddProvinciaComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
