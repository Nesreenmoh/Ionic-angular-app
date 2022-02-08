/* eslint-disable */

import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places:Place [] = [
    new Place('p1','Manhatin Mansion','In the heart of New York City', 
    'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
    149.99, new Date('2019-01-01'), new Date('2019-12-31')),
    new Place('p2','Lamour Toujours','A romantic Place in Paris', 
    'https://i.pinimg.com/564x/a9/f2/e2/a9f2e273bb5aa51d4a12723175df07ed.jpg',
    189.99,
    new Date('2019-01-01'), new Date('2019-12-31')),
    new Place('p3','The Foggy Palace!','Not your average city trip!', 
    'https://favim.com/orig/201106/28/castle-fog-foggy-hawarden-castle-mist-Favim.com-86047.jpg',
    99.99,
    new Date('2019-01-01'), new Date('2019-12-31')),
  ];

  get  places() {
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string){
    return {... this._places.find(p => p.id === id)};
  }
}
