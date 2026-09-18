import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContactsService } from '../../services/contacts';
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-contacts',
  styleUrl: './contacts.scss',
  templateUrl: './contacts.html',
})
export class Contacts {
  contacts = inject(ContactsService);

  eliminarContacto(id: string) {
    this.contacts.deleteContact(id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Contacto Eliminado",
      showConfirmButton: false,
      timer: 1500
    });
  }
  }