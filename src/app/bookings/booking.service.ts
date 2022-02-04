/* eslint-disable  */

import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({providedIn: 'root'})
export class BookingService {

    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 2,
            userId: 'abc',
            imageUrl: 'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg'
        }
    ];


    get Booking(){
        return[... this._bookings]
    }
}