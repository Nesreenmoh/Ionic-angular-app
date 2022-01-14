/* eslint no-underscore-dangle: 0 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _userIsAuthenticated = false;

 get userIsAuthenticated(){
   return this._userIsAuthenticated;
 }
  constructor() { }

  login(){
    this._userIsAuthenticated=true;
  }

  loginOut(){
    this._userIsAuthenticated=false;
  }
}
