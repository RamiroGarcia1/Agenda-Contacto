import { inject, Injectable, Service, signal } from '@angular/core';
import { Contact } from '../interfaces/contacts';
import { Auth } from './auth';
import { Contacts } from '../pages/contacts/contacts';

@Service()


export class ContactsService {

  authService = inject(Auth); 

  readonly contactList = signal<Contact[]>([]);

  agregarContacto(nuevoContacto: Contact) {
    // const nuevoId = (this.contactList.length + 1);
    // this.contactList.push({
    //   Id: nuevoId,
    //   FirstName: nuevoContacto.FirstName,
    //   LastName: nuevoContacto.LastName,
    //   Number: nuevoContacto.Number,
    //   Description: '',
    //   UserId: 0,
    //   IsFavorite: false
    // })
    // return nuevoId;
  }

  async getContacts():Promise<Contact[]>{
    const res = await fetch( ,{
      method : "Get",
      headers: {
        Authorization : "Bearer" + this.authService.token
      }
    },
  })

  if (!res.ok) return [];
  const contactos = await res.json()
  this.contactList.set(contactos);
  console.log(this.contactList)

  return contactos;
}






  getContactById(id: string) {


    // const contactoEncontrado = this.contactList.find(contact => contact.Id === id);
    // return contactoEncontrado;
  }

  deleteContact(id: string) {
    this.contactList = this.contactList.filter(c => c.Id !== id);
  }

  editContact(contact: Contact) {
    this.contactList = this.contactList.map(c => {
      if (c.Id === contact.Id) return contact;
      return c
    });
  }