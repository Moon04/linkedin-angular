import { Injectable } from '@angular/core';

import { DataRequire } from '../_models/data-require';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  User: DataRequire[] = JSON.parse(localStorage.getItem('users')) || [
    {
      id: 0,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      location: "",
      recentJob: "",
      recentCompany: "",
      college: "",
      degree: "",
      specialization: "",
      startYear: "",
      endYear: "",
    },
    {
      id: 1,
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
      id: 2,
      email: "mona@gmail.com",
      password: "Mona_12345",
      firstName: "Mona",
      lastName: "Mohamed",
      location: "Cairo",
      recentJob: "Web Developer",
      recentCompany: "IBM",
      college: "Bla",
      degree: "3.5",
      specialization: "CompyScience",
      startYear: "2015",
      endYear: "2019",
    },
  ];


  constructor() { }

}
