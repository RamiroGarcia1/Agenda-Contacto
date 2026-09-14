import { Service } from '@angular/core';
import { Contact } from '../interfaces/contacts';

@Service()
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
 
 agregarContacto(){
    this.contactList.push({
      id: '2',
      nombre: '44567',
      apellido: '4567',
      telefono: '4567'
    })
    console.log(this.contactList)
  }

getContactById(id:string){
  const contactoEncontrado = this.contactList.find(contact => contact.id === id);
  return contactoEncontrado;
}
}
