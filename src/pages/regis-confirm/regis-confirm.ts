import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgProgressService} from "ng2-progressbar";
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the RegisConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regis-confirm',
  templateUrl: 'regis-confirm.html',
})
export class RegisConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private varngpService:NgProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisConfirmPage');
    // this.navCtrl.push(DashboardPage);
  }
  
  Dashboardrun1(){
  this.navCtrl.push(DashboardPage);
  }

  // run()
  // {
  //   this.varngpService.start()
  //   setTimeout(()=>{this.varngpService.done()},2000)
  // }

}
