import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authSvr: AuthService, private router: Router) {}
  onLogout(){
    this.authSvr.loginOut();
    this.router.navigateByUrl('/auth');

  }
}
