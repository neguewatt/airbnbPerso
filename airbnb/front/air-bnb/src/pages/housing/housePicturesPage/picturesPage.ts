import { Component } from '@angular/core';
import { NavController , NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions  } from '@ionic-native/camera';
import {ImagePicker} from '@ionic-native/image-picker' ;
import { Crop } from '@ionic-native/crop';
import {HousingPage} from '../../housing/housing' ;
import { HomePage } from '../../home/home';
import { JwtHttp } from '../../../utils/jwt-http';


@Component({
  selector: 'page-picturesPage',
  templateUrl: 'picturesPage.html'
})
export class PicturesPage {
  base64Image : any ; 
  photos : any ; 
  array1 : any = [] ; 
  pictures : any ;
  element:HTMLElement; 
  dataStep1: any;
  dataStep2: any;
  data: any;

  constructor(private camera: Camera ,
              public navCtrl: NavController,
              public navParams: NavParams , 
              private imagePicker : ImagePicker , 
              private cropService : Crop , 
              public alertCtrl: AlertController , 
              public loadingCtrl: LoadingController,
              private http: JwtHttp) {


    this.data = navParams.get('data');
    
    console.log("step3" , this.data.value);
  }

  async getPictures(number:number) { 
   var array = this.array1
    // const  options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   correctOrientation: true,
    //   sourceType:number,
    // }
    
    // await this.camera.getPicture(options).then(
    //   (imageData) => {
    //  this.base64Image = 'data:image/jpeg;base64,' + imageData; 
    //  array.push(this.base64Image); 

    // }, (err) => {
    //   console.log("Erreur" , err )
    //  // Handle error
    // }); 
    
    // this.pictures = array 
    // this.array1 = array;

    this.array1 = this.dataStep2
    this.data.value.step2 =  this.array1 ;
    console.log("Data from form" , this.data.value);
  }

  uploadData() {
    // Appeller le service pour ajouter le logement

    var array = this.array1
    this.array1 = this.dataStep2
    this.data.value.pictures =  this.array1 ;
    console.log("Data from form" , this.data.value);

    this.validateHousing();
  }

  validateHousing(){
    const alert = this.alertCtrl.create({
      title: 'Nouveau Logement',
      subTitle: 'Votre annonce de logement va être enregistré!\n Il sera conservé dans la base de donnée de Conserto.\n Si vous ne voulez pas que Conserto le conserve, merci de le supprimer.',
      buttons: [
        {
          text:'Valider',
          handler: () => {
              this.presentLoading();
              //this.createlodging();
              // create housing in the BDD 
            }
        }
      ]
    });
    alert.present();
  }
  /*createlodging(){
      let dataLodgings = {

          "title": "logement",
          "description": "logement",

          "address": {
              "street": "13 rue claude chappe",
              "region": "rennes",
              "city": "Rennes",
              "postalCode": "35000"
          }
          //let bodyCredentials = new  new HttpParams()

      };
      console.log("data", JSON.stringify(dataLodgings));
      this.http.post("https://localhost:8443/api/lodgings/users/2", JSON.stringify(dataLodgings)).subscribe(res => {

          console.log(res);
      });
  }*/
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.newHousing();
    }, 3000);
  }
 
  newHousing(){
    const alert = this.alertCtrl.create({
      title: 'Nouveau Logement',
      subTitle: 'Souhaitez vous ajouter un nouveau logement ?',
      buttons: [
        {
          text:'OUI',
          handler: () => {
              this.redirectToNewHousing();
            }
        },
        {
          text:'NON',
          handler: () => {
              this.redirectToHome();
          }
        }
      ]
    });
    alert.present();
  }

  redirectToNewHousing(){
    this.navCtrl.push(HousingPage);
  }
    redirectToHome(){
    this.navCtrl.push(HomePage);
  }

addData(){
  
}


}
