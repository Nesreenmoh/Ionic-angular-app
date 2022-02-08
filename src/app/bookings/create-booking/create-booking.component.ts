/* eslint-disable */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
 @Input() selectedPlace: Place;
 @Input () mode: 'select' | 'random';
 startDate: string;
 endDate: string;
 @ViewChild('form')  form: NgForm;

  constructor(private modalCtr: ModalController) { }


  ngOnInit() {
    const avaliableFrom = new Date(this.selectedPlace.avaliableFrom);
    const avaliableTo = new Date(this.selectedPlace.availableTo);
    if(this.mode === 'random'){
      this.startDate = new Date(
       avaliableFrom.getTime() +
       Math.random() * (avaliableTo.getTime() -
        7 * 24 * 60 * 60 * 1000 - 
        avaliableFrom.getTime())
      ).toISOString();

      this.endDate = new Date(new Date(this.startDate).getTime() 
      + Math.random() * (new Date(this.startDate).getTime() +  6 * 24* 60 * 60 *1000 - 
      new Date(this.startDate).getTime())).toISOString();
    }
  }

  onCancel(){
  this.modalCtr.dismiss(null, 'cancel');
  }
  onBookSubmit(){
    if(!this.form.valid || !this.datesValid) {return;}
     
    this.modalCtr
    .dismiss({ bookingData: {
      firstName: this.form.value['first-name'],
      lastName: this.form.value['last-name'],
      guestNumber: this.form.value ['guest-number'],
      startDate: this.form.value['date-from'],
      endDate: this.form.value['date-to']
    }},'confirm');
  }
datesValid() {
  const startDate  = new Date(this.form.value('date-from'));
  const endDate = new Date(this.form.value('date-to'));
  return endDate > startDate;
}
}
