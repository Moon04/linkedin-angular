import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/_services/users.service';
import { Error } from 'src/app/_services/errors';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-regform5',
  templateUrl: './regform5.component.html',
  styleUrls: ['./regform5.component.scss']
})
export class Regform5Component implements OnInit {
  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }

  onSubmit(form: NgForm) {

    this.router.navigate(['/login']);

    this.userService.User.push(this.authService.authUser);
    localStorage.setItem('users', JSON.stringify(this.userService.User))

  }

  constructor(
    private router: Router,
    public userService: UsersService,
    private authService: AuthenticationService,
    public myerrors: Error,
  ) { }


  ngOnInit(): void {

  }

}
