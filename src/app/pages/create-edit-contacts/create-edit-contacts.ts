import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Contact } from '../../interfaces/contacts';
import { form, FormField } from '@angular/forms/signals';
import { ContactsService } from '../../services/contacts';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-create-edit-contacts',
  styleUrl: './create-edit-contacts.scss',
  templateUrl: './create-edit-contacts.html',
})
export class CreateEditContacts implements OnInit {

  contactsService = inject(ContactsService);
  router = inject(Router);

  id = input<string>();

  newContactModel = signal<Contact>({
    id: "",
    nombre: "",
    apellido: "",
    telefono: ""
  });

  formCreateContact = form(this.newContactModel);

  ngOnInit(): void {
    if (this.id()) {
      const contacto = this.contactsService.getContactById(this.id()!);
      if (contacto) {
        this.newContactModel.set(contacto);
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.id()) {
      this.editarContacto();
    } else {
      this.crearContacto();
    }
  }

  crearContacto() {
    const idContactoCreado = this.contactsService.agregarContacto(this.newContactModel());

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

    this.router.navigate(['/contacts', idContactoCreado]);
  }

editarContacto() {
  this.contactsService.editContact(this.newContactModel());

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
    title: "Contacto editado"
  });

  this.router.navigate(['/contacts', this.newContactModel().id]);
}
}