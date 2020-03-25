import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/_services/users.service';
import { Error } from 'src/app/_services/errors';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-regform4',
  templateUrl: './regform4.component.html',
  styleUrls: ['./regform4.component.css']
})
export class Regform4Component implements OnInit {
  startYears = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961"];

  endYears = ["2027", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968"]

  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }

  onSubmit(form: NgForm) {
    const { college, degree, specialization, startYear, endYear } = form.value;

    console.log(form)

    this.authService.authUser.college = college;
    this.authService.authUser.degree = degree;
    this.authService.authUser.specialization = specialization;
    this.authService.authUser.startYear = startYear;
    this.authService.authUser.endYear = endYear;

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
