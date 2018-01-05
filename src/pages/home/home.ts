import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarteirinhaPage } from '../carteirinha/carteirinha';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToCarteirinhaPage(){
    this.navCtrl.push(CarteirinhaPage);
  }
  goToTestPage(){
    this.navCtrl.push(TestPage);
  }

}
