import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShowimageComponent } from './carousel/showimage/showimage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    MenuComponent,
    ContactComponent,
    AdminComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ShowimageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
