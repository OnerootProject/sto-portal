import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  list1: Array<any> = [
    {fu_title: 'Make security token', body: 'Make ST here to prepare for the release of STO'},
    
  ]

  list2: Array<any> = [{
      name: 'BST', 
      type: 0, 
      status: 'Application passed', 
      bName: 'Big Securlty Token',
      address: '0xaf...483c',
      link: '0xwe...3488',
      data: '2018-10-01',
      account: '0xssffsdfxvwegh...4r3c'
  },{
    name: 'RNT', 
    type: 1, 
    status: 'Application failed', 
    bName: 'Big Securlty Token',
    address: '0xaf...483c',
    link: '0xwe...3488',
    data: '2018-10-01',
    account: '0xssffsdfxvwegh...4r3c'
  },{
    name: 'BST', 
    type: 0, 
    status: 'Application passed', 
    bName: 'Big Securlty Token',
    address: '0xaf...483c',
    link: '0xwe...3488',
    data: '2018-10-01',
    account: '0xssffsdfxvwegh...4r3c'
  },{
    name: 'RNT', 
    type: 2, 
    status: 'in issue', 
    bName: 'Big Securlty Token',
    address: '0xaf...483c',
    link: '0xwe...3488',
    data: '2018-10-01',
    account: '0xssffsdfxvwegh...4r3c'
  }]

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  makeToken(){
    this.router.navigateByUrl('user/maketoken');
  }

  increase(address: string){
    if(address){
        let url = 'user/' + address;
        this.router.navigateByUrl(url);
    }

  }


}
