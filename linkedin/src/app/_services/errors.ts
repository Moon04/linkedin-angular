import { Injectable } from '@angular/core';

import { MyErrors } from '../_models/errors';

@Injectable({
    providedIn: 'root'
})
export class Error {

    MyError: MyErrors[] = [
        //email errors
        {
            name: "noEmail",
            message: "Please enter your email address."
        },
        {
            name: "emailNotRecognized",
            message: "Hmm, we don&#39;t recognize that email. Please try again."
        },
        {
            name: "emailNotValid",
            message: "Please enter a valid email."
        },
        //password errors
        {
            name: "noPassword",
            message: "Please enter a password."
        },
        {
            name: "passwordNotRight",
            message: "Hmm, that&#39;s not the right password. Please try again. "
        },
        //First Name
        {
            name: "noFirstName",
            message: "Please enter your first name."
        },
        //Last Name
        {
            name: "noLastName",
            message: "Please enter your last name."
        },
        //Location
        {
            name: "noLocation",
            message: "Please enter your Location."
        },
        //RecentJob
        {
            name: "noRecentJob",
            message: "Please enter your recent job."
        },
        //RecentCompany
        {
            name: "noRecentCompany",
            message: "Please enter your recent company."
        },
        //School or College/University
        {
            name: "noCollege",
            message: "Please enter your recent Education."
        },
        //Degree
        {
            name: "noDegree",
            message: "Please enter your degree."
        },
        //RecentCompany
        {
            name: "noSpecialization",
            message: "Please enter your specialization."
        },
        //StartYear
        {
            name: "noStartYear",
            message: "Please enter your start year."
        },
        //EndYear
        {
            name: "noEndYear",
            message: "Please enter your end year."
        },
    ];

    constructor() { }

}
