import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute, private placeSvr: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap =>{
      if(!paraMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
    this.place = this.placeSvr.getPlace(paraMap.get('placeId'));
    });
  }

  onOffer(){
    //  this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/offers');
    }
}
