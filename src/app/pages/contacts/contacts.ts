import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contacts',
  styleUrl: './contacts.scss',
  templateUrl: './contacts.html',
})
export class Contacts {

  nombre = "R"
  apellido = "G"
  telefono = "1"

  alumnos = ["Horacio", "Pedro", "Simon"];

  agregarAlumnos(){
    
  }

}
