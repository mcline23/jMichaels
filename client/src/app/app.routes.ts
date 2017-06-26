import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent} from './admin/admin.component' 
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { EventsComponent } from './events/events.component'
import { ContactComponent } from './contact/contact.component'

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'menu', component: MenuComponent, pathMatch: 'full'},
    { path: 'events', component: EventsComponent, pathMatch: 'full'},
    { path: 'contact', component: ContactComponent, pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, pathMatch: 'full'},


];
export const routing = RouterModule.forRoot(APP_ROUTES);