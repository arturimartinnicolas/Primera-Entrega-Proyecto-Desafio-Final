import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Alumno} from '../../models/alumnos'

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = [
    {nombre: 'Pablo', apellido:'Perez', edad:'31', fechaDeNacimiento: new Date(4, 11, 1991), email: 'pabloperez@yahoo.com'},
    {nombre: 'Martin', apellido:'Garcia', edad:'20', fechaDeNacimiento: new Date(4, 11, 1991), email: 'martingarcia@yahoo.com'},
    {nombre: 'Lucas', apellido:'Rodriguez', edad:'25', fechaDeNacimiento: new Date(4, 11, 1991), email: 'lucasr@yahoo.com'},
    {nombre: 'Juan', apellido:'Gonzalez', edad:'22', fechaDeNacimiento: new Date(4, 11, 1991), email: 'juangonzalez@yahoo.com'},
  ];
  
 

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  
  columnas: string[] = ['nombreCompleto', 'edad', 'fechaDeNacimiento', 'email', 'acciones'];

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
 
