import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contacts } from './pages/contacts/contacts';
import { ContactDetails } from './pages/contact-details/contact-details';
import { CreateEditContacts } from './pages/create-edit-contacts/create-edit-contacts';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "contacts",
        component: Contacts
    },
    {
        path: "contacts/create",
        component: CreateEditContacts
    },
    {
        path: "contacts/:id",
        component: ContactDetails
    },
    {
        path: "contacts/:id/edit",
        component: CreateEditContacts
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
