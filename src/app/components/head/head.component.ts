import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {MetamaskService} from '../../service/metamask.service'
import { Router , ActivatedRoute} from '@angular/router'
import {MetamaskComponent} from '../../components/metamask/metamask.component'
import {DialogController} from '../../controller/dialog'
import { SensitivePipe } from '../../pipes/sensitive.pipe'
import { PlatformLocation} from '@angular/common';
import { AppComponent } from '../../app.component'
import {SkinServiceService} from '../../service/skin-service.service'
import { TranslateService } from '@ngx-translate/core';
import {SettingComponent} from '../setting/setting.component'
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  isInstallMetaMask: boolean = true;
  metaMaskAddress: string;
  metaMaskNetwork: boolean;
  type: string = 'userCenter';
  private disHeader: boolean;
  constructor(
    private metamask: MetamaskService,
    private router: Router,
    private dialogCtrl: DialogController,
    private activated: ActivatedRoute,
    private location: PlatformLocation,
    private appComponent: AppComponent,
    private skin: SkinServiceService,
    private translate: TranslateService,
    private viewContainerRef: ViewContainerRef
  ) { 
    this.dialogCtrl.setViewContainerRef(this.viewContainerRef)

    this.activated.url.subscribe((params) => {
      switch (this.location.pathname) {
        case  "/user/security-offering": this.disHeader = true , this.type = 'security'; break;
        case  "/user/center": this.disHeader = true , this.type = 'userCenter'; break;
        default: this.disHeader = false ; break;
      }
    });
    setTimeout( _ => {
      this.initMetaMask()
    },1000)

  }
  ngOnInit() {
    this.metaMaskAddress = this.metamask.getDefaultAccount();
  }
  initMetaMask(){
    // // debugger
    // this.isInstallMetaMask = this.metamask.checkInstall();
    // // 是否安装metaMask
    // if(this.isInstallMetaMask){
    //   // 是否登录
    //   if(this.metamask.isLogin()){
    //     this.metaMaskNetwork = this.metamask.checkNetwork();
    //     // metaMask是否为主网
    //     if(this.metaMaskNetwork){
    //       this.metaMaskAddress = this.metamask.getDefaultAccount();
    //     }
    //   }
    // }
  }

  copy(data){
    this.skin.set('drak');
    this.skin.setLang('en');
    this.metamask.copyTextToClipboard(data);
  }

  dialog(){
    this.dialogCtrl.createFromComponent(MetamaskComponent,{})
  }

  switch(type: string){
      this.type = type;
      if(type == 'userCenter')
        this.router.navigate(['/user/center']);
      else
        this.router.navigate(['/user/security-offering']);

  }

  resetHome(){
    this.router.navigate(['/']);
  }

  setting(){
    let option = {

    }
    this.dialogCtrl.createFromComponent(SettingComponent,option)
      // this.appComponent.setTheme('drak');
  }

}
