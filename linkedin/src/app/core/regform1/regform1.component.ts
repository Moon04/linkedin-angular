import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/_services/users.service';
import { Error } from 'src/app/_services/errors';
import { AuthenticationService } from 'src/app/_services/authentication.service';


@Component({
  selector: 'app-regform1',
  templateUrl: './regform1.component.html',
  styleUrls: ['./regform1.component.scss']
})
export class Regform1Component implements OnInit {
  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }
  onSubmit(form: NgForm) {
    const { firstname, lastname, email, password } = form.value;

    this.authService.authUser.firstName = firstname;
    this.authService.authUser.lastName = lastname;
    this.authService.authUser.email = email;
    this.authService.authUser.password = password;

    this.router.navigate(['/register2']);
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
