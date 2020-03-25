import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Error } from 'src/app/_services/errors';
import { UsersService } from 'src/app/_services/users.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-regform2',
  templateUrl: './regform2.component.html',
  styleUrls: ['./regform2.component.css']
})
export class Regform2Component implements OnInit {
  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }

  onSubmit(form: NgForm) {
    const { location } = form.value;

    this.authService.authUser.location = location;

    this.router.navigate(['/register3']);
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
