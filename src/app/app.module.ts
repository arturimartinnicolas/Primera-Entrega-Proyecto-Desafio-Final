import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { PadreComponent } from './components/padre/padre.component';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraSizeDirective } from './directivas/cabecera-size.directive';
import { NombreApellidoPipe } from './pipes/nombreapellido.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ToolbarComponent,
    FormEditComponent,
    PadreComponent,
    CabeceraSizeDirective,
    NombreApellidoPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }