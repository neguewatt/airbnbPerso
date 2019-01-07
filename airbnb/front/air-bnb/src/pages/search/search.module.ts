import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { SearchModalPage } from './search-modal/search-modal';

@NgModule({
  declarations: [
    SearchPage,
    SearchModalPage
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}
