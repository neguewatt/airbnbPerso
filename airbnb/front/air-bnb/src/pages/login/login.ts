import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Button } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs'
import { AuthProvider } from '../../providers/AuthProvider';
import { Storage } from '@ionic/storage';
import { StorageUtils } from '../../utils/localStorageUtils';
import { AboutPage } from '../about/about';
import { JwtHttp } from '../../utils/jwt-http';
import { Headers } from '@angular/http';
import { HousePage } from '../../pages/city/house/house';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	login_form: any;
	register_form: any;
	show_hide_icon = 'md-eye';
	password_input_type = 'password';
	loading: any;
	rememberMe: boolean = false;
	rememberMe_Storage: string = "rememberMe";
	username: string;
	password: string;

	// Nombre minimum de caractères pour le mot de passe
	password_min_length = 6;

	// Positionne l'onglet par défaut, peut être soit 'login' ou 'register'
	login_type = 'login';

	constructor(public navCtrl: NavController, public auth: AuthProvider,
		private formBuilder: FormBuilder, private loadingCtrl: LoadingController,
		private alertCtrl: AlertController, private emailComposer: EmailComposer, private http: JwtHttp) {
		// déclaration du login form
		this.login_form = this.formBuilder.group({
			email: ['', [Validators.email, Validators.required]],
			password: ['', [Validators.minLength(this.password_min_length), Validators.required]],

		});
		// déclaration du register form
		this.register_form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: [, [Validators.minLength(this.password_min_length), Validators.required]],
		});
	}

	// Méthode appelé au chargement de la page
	ionViewDidLoad() {
		this.login_form.valueChanges.subscribe((value) => {
			this.password = value.password;
			this.username = value.email;
		})
		this.showLoader();

		let token = StorageUtils.getToken();
		console.log("token---", token);
		if (typeof (token) !== 'undefined' && StorageUtils.tokenExpires()) {
			this.navCtrl.setRoot(TabsPage);
		}

		this.loading.dismiss();
	}

	// Message d'attente pendant le processs d'authentification
	showLoader() {

		this.loading = this.loadingCtrl.create({
			content: 'Authenticating...',
		});

		this.loading.present();

	}

	// Appelé quand l'utilisateur clique sur l'icône oeil pour cacher/afficher le mot de passe
	showHidePass() {
		setTimeout(() => {

			// Affiche le texte en clair ou masque le texte
			if (this.show_hide_icon == 'md-eye') {
				this.show_hide_icon = 'md-eye-off';
				this.password_input_type = 'text';
			}
			else {
				this.show_hide_icon = 'md-eye';
				this.password_input_type = 'password';
			}

		}, 0);
	}

	// Appelé quand l'utilisateur clique sur le bouton 'Enregistrement'
	register() {
		let loader = this.loadingCtrl.create({ spinner: "circles" });
		loader.present().then(done => {

			setTimeout(() => {
				loader.dismiss();
			}, 250)
		})
	}

	// Appelé quand l'utilisateur clique sur le bouton 'connexion'
	login() {

		this.showLoader();
		this.auth.login(this.username, this.password).subscribe((res) => {
			this.loading.dismiss();
			if (res.status === 200) {

				let data = res.json();
				//mis à jour du local storage
				if (this.rememberMe) {
					StorageUtils.setEXPIRES_TOKEN(data[StorageUtils.EXPIRES_TOKEN]);
					StorageUtils.setDateToken(new Date().getTime());
				}
				StorageUtils.setToken(data[StorageUtils.TOKEN]);
				console.log("new token", data[StorageUtils.TOKEN])
				this.navCtrl.setRoot(TabsPage);
/*				let dataLodgings = {

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
				this.http.post("https://localhost:8443/api/lodgings/users/1", JSON.stringify(dataLodgings)).subscribe(res => {

					console.log(res);
				});*/

			}

		}, (err) => {
			this.loading.dismiss();
			let alertError = this.alertCtrl.create(
				{
					title: "Connexion impossible"
				});
			alertError.present();
			setTimeout(() => {
				alertError.dismiss()
			}, 3000);
		});

		/*let dataLodgings = {
    
			"title":"logement",
			"description":"logement",
			
			"address":{
				"street":"13 rue claude chappe",
				"region":"rennes",
				"city":"Rennes",
				"postalCode":"35000"
			},
			"mainPicture":{
				"path":"https://odis.homeaway.com/odis/listing/dcf77526-663d-4e3a-a98a-0d261b6e698c.c10.jpg"
			},
			"pictures":[
				{"path":"https://odis.homeaway.com/odis/listing/6974dcf1-a989-4f49-acd9-0375b9fcea57.c10.jpg"},
				{"path":"https://odis.homeaway.com/odis/listing/8b96ddd0-0083-4000-893a-9beac1e96cbb.c10.jpg"},
				{"path":"https://odis.homeaway.com/odis/listing/e69e70ee-48d5-4f5f-a03f-ba18482ff214.c10.jpg"},
			]
			
		//let bodyCredentials = new  new HttpParams()

		};
		console.log("data", JSON.stringify(dataLodgings));
		this.http.post("https://localhost:8443/api/lodgings/users/1", JSON.stringify(dataLodgings)).subscribe(res=> {
			
			console.log("res--", res);
		});*/

	}

	//Appelé quand l'utilisateur clique la chekcbox 'se souvenir de moi'
	updatePrefs() {
		let loader = this.loadingCtrl.create({ spinner: "circles" });
		console.log(this.rememberMe);
		this.rememberMe = !this.rememberMe;

		loader.present().then(done => {

			setTimeout(() => {
				loader.dismiss();
			}, 250)
		})
	}

	// Appelé quand l'utilisateur clique sur 'mot de passe oublié'
	forgotPassword() {

		//Création du message d'alerte où l'utilisateur entre son adresse email 
		let alert = this.alertCtrl.create({
			inputs: [{
				name: 'email',
				type: 'email'
			}],
			title: "Merci d'entrer votre adresse Email",
			buttons: [
				{
					text: 'Annuler',
					role: 'cancel',
					handler: () => { console.log('Cancel clicked'); }
				},
				{
					text: 'Mot de passe oublié',
					handler: data => {
						console.log('Forgot password clicked. email is ' + data.email);

						// Contenu de message mail				   
						let email = {
							to: data.email,
							cc: 'damien.magne@consertotech.pro',
							bcc: null,
							attachments: null,
							subject: 'Compte AIR B&B: mot de passe oublié',
							body: 'Nous avons effectué un reset de votre mot de passe, merci de bien vouloir utiliser le code suivant lors de votre prochaine connexion : MotDePasse',
							isHtml: false
						};
						// Envoi du message par mail avec les options par défaut
						this.emailComposer.open(email);
						console.log('An email has been sent to ' + data.email);
					}
				}
			]

		});

		// Affiche le message d'alerte
		alert.present();
	}

}
