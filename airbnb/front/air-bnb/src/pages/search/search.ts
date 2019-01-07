import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LodgingsProvider } from '../../providers/lodgings/lodgings';
import { SearchModalPage } from './search-modal/search-modal';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  lodgings;
  imageSrcParis = 'assets/imgs/paris.jpg'
  imageSrcLyon = 'assets/imgs/lyon.jpg'

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public lodgingsService: LodgingsProvider, public modalCtrl: ModalController) {
  
    this.getAllLodgings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getAllLodgings(){
    this.lodgingsService.getAllLodgings().subscribe(
      res => {
        this.lodgings = res;
      }
    )
  }

  getLodgingsSearch(event: any) {
    this.lodgingsService.getLodgingsByCity(event.target.value).subscribe(
      res => {
        console.log(res);
        this.lodgings = res;
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(SearchModalPage);
    modal.present();
 }

}
