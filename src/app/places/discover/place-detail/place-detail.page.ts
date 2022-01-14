/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

   place: Place;
  constructor(private modelCtrl: ModalController, private route: ActivatedRoute, private placeSrv: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if(!p.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
      }
    this.place = this.placeSrv.getPlace(p.get('placeId'));
    });
  }

  onBookPlace(){
  //  this.router.navigateByUrl('/places/tabs/discover');
  //this.navCtrl.navigateBack('/places/tabs/discover');
  this.modelCtrl.create({component: CreateBookingComponent, 
    componentProps: { selectedPlace: this.place}}).then(modelEl =>{
      modelEl.present();
      return modelEl.onDidDismiss();
  }).then(resultData =>{
     console.log(resultData.data, resultData.role); 
     if(resultData.role=== 'confirm')
     console.log('booked!');  
  });
  }
}
