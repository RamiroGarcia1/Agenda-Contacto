import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContactsService } from '../../services/contacts';

@Component({
  imports: [RouterLink],
  selector: 'app-contacts',
  styleUrl: './contacts.scss',
  templateUrl: './contacts.html',
})
export class Contacts {
  contacts = inject(ContactsService);
}