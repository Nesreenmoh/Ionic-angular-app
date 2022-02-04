import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authSrv: AuthService,
     private router: Router,
     private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  onLogin(){
    this.authSrv.login();
    this.isLoading= true;
    this.loadingCtrl.create({keyboardClose: true, message: 'Loading ...'}).then(loadingElm =>{
      loadingElm.present();
      setTimeout(() => {
        this.isLoading= false;
        loadingElm.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
  }
}
