import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-submit-quota',
  templateUrl: './submit-quota.component.html',
  styleUrls: ['./submit-quota.component.scss']
})
export class SubmitQuotaComponent implements OnInit {

  @Input() onDialogClose: Function;//必留参数
  fadeFlag: string = 'fadeIn';

  list: Array<any> = [
    {
      'address': '0x89779A…A4DDA',
      'amount': '100,000',
      'sellPeriod': '10/10 2019',
      'buyPeriod': '10/10 2019',
      'kycStatus': 'Approved',
    }, {
      'address': '0x89779A…A4DDA',
      'amount': '100,000',
      'sellPeriod': '10/10 2019',
      'buyPeriod': '10/10 2019',
      'kycStatus': 'Approved',
    }, {
      'address': '0x89779A…A4DDA',
      'amount': '100,000',
      'sellPeriod': '10/10 2019',
      'buyPeriod': '10/10 2019',
      'kycStatus': 'Approved',
    },
  ]

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
