import { Component } from '@angular/core';

interface Contacto {
  nombre: string;
  telefono: string;
}

@Component({
  imports: [],
  selector: 'app-contacts',
  styleUrl: './contacts.scss',
  templateUrl: './contacts.html',
})
export class Contacts {

  nombre = ""
  apellido = ""
  presente = false;

  contactos: Contacto[] = [
    { nombre: "Horacio", telefono: "12345" },
    { nombre: "Pedro", telefono: "54321" },
    { nombre: "Simon", telefono: "246810" },
    { nombre: "Ramiro", telefono: "975310" },
  ]

  agregarAlumno() {
    if (this.contactos.length < 6) {
      this.contactos.push({
        nombre: 'Alumno nuevo' + (this.contactos.length + 1),
        telefono: 'sin telefono'
      })
      console.log(this.contactos)
    }
  }

}