import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contacts';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  contactList: Contact[] = [
    {
      id: "1",
      nombre: "Ramiro",
      apellido: "García",
      email: "ramiro@mail.com",
      telefono: "1234",
      direccion: "Av Siempre Viva 123"
    },
    {
      id: "2",
      nombre: "Ramiro",
      apellido: "García",
      email: "ramiro@mail.com",
      telefono: "1234",
      direccion: "Av Siempre Viva 123"
    },
    {
      id: "3",
      nombre: "Ramiro",
      apellido: "García",
      email: "ramiro@mail.com",
      telefono: "1234",
      direccion: "Av Siempre Viva 123"
    },
  ]

  agregarContacto(nuevoContacto: Contact): string {
    const nuevoId = (this.contactList.length + 1).toString();
    this.contactList.push({
      nombre: nuevoContacto.nombre,
      apellido: nuevoContacto.apellido,
      telefono: nuevoContacto.telefono,
      direccion: nuevoContacto.direccion,
      email: nuevoContacto.email,
      id: nuevoId
    });
    return nuevoId;
  }

  getContactById(id: string) {
    const contactoEncontrado = this.contactList.find(contact => contact.id === id);
    return contactoEncontrado;
  }

  deleteContact(id: string) {
    this.contactList = this.contactList.filter(contact => contact.id !== id);
  }
}