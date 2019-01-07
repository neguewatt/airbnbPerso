import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JwtHttp } from '../../../utils/jwt-http';
import { LodgingsProvider } from '../../../providers/lodgings/lodgings';
import { Housing } from '../../../models/housing';




@Component({
  selector: 'page-house',
  templateUrl: 'house.html'
}) 

export class HousePage implements OnInit {

	house: Housing; 
	data: any;
 
	constructor(public navCtrl: NavController, public navParams: NavParams, private http: JwtHttp, public lodgingsProvider: LodgingsProvider) {
    
		this.data = navParams.get('data')
		console.log(this.data);
  } 
	title: string;
	description: string;
	traverlersNb: number;
	typehousings: string;
	roomsNbr: string;
	sleepNb: number;
	beddingType: string[];
	address: any;
	pictures: string[];

	ngOnInit(): void {
		this.title = this.data.infos.title;
		this.description = this.data.infos.description;
		this.traverlersNb = 3;
		this.typehousings = "Logement entier";
		this.roomsNbr = "2 Chambres";
		this.sleepNb = 3;
		this.beddingType = ["Double", "Canapé lit"];
		this.address = this.data.infos.address;
		this.pictures = ["adresse de l'image 1", "adresse de l'image 2", "adresse de l'image 3"];
		
		this.initHouse();

	};

	initHouse()
	{
		let newhouse: Housing = new Housing();

		newhouse.title = this.title;
		newhouse.description = this.description;
		newhouse.travelerNumber = this.traverlersNb;
		newhouse.houseType = this.typehousings;
		newhouse.roomNumber = this.roomsNbr;
		newhouse.sleepNumber = this.sleepNb;
		newhouse.beddingType = this.beddingType;
		newhouse.pictures = this.pictures;
		newhouse.address = this.address;

		this.house = newhouse;
	} 







}