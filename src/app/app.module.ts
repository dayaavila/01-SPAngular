import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Adding a basic form control
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas 
import { AppRoutingModule } from './app-routing.module';

// Servicio
import { UsersService } from './services/userService/users.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowUserComponent } from './pages/show-user/show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    CreateUserComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
