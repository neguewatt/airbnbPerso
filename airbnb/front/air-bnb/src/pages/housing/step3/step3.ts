import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PicturesPage } from '../housePicturesPage/picturesPage' ;

/**
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-step3',
  templateUrl: 'step3.html',
})
export class Step3Page implements OnInit {

	step3Form: FormGroup;
	disabled : boolean = true;
	data: any;
	array1: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) 
	{
		this.data = navParams.get('data');
		
		console.log("step2" , this.data.value);
	}

	ngOnInit(): void {
	   this.initForm();
	}


	initForm() {
	    this.step3Form = this.formBuilder.group({
	      street: new FormControl('', Validators.compose([
	        Validators.minLength(3),
	        Validators.required,
	        Validators.pattern('^\s*([a-z\sA-Z0-9 _.,-]*)\s*$')
	      ])),
	      postalCode: new FormControl('', Validators.compose([
	        Validators.required,
	        Validators.pattern('^[0-9]{5}$') //this is for only 5 numbers
	      ])),
	      city: ['', Validators.required],
	      startDate: ['', Validators.required],
      	  endDate: ['', Validators.required],
	    });

        this.step3Form.statusChanges.subscribe((status) => {
      		if(this.step3Form.get('startDate').value < this.step3Form.get('endDate').value){
		        this.step3Form.status === "VALID";
		        this.disabled = false;
      		}else{
				status === "INVALID" ? this.disabled = false : this.disabled = true;
				this.step3Form.status === "INVALID";
				this.disabled = true;
      		}
    	})
	}


	redirectToPicturesUpload(){
	    var array = this.array1
		this.array1 = this.step3Form.value;
		this.data.value.step3 =  this.array1 ;

		this.navCtrl.push(PicturesPage , {
		  data : this.data
		});
	}

  	validation_messages = {
	    'street': [
	      { type: 'required', message: 'Nom de la rue est obligatoire' },
	      { type: 'minlength', message: 'Nom de la rue doit avoir minimum 3 caractères' },
	      { type: 'pattern', message: 'Nom de la rue doit contenir que des lettres et des chiffres et les caractères spéciaux: -,_, ,,.' }
	    ],
	    'postalCode': [
	      { type: 'required', message: 'Code postal est obligatoire' },
	      { type: 'pattern', message: 'Code postal doit contenir que 5 chiffres sans espaces' }
	    ],
	    'city': [
	      { type: 'required', message: 'La ville est obligatoire' }
	    ],
	    'startDate': [
	      { type: 'required', message: 'Une date de début est obligatoire' }
	    ],
	    'endDate': [
	      { type: 'required', message: 'Une date de fin est obligatoire' },
	    ]
	}


}
