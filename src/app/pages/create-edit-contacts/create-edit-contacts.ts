import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../interfaces/contacts';
import { form, FormField } from '@angular/forms/signals';
import { ContactsService } from '../../services/contacts';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-create-edit-contacts',
  styleUrl: './create-edit-contacts.scss',
  templateUrl: './create-edit-contacts.html',
})
export class CreateEditContacts {

  contactsService = inject(ContactsService);
  router = inject(Router);

  newContactModel = signal<Contact>({
    id: "",
    nombre: "",
    apellido: "",
    telefono: ""
  });

  formCreateContact = form(this.newContactModel);

  onSubmit(event: Event) {
    event.preventDefault();
    const nuevoId = this.contactsService.agregarContacto(this.newContactModel());

    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: "success",
      title: "Contacto creado"
    });

    this.router.navigate(['/contacts', nuevoId]);
  }
}