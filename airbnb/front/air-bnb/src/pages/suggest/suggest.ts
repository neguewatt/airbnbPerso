import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import { HousingPage } from '../housing/housing';
import { Step2Page } from '../housing/step2/step2';

//test color #ea5297 (pink conserto)

@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html'
})
export class SuggestPage {

  constructor(public navCtrl: NavController) {

  }

  onAddHousing(){
    this.navCtrl.push( Step2Page );
  }
    onUpdateHousing(){
    this.navCtrl.push( Step2Page );
  }
    onDeleteHousing(){
    this.navCtrl.push( Step2Page );
  }

}

