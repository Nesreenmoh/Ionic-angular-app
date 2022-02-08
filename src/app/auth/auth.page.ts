import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  isLogin = true;

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

  onSubmit(form: NgForm){
    if( !form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email +'   '+password);
    if(this.isLogin){
      //send a request to login servers
    }
    else {
      //send a request to signup servers
    }
  }

  onSwitchAuthMode(){
   this.isLogin= !this.isLogin;
  }
}
