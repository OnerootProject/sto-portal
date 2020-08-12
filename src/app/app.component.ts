import { Component, ViewContainerRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {DialogController} from './controller/dialog'
import {SkinServiceService} from './service/skin-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./skin.scss']
})
export class AppComponent {

  title = 'eth-oneroot';
  theme: string = 'drak';
  lang: string;

  constructor(
    public translate:TranslateService,
    private viewContainerRef: ViewContainerRef,
    private dialogCtrl: DialogController,
    private skin: SkinServiceService
  ){
    console.log(viewContainerRef,"111")
    // this.dialogCtrl.setViewContainerRef(this.viewContainerRef)
    //添加语言支持
    translate.addLangs(["en", "zh"]);

    //设置默认语言，一般在无法匹配的时候使用
    // this.translate.setDefaultLang('zh');
    
    //获取当前浏览器环境的语言比如en、 zh
    let browserLang = translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');

    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.changeLang();
    this.setTheme();
    
    
  }

  /**
   * 订阅语言
   */
  changeLang(){
    this.skin.getLangObservable().subscribe( res => {
      this.translate.use(res);
    })
  }

  /**
   * 订阅皮肤
   */
  setTheme(){
    this.skin.getObservable().subscribe( res => {
      this.theme = res;
    })
  }

}
