import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersPageRoutingModule
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
