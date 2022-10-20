import { Pipe, PipeTransform } from "@angular/core";
import { Alumno } from 'src/app/models/alumnos';

@Pipe({
    name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

transform(value: Alumno, ...args: string[]) {
    return value.nombre + ' ' + value.apellido;
}

}