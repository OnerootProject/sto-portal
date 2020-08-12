import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogController } from '../../../controller/dialog';
import { AddQuotaComponent } from '../../../components/publisher/add-quota/add-quota.component';
import { SubmitQuotaComponent } from '../../../components/publisher/submit-quota/submit-quota.component';


@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss']
})
export class QuotaComponent implements OnInit {

  quotaList: Array<any> = [
    {
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Approved',
      whitelist: 'Yes',
      type: 0,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Not approved',
      whitelist: 'No',
      type: 1,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Approved',
      whitelist: 'Yes',
      type: 0,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Not approved',
      whitelist: 'No',
      type: 1,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Approved',
      whitelist: 'Yes',
      type: 0,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Not approved',
      whitelist: 'No',
      type: 1,
    },{
      addres: '0x89779A…A4DDA',
      amount: '100,000',
      sell: '10/10 2019',
      buy: '10/10 2019',
      KYCstatus: 'Not approved',
      whitelist: 'No',
      type: 1,
    },
  ]

  constructor(
    private router:Router,
    private dialogCtrl:DialogController
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('user/issue');
  }

  addLsit(){
    this.dialogCtrl.createFromComponent(AddQuotaComponent);
    // this.router.navigateByUrl('user/add1');
  }
  submit(){
    this.dialogCtrl.createFromComponent(SubmitQuotaComponent);
    // this.router.navigateByUrl('user/add2');
  }
}
