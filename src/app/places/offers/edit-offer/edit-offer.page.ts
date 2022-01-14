import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;
  constructor(private route: ActivatedRoute,private navCtrl: NavController, private placeSvr: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if(!p.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
    this.place = this.placeSvr.getPlace(p.get('placeId'));
    });
  }

}
