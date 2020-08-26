import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Adding a basic form control
//import { ReactiveFormsModule } from '@angular/forms';

// Rutas 
import { AppRoutingModule } from './app-routing.module';

// Servicio

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
