import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarteirinhaPage } from '../carteirinha/carteirinha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Gotocracha(){
    this.navCtrl.push(CarteirinhaPage);
  }

}
