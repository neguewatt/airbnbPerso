import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { SuggestPage } from '../suggest/suggest';
import { HomePage } from '../home/home';
import { ProfilePage } from './../profile/profile-page/profile';
import { ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular/components/tabs/tabs';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SuggestPage;
  tab4Root = ProfilePage;

  constructor()
  {}

  ionViewDidEnter() {
    this.tabRef.select(1);
  }


}
