import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/userService/users.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor( private userService: UsersService ) { }

  public ngOnInit(): void {
    this.userService.dataUserSource.subscribe(data => {
      console.log(data);
    })
  }




}
