import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    this.authSrv.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }

}
