import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisListComponent } from './componentes/pais-list/pais-list.component';
import { PaisDetailsComponent } from './componentes/pais-details/pais-details.component';
import { AddPaisComponent } from './componentes/add-pais/add-pais.component';

const routes: Routes = [
  { path: '', redirectTo: 'generos', pathMatch: 'full' },
  { path: 'generos', component: PaisListComponent },
  { path: 'generos/:id', component: PaisDetailsComponent },
  { path: 'add/', component: AddPaisComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
