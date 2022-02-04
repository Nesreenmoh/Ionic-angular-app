import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

    loadedBookings: Booking[];
  constructor(private bookingService: BookingService, private router: Router ) { }

  ngOnInit() {
    this.loadedBookings= this.bookingService.Booking;
  }

  onCancel(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    // cancel the booking
  }

}
