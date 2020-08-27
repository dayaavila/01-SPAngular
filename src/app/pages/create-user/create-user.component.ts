import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../services/userService/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  public formGroup: FormGroup;
  public user: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService
    //private _router:Router
  ) {
      this.formGroup = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
    //this.buildForm();
    // this.users = this._UsersService.getUser(),
    // console.log(this.users);
  }
  
  public register() {
    this.user = this.formGroup.value;
    this.userService.getUser(this.user);
    //console.log(this.user);
  }
  
  // private buildForm() {
  //   const name = '';
  //   // const minPassLength = 4;
  //   // this.formGroup = this.formBuilder.group({
  //   //   name: [ name.toLowerCase(), Validators.required ],
  //   //   email: [ '', [ Validators.required, Validators.email ]],
  //   //   password: [ '', [ Validators.required, Validators.minLength(minPassLength) ]]
  //   // });
  // }


  // public register(idx:number) {
  //   const user = this.formGroup.value;
  //   this._router.navigate(['/heroe', idx]);

  //   console.log(user);
  //   console.log(idx);
  // }

}
