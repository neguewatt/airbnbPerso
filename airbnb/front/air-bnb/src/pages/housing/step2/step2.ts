import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Step3Page } from '../step3/step3';

/**
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2Page implements OnInit {

	step2Form: FormGroup;
	disabled : boolean = true ;
	data : any ;
	array1: any;
	numberOfRooms: string[];
	IndexOfRooms: string[];
	myIndex: number = 0;
	numberOfbed: number = 0;
	bedingType: string[];
	myBedingType: string[];
	show: boolean = false;
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) 
	{
		this.data = navParams.get('data');
		this.numberOfRooms = [
			"Studio", 
			"1 Chambre", 
			"2 Chambres", 
			"3 Chambres", 
			"4 Chambres", 
			"5 Chambres", 
			"6 Chambres", 
			"7 Chambres", 
			"+8 Chambres"
		];

	}

	ngOnInit(): void {
	   this.initForm();
	}


	initForm() {
	    this.step2Form = this.formBuilder.group({
	      RoomsNbr: ['', Validators.required],
	      sleepNb: ['', Validators.required],
	      beddingType: ['', Validators.required]
	    });

		this.step2Form.statusChanges.subscribe((status) => {
	        status === "VALID" ? this.disabled = false : this.disabled = true ;
	    })
	}


	redirectToPicturesUpload(){
	    var array = this.array1
		this.array1 = this.step2Form.value;
		this.data.value.step2 =  this.array1 ;


		this.navCtrl.push(Step3Page , {
		  data : this.data
		});
	}

  	validation_messages = {
	    'RoomsNbr': [
	      { type: 'required', message: 'Le nombre de pièces pour dormir est obligatoire' }
	    ],
	    'sleepNb': [
	      { type: 'required', message: 'Le nombre de couchage est obligatoire' }
	    ],
	    'beddingType': [
	      { type: 'required', message: 'Un Type de couchage est obligatoire' }
	    ],
	}

	onSelectChangeRoom(selectedValue: any) {
		let index = this.myIndex;
		console.log(index);

		switch (index) {
			case 0:
				this.IndexOfRooms = [];
				break;
			case 1: 
				this.IndexOfRooms = ["Chambre 1"];
				this.myBedingType = this.step2Form.value.bedingType;
				let myBedingType1 = this.myBedingType;
				break;
			case 2:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2"];
				this.myBedingType = this.step2Form.value.bedingType;
				let myBedingType2 = this.myBedingType;
				break;
			case 3:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3"];
				break;
			case 4:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3", "Chambre 4"];
				break;
			case 5:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3", "Chambre 4", "Chambre 5"];
				break;
			case 6:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3", "Chambre 4", "Chambre 5", "Chambre 6"];
				break;
			case 7:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3", "Chambre 4", "Chambre 5", "Chambre 6", "Chambre 7"];
				break;
			case 8:
				this.IndexOfRooms = ["Chambre 1", "Chambre 2", "Chambre 3", "Chambre 4", "Chambre 5", "Chambre 6", "Chambre 7", "Chambre 8+"];
				break;
		}
	}
	onClickShowBedding() {
		this.show = true;
	}
	onClickCloseBedding() {
		this.show = false;
	}

}
