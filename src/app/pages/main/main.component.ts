import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {MetamaskService} from '../../service/metamask.service'
import {DialogController} from '../../controller/dialog'
import {MetamaskComponent} from '../../components/metamask/metamask.component'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isInstallMetaMask: boolean = true;
  metaMaskAddress: string;
  metaMaskNetwork: boolean;
  constructor(
    private router: Router,
    private metamask: MetamaskService,
    private dialogCtrl: DialogController,
    private viewContainerRef: ViewContainerRef
  ) { 
    this.dialogCtrl.setViewContainerRef(this.viewContainerRef)
  }

  ngOnInit() {
    this.init()
  }
  init(){

  }
  initMetaMask(callback){
    this.isInstallMetaMask = this.metamask.checkInstall();
    // 是否安装metaMask
    if(this.isInstallMetaMask){
      // 是否登录
      if(this.metamask.isLogin()){
        this.checkNetwork(callback)
      }else{
        window['ethereum'].enable().then(res => {
          console.log(res,1212121212)
          this.checkNetwork(callback)
        });
      }
    }else{
      this.dialogCtrl.createFromComponent(MetamaskComponent);
    }
  }
  /**
   * 检测metaMask是否为主网
   */
  checkNetwork(callback){
    this.metaMaskNetwork = this.metamask.checkNetwork();
        // metaMask是否为主网
        if(this.metaMaskNetwork){
          this.metaMaskAddress = this.metamask.getDefaultAccount();
          callback();
        }else{
          let option = {
            title: 'metaMask error',
            content: '您的MetaMask当前网络不是主网,请修改网络',
            buttons: [
              {
                text: '确认',
                color: '#fff',
                background: 'rgb(47, 129, 255)',
                handle: callback => {
                  callback()
                }
              }
            ]
          }
          this.dialogCtrl.create(option)
        }
  }
  login(address: string){
      // this.initMetaMask(_ => {
        if(address == 'publisher'){
          this.router.navigateByUrl('user/issue');
        }else{
          this.router.navigateByUrl('user/center');
        }
      // }); 
  }

}
