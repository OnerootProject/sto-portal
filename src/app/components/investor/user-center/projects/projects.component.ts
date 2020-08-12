import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private list = [
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      number: '100,000'
    },
    {
      coin: 'BST',
      name: 'Big Security Token',
      address: '0x198F…BCDDE6',
      amount: '100 million',
      number: '100,000'
    },
  ];
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
