import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss']
})
export class QuotaComponent implements OnInit {
  private list = [
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      issuer: 'Bob',
      million: '100',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      issuer: 'Bob',
      million: '100',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      issuer: 'Bob',
      million: '100',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      issuer: 'Bob',
      million: '100',
      number: '100,000'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
