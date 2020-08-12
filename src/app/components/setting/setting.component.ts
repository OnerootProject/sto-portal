
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import {DepositDialogConfigInterface} from "../../controller/dialog.controller";
// import { LanguageService } from '../../service/langulage.service';
// import { AssetService } from '../../service/asset.service';
// import { ThemeService } from '../../service/theme.service';
import {SkinServiceService} from '../../service/skin-service.service'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

    /*-----Data Part-----*/

    // @Input() config: DepositDialogConfigInterface;//各配置项信息
    @Input() onDialogClose: Function;//必留参数
    @Input() theme: string;
    @Output() changeTheme = new EventEmitter();
    @Output() changeLang = new EventEmitter();

    fadeFlag: string = 'fadeIn';

    setLang:string = this.skin.getLang();
    setTheme:string = this.skin.getTheme();

    constructor(
        private skin: SkinServiceService
    ) {

    }

    //Mounted
    ngOnInit() {

    }

    close(){
        let _this = this;
        this.fadeFlag = 'fadeOut';
        setTimeout(function(){
            _this.onDialogClose();
        },250)//小于300
    }

    SlideDown(obj, icon){
        function Show_Hidden(obj, icon) {
            if (obj.style.display == "block") {
                obj.style.display = 'none';
                icon.style.transform = 'rotatex(0deg)';
            } else {
                obj.style.display = 'block';
                icon.style.transform = 'rotatex(180deg)';
            }
        }
        Show_Hidden(obj, icon);
        return false;
    }
    slideDownLanguage(){
        let down_box1 = document.getElementsByClassName('down-box')[0];
        let icon1 = document.getElementsByClassName('icon-down')[0];
        this.SlideDown(down_box1, icon1);
    }

    //切换主题
    switchTheme(theme: string) {
        this.setTheme = theme;
    }

    //切换语言
    switchLanguage(language: string) {
        this.setLang = language;
    }


    //设置
    setting(){
        this.skin.set(this.setTheme);
        this.skin.setLang(this.setLang);
        this.close();
    }

}
