import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Housing } from '../../models/Housing';
import { Step1Page } from '../housing/step1/step1';
//import {HousingService} from '../../services/housing.service';


@Component({
  selector: 'page-housing',
  templateUrl: 'housing.html',
})
export class HousingPage implements OnInit {

  housingForm: FormGroup;
  disabled : boolean = true ;
  invalid : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,/* private housingService: HousingService */) 
  {}

  ngOnInit(): void {this.initForm();

  }
  initForm() {
    this.housingForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    }); 

    this.housingForm.statusChanges.subscribe((status) => {
        status === "VALID" ? this.disabled = false : this.disabled = true ;
    })

  }


  redirectToPicturesUpload(){
    this.navCtrl.push(Step1Page , {
      data : this.housingForm
    });
  }

  /*
  Error messages
  */
  validation_messages = {
    'title': [
      { type: 'required', message: 'Le titre de votre annonce est obligatoire' }
    ],
    'description': [
      { type: 'required', message: 'Une description partielle est requise' },
    ]

  }


}
