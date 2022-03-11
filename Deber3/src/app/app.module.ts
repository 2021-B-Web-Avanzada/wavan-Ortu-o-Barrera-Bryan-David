import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPaisComponent } from './componentes/add-pais/add-pais.component';
import { PaisDetailsComponent } from './componentes/pais-details/pais-details.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PaisListComponent } from './componentes/pais-list/pais-list.component';
//import {RouterModule} from "@angular/router";
//Rutas
import { app_routing }from "./rutas/app.routes";
import { ProvinciaDetailsComponent } from './componentes/provincia-details/provincia-details.component';
import { ProvinciaListComponent } from './componentes/provincia-list/provincia-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddProvinciaComponent} from "./componentes/add-provincia/add-provincia.component";

@NgModule({
  declarations: [
    AppComponent,
    AddPaisComponent,
    PaisDetailsComponent,
    PaisListComponent,
    ProvinciaDetailsComponent,
    ProvinciaListComponent,
    AddProvinciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
