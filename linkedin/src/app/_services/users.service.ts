import { Injectable } from '@angular/core';

import { DataRequire } from '../_models/data-require';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  User: DataRequire[] = JSON.parse(localStorage.getItem('users')) || [
    {
      email: "esraa@gmail.com",
      password: "Esraa_12345",
      firstName: "Esraa",
      lastName: "ElNaggar",
      location: "Alexandria",
      recentJob: "Web Developer",
      recentCompany: "IBM",
      college: "FLA",
      degree: "3.5",
      specialization: "infoCom",
      startYear: "2015",
      endYear: "2019",
    },
    {
      email: "mona@gmail.com",
      password: "Mona_12345",
      firstName: "Mona",
      lastName: "Mohamed",
      location: "Cairo",
      recentJob: "Web Developer",
      recentCompany: "IBM",
      college: "Bla",
      degree: "4",
      specialization: "CompyScience",
      startYear: "2015",
      endYear: "2019",
    },
  ];


  constructor() { }

}
