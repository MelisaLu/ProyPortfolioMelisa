import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExplaboralComponent } from './componentes/explaboral/explaboral.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ProyComponent } from './componentes/proy/proy.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoAPComponent,
    AcercademiComponent,
    ExplaboralComponent,
    EstudiosComponent,
    ProyComponent,
    HysComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
