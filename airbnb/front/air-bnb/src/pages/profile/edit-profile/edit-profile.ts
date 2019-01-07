import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProfilePage } from "./../profile-page/profile";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserProvider } from "./../../../providers/profile/profile";
import { User } from "./../../../models/User";

@IonicPage()
@Component({
  selector: "page-edit-profile",
  templateUrl: "edit-profile.html"
})
export class EditProfilePage implements OnInit {
  profileForm: FormGroup;
  user: User;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    // private toastCtrl: ToastController,
    public userProvider: UserProvider
  ) {}

  ngOnInit() {
    this.user = this.navParams.get("user");

    this.initializeForm();
  }

  initializeForm() {
    let firstName = this.user.firstName;
    let lastName = this.user.lastName;
    let emailAddress = this.user.emailAddress;
    let birthday = this.user.birthday;
    let street = this.user.address.street;
    let postalCode = this.user.address.postalCode;
    let city = this.user.address.city;
    let region = this.user.address.region;

    this.profileForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      emailAddress: new FormControl(emailAddress, Validators.required),
      birthday: new FormControl(birthday, Validators.required),
      region: new FormControl(region, Validators.required),
      city: new FormControl(city, Validators.required),
      streetAddress: new FormControl(
        street,
        Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern("^s*([a-zsA-Z0-9 _.,-]*)s*$")
          //this is for the letters (both uppercase and lowercase), numbers, -, _, ., "," and space validation. Spaces at the beginning and the end of street are accepted
        ])
      ),
      postalCode: new FormControl(
        postalCode,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]{5}$") //this is for only 5 numbers
        ])
      )
    });
  }

  /*
  Error messages
  */
  validation_messages = {
    firstName: [{ type: "required", message: "Le prénom est obligatoire" }],
    lastName: [
      { type: "required", message: "Le nom de famille est obligatoire" }
    ],
    emailAddress: [{ type: "required", message: "L'email est obligatoire'" }],
    birthday: [
      { type: "required", message: "La date de naissance est obligatoire'" }
    ],
    street: [
      { type: "required", message: "Nom de la rue est obligatoire" },
      {
        type: "minlength",
        message: "Nom de la rue doit avoir minimum 5 caractères"
      },
      {
        type: "pattern",
        message:
          "Nom de la rue doit contenir que des lettres et des chiffres et les caractères spéciaux: -,_, ,,."
      }
    ],
    postalCode: [
      { type: "required", message: "Code postal est obligatoire" },
      {
        type: "pattern",
        message: "Code postal doit contenir que 5 chiffres sans espaces"
      }
    ],
    city: [{ type: "required", message: "La ville est obligatoire" }],
    region: [{ type: "required", message: "La région est obligatoire'" }]
  };

  onSubmitForm() {
    let user = this.profileForm.value;
    this.userProvider.updateUser(user).subscribe(
      () => console.log('Success updated profile!', user),
      error => {
        console.log('ici erreur', error);
        
      }
      
    );
    this.navCtrl.push(ProfilePage);
  }
}
