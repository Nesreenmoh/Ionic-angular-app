import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place} from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private placeSrv: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers =this.placeSrv.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigateByUrl('/places/tabs/offers/edit/'+ offerId);
   console.log('editting item ', offerId);

  }
}
