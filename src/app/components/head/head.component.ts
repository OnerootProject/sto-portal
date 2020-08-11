import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  type: string = 'userCenter';
  userType: string = sessionStorage.getItem('userType');

  constructor() { }

  ngOnInit() {
  }

  switch(type: string){
      this.type = type;
  }

}
