import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { async } from '../../../node_modules/async';
import { AboutPage } from '../about/about';
import leaflet from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { LodgingsProvider } from '../../providers/lodgings/lodgings' 
import {HousePage} from './house/house'


@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})

export class CityPage {

  map: any;
  lat: any;
  array: Array<any>;
  city: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lodgingsProvider: LodgingsProvider) {
    this.city = navParams.get('data');

  }

  async ionViewDidEnter() {

    if (this.map != undefined || this.map != null) {
      this.map.remove();
    };

    switch (this.city) {
      case 'Rennes': await this.loadmap([[48.117753, -1.717602], [48.118364, -1.586245]]);
        await this.getLodgingCity('Rennes');
        // Appel au Service qui permet de récuperer tous les logements propres à la ville de Rennes
        break;
      case 'Nantes': await this.loadmap([[47.214910, -1.656479], [47.213983, -1.456377]]);
        await this.getLodgingCity('Nantes');
        // Appel au Service qui permet de récuperer tous les logements propres à la ville de Nantes
        break;
      case 'Niort': await this.loadmap([[46.322607, -0.490730], [46.322133, -0.425528]]);
        await this.getLodgingCity('Niort');
        // Appel au Service qui permet de récuperer tous les logements propres à la ville de Niort
        break;
      case 'Paris': await this.loadmap([[48.850710, 2.032046], [48.832634, 2.715635]]);
        await this.getLodgingCity('Paris');
        // Appel au Service qui permet de récuperer tous les logements propres à la ville de Paris
        break;
    }
  }

  async  getLodgingCity(city: string) {

    var array = []

    switch (city) {

      case 'Rennes': this.lodgingsProvider.getAllLodgings().subscribe((res) => {
        res.json().forEach(element => {
          if (element.address.city === "Rennes") {
            array.push(element);
          }
        });
        this.addMarker(array);
      }, (err) => {
        console.log("error", err)
      });
        break;

      case 'Nantes': this.lodgingsProvider.getAllLodgings().subscribe((res) => {
        res.json().forEach(element => {
          if (element.address.city === "Nantes") {
            array.push(element);
          }
        });
        this.addMarker(array);
      }, (err) => {
        console.log("error", err)
      });
        break;

      case 'Niort': this.lodgingsProvider.getAllLodgings().subscribe((res) => {
        res.json().forEach(element => {
          if (element.address.city === "Niort") {
            array.push(element);
          }
        });
        this.addMarker(array);
      }, (err) => {
        console.log("error", err)
      });
        break;

      case 'Paris': this.lodgingsProvider.getAllLodgings().subscribe((res) => {
        res.json().forEach(element => {
          if (element.address.city === "Paris") {
            array.push(element);
            console.log("test res", element);
          }
        });
        this.addMarker(array);
      }, (err) => {
        console.log("error", err)
      });
        break;
    }

  }

  loadmap(fitBounds) {

    this.map = leaflet.map("map");
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    }).addTo(this.map);
    this.map.fitBounds(fitBounds);
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();

  }

  async addMarker(array: Array<any>) {
    const provider = new OpenStreetMapProvider();
    let arrayXY = [];
    for (const item of array) {
      var tab = await provider.search({ query: item.address.completeAddress });
        if(tab.length > 0){
          arrayXY.push({long:tab[0].x, lat:tab[0].y, infos:item});
        }
    }
    this.array = array;
  
    arrayXY.forEach((e) => {  
      leaflet.marker([e.lat, e.long]).addTo(this.map).on('click', () => {
        this.navCtrl.push( HousePage , {
          data : e
        })
      });
    })  
  }


}