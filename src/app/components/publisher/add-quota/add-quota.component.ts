import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-quota',
  templateUrl: './add-quota.component.html',
  styleUrls: ['./add-quota.component.scss']
})
export class AddQuotaComponent implements OnInit {

  @Input() onDialogClose: Function;//必留参数
  fadeFlag: string = 'fadeIn';

  constructor(
    public translate:TranslateService
  ) { }

  ngOnInit() {
  }

  close(){
      let _this = this;
      this.fadeFlag = 'fadeOut';
      setTimeout(function(){
          _this.onDialogClose();
      },250)//小于300
  }

}
