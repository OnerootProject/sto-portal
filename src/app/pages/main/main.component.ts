import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {MetamaskService} from '../../service/metamask.service'
import {DialogController} from '../../controller/dialog'
import {MetamaskComponent} from '../../components/metamask/metamask.component';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isInstallMetaMask: boolean = true;
  metaMaskAddress: string;
  metaMaskNetwork: boolean;
  address: string = 'publisher';

  page: number = 0;
  loginPage: number = 0;

  step: number = 1;
  steps: number = 1;

  setTimeout1:any;
  setTimeout2:any;

  constructor(
    private router: Router,
    private metamask: MetamaskService,
    private dialogCtrl: DialogController,
    private viewContainerRef: ViewContainerRef,
    public translate: TranslateService,
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
  next(num: number, address: string){
    console.log(num +'-'+ address)
    this.address = address;
    this.steps = -1;
    console.log('a')
    this.setTimeout1 = setTimeout(()=>{
      console.log(111)
      this.step = num;
      console.log(this.step)
    },300);
    this.setTimeout2 = setTimeout(()=>{
      console.log(222)
      this.steps = num;
      console.log(this.steps)
    },310);



    if(num == 2){
      this.initMetaMask(_ => {
        // setTimeout(()=>{
          this.next(3, this.address);
        // },2000)
        
      })
    }


    
    
  } 
  login(){
    // let address = this.address;
      
    if(this.address == 'publisher'){
      this.router.navigateByUrl('user/issue');
    }else{
      this.router.navigateByUrl('user/center');
    }
  }
  close(){
    // this.step = 1;
    // this.steps = 1;
    this.next(1, this.address)
  }
  registerSubmit(num: number){
    let p4_main:any = document.getElementsByClassName('p4_main');
    if(p4_main){
      this.loginPage = num;
      let n = num * -400;
      p4_main[0].style.marginLeft = n + 'px';
    }
  }
  codeSubmit(){
    
    
  }

}
