import { Injectable } from '@angular/core';
import { DataRequire } from '../_models/data-require';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    authUser = new DataRequire();

    constructor() { }

}

