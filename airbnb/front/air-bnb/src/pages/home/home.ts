import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CityPage} from '../city/city'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Niort: string = "Niort";
  Rennes: string = "Rennes";
  Paris: string = "Paris";
  Nantes: string = "Nantes";

  constructor(public navCtrl: NavController) {
  }


  goTo(ville: string) {
  this.navCtrl.push( CityPage , {
    data : ville 
  })
  }

}
