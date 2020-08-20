
import { Injectable } from '@angular/core';
// import BigNumber from "bignumber.js";

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {
  web3: any;
  constructor(
    // private bigNumber: BigNumber
  ) { 
    this.init()
  }
  async init(){
    if (this.checkInstall()) {
        this.initWeb3();
        return true;
    } else {
        return false;
    }
  }
  //检测用户是否安装了metamask插件:boolean chrome/firefox/opera
  checkInstall() {
    return typeof window['web3'] !== 'undefined';
  }

  //初始化Web3对象
  initWeb3() {
    this.web3 = new window['Web3'](window['web3'].currentProvider)
    // this.web3 = new window['Web3'](window['web3'].providers.HttpProvider("http://localhost:8545"));
  }

  //验证是否登录:boolean
  isLogin() {
    // debugger
      if (this.init()) {
        return this.web3.eth.accounts && this.web3.eth.accounts.length && this.web3.eth.accounts.length !== 0;
      } else {
        return false;
      }
  }

  //检查到节点的连接是否存在
  gg(){
    var connected = window['Web3'].isConnected();
    if(!connected){
      console.log("node not connected!");
    }else{
      console.log("node connected");
    }
  }
  //验证当前网络(是否为主网:boolean
  checkNetwork() {
    //   console.log(this.web3.version.network,'是否为专用网络',this.web3)
      if (this.isLogin()) {
          return this.web3.version.network === "1";
      } else {
          return false;
      }
  }

  //获取默认账号/当前使用账号:string
  getDefaultAccount() {
      if (this.isLogin()) {
          return this.web3.eth.defaultAccount;
      } else {
          return '';
      }
  }

  //获取所有账号:Array<string>
  getAllAccounts() {
      if (this.isLogin()) {
          return this.web3.eth.accounts;
      } else {
          return []
      }
  }

  //验证是否是合法的钱包地址:boolean address:钱包地址
  isAddress(address: string) {
      return this.web3.isAddress(address);
  }

  //获取余额:number? address:钱包地址
  getBalance(address: string, callback: Function) {
    if (this.isLogin()) {
        this.web3.eth.getBalance(address, (err, balance) => {
            if (err) {
                console.log('error', err, err.message);
                callback('');
            } else {
                console.log('获取到余额了',this.web3.fromWei(balance, 'ether').toString())
                callback(this.web3.fromWei(balance, 'ether').toString())
            }
        })
    } else {
        console.log('没登录');
        callback('');
    }
  }

  //   
  toWei(number: number){
      return this.web3.toWei(number, 'ether')
  }

 //  这里使用Metamask 给的gas Limit 及 gas 价
  dialog(option: object){
      console.log(option,111)
      this.web3.eth.sendTransaction(option, (err, res) => {
          if (!err) {
              console.log('true',err)
          } else {
              console.log('error',err)
          }
      })
  }

  /**
   * 签名
   */
  sign(){
    let hash = this.web3.toHex('hello,april');
    console.log(hash,'hash',this.web3.eth.accounts[0])
    this.web3.personal.sign(hash, this.web3.eth.accounts[0], (err, res) => {
        console.log(err,'err')
        console.log(res,'res')
        if (!err) {
            let result = {
                r: res.substring(0, 66),
                s: "0x" + res.substring(66, 130),
                v: "0x" + res.substring(130, 132)
            };
            console.log(result,'success result')
            // callbackSuccess(result);
        } else {
            // callbackError();
        }
    });
  }

  /**
   * 复制到剪贴板
   */
   copyTextToClipboard(text: any) {
      const textArea: any = document.createElement('textarea');
      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copying text command was ' + msg)
      } catch (err) {
        console.log('Oops, unable to copy')
      }
      document.body.removeChild(textArea)
  }

}
