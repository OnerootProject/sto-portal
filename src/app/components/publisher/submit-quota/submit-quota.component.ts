import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-submit-quota',
  templateUrl: './submit-quota.component.html',
  styleUrls: ['./submit-quota.component.scss']
})
export class SubmitQuotaComponent implements OnInit {

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

}
