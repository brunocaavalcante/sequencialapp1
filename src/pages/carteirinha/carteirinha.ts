import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-carteirinha',
  templateUrl: 'carteirinha.html',
})
export class CarteirinhaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pedido de Carteirinha!',
      subTitle: 'Pedido realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteirinhaPage');
  }

}
