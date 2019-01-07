import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Step2Page } from '../step2/step2';


/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page implements OnInit {

  	step1Form: FormGroup;
	disabled : boolean = true ;

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) 
	{
	}

	ngOnInit(): void {
	   this.initForm();
	}


	initForm() {
	    this.step1Form = this.formBuilder.group({
	      traverlersNb: ['', Validators.required],
	      typehousings: ['', Validators.required],
	      housingsStyle: ['', Validators.required],
	    });

		this.step1Form.statusChanges.subscribe((status) => {
	        status === "VALID" ? this.disabled = false : this.disabled = true ;
	    })
	}


	redirectToPicturesUpload(){
		this.navCtrl.push(Step2Page , {
		  data : this.step1Form
		});
	}

  	validation_messages = {
	    'traverlersNb': [
	      { type: 'required', message: 'Le nombre de voyageurs est obligatoire' }
	    ],
	    'typehousings': [
	      { type: 'required', message: 'Le type du logement est obligatoire' }
	    ],
	    'housingsStyle': [
	      { type: 'required', message: 'Le style du logement est obligatoire' }
	    ],
	}


}
