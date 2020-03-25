import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Error } from 'src/app/_services/errors';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regform3',
  templateUrl: './regform3.component.html',
  styleUrls: ['./regform3.component.css']
})
export class Regform3Component implements OnInit {
  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }

  onSubmit(form: NgForm) {
    const { recentJob, recentCompany } = form.value;
    console.log(form)
    console.log("form submited")
    this.authService.authUser.recentJob = recentJob;
    this.authService.authUser.recentCompany = recentCompany;

    this.router.navigate(['/register4']);
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
