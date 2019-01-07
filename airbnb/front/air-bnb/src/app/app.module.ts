
import { SearchPageModule } from './../pages/search/search.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { ImagePicker } from '@ionic-native/image-picker';

import { AboutPage } from '../pages/about/about';
import { SuggestPage } from '../pages/suggest/suggest';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CityPage } from '../pages/city/city';
import {HousePage} from '../pages/city/house/house';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from './../pages/profile/profile-page/profile';
import { EditProfilePage } from '../pages/profile/edit-profile/edit-profile';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RestProvider } from '../providers/RestProvider';
import { Crop } from '@ionic-native/crop';
import { AuthProvider } from '../providers/AuthProvider';
import { SearchPage } from '../pages/search/search';
import { LodgingsProvider } from '../providers/lodgings/lodgings';
import { UserProvider } from './../providers/profile/profile';



import { HousingPage } from '../pages/housing/housing';
import { PicturesPage } from '../pages/housing/housePicturesPage/picturesPage';
import { Step1Page } from '../pages/housing/step1/step1';
import { Step2Page } from '../pages/housing/step2/step2';
import { Step3Page } from '../pages/housing/step3/step3';
import { DatePickerModule } from 'ionic-calendar-date-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginPageModule } from "../pages/login/login.module";
import { SearchModalPage } from '../pages/search/search-modal/search-modal';
import { JwtHttp } from '../utils/jwt-http';

@NgModule({
  declarations: [
    CityPage ,
    MyApp,
    HousePage ,
    AboutPage,
    SuggestPage,
    PicturesPage,
    HousingPage,
    Step1Page,
    Step2Page,
    Step3Page,
    HomePage,
    ProfilePage,
    EditProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DatePickerModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    SearchPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CityPage,
    MyApp,
    AboutPage,
    SuggestPage,
    HousePage ,
    HomePage,
    PicturesPage,
    HousingPage,
    Step1Page,
    Step2Page,
    Step3Page,
    TabsPage,
    LoginPage,
    SearchModalPage,
    ProfilePage,
    EditProfilePage,
  ],
  providers: [
    {
      provide: JwtHttp,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
          return new JwtHttp(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    },
    Camera,
    StatusBar,
    ImagePicker,
    SplashScreen,
    Crop ,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EmailComposer,
    RestProvider,
    AuthProvider,
    LodgingsProvider,
    HttpModule,
    UserProvider,
  ]
})
export class AppModule { }
