import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eth-oneroot';
  constructor(
    public translate:TranslateService
  ){
    //添加语言支持
    translate.addLangs(["en", "zh"]);

    //设置默认语言，一般在无法匹配的时候使用
    // this.translate.setDefaultLang('zh');
    
    //获取当前浏览器环境的语言比如en、 zh
    let browserLang = translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');

    this.translate.setDefaultLang('zh');
    this.translate.use('zh');
  }
  change(){
    this.translate.use('en');
  }
}
