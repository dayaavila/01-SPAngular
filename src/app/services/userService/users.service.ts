import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public userArr: any[] = [];

  public dataUserSource = new BehaviorSubject<any>('');

  // private users: any [] = [ 
  //     // Aqui debe estar la data
  // //   name: string,
  // //   email: string,
  // //   password: string,
  // ];

  

  constructor() { }

  //Acceso al arreglo de usuarios
  public getUser(dataUser: any) {
    //recoger datos
    console.log(dataUser);
    //añadir a un array
    this.userArr.push(dataUser);
    console.log(this.userArr);
    //emitir datos
    this.dataUserSource.next(this.userArr);
    
  }


}
