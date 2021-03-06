import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place} from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

   loadedPlaces: Place[];
  constructor(private placeSrv: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeSrv.places;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
     console.log(event.detail);
  }
}
