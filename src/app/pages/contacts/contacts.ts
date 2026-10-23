import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../../services/contacts';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-contacts',
  styleUrl: './contacts.scss',
  templateUrl: './contacts.html',
})
export class Contacts implements OnInit {

  contactsService = inject(ContactsService);
  authService = inject(Auth);

  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  async eliminarContacto(id: number) {
    const eliminado = await this.contactsService.deleteContact(id);
    if (!eliminado) return;

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
      title: "Contacto eliminado"
    });
  }
}