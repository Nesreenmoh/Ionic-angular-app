import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form: FormGroup;
  place: Place;
  constructor(private route: ActivatedRoute,private navCtrl: NavController, private placeSvr: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if(!p.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
    this.place = this.placeSvr.getPlace(p.get('placeId'));
    this.form = new FormGroup({
      title: new FormControl( this.place.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl( this.place.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });
    });
  }

  onUpdateOffer(){
  if(!this.form.valid){
  return;
    }
    console.log('Confirmed!');
  }

}
