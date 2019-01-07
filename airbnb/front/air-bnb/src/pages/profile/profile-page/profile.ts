
import { Component, } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
} from 'ionic-angular';


import { UserProvider } from './../../../providers/profile/profile';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { User } from '../../../models/User';

/**
 * Generated class for the ProfilePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public UserProvider: UserProvider) {
  }

  user: User;
  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    const loading = this.loadingCtrl.create({
      content: 'Chargement du Profil...'
    });
    loading.present();
    this.UserProvider.fetchUser()
      .subscribe(
        (user) => {
          if (user) {
            this.user = user;
          }
          loading.dismiss();
          console.log("resultat profile", user);
        },
        (error) => {
          loading.dismiss();
          this.handleError(error.json().error);
        });
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: "échec du chargement",
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }

  onEditProfile(user) {
    this.navCtrl.push(EditProfilePage, { user: this.user });
    console.log("push to editProfil");

  }

}
