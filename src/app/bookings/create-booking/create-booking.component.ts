import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
 @Input() selectedPlace: Place;
  constructor(private modalCtr: ModalController) { }


  ngOnInit() {}

  onCancel(){
  this.modalCtr.dismiss(null, 'cancel');
  }
  onBook(){
    this.modalCtr
    .dismiss({ message: 'The Place Has been booked'},'confirm');
  }

}
