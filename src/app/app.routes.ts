import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contacts } from './pages/contacts/contacts';

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
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
