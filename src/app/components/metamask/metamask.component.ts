import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import {DepositDialogConfigInterface} from "../../controller/dialog.controller";

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss']
})
export class MetamaskComponent implements OnInit {
  // @Input() config: DepositDialogConfigInterface;//各配置项信息
  @Input() onDialogClose: Function;//必留参数
  fadeFlag: string = 'fadeIn';
  currentSelectExplorer:string='chrome';
  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }
  onThisDialogClose(){
    let _this = this;
    this.fadeFlag = 'fadeOut';
    setTimeout(function(){
        _this.onDialogClose();
    },250)//小于300
}
}