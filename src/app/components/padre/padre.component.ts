import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  alumnos: Alumno[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarNuevoAlumno($event: any): void {
    this.alumnos.push($event);
  }

}
