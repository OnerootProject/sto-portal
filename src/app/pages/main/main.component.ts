import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.init()
  }
  init(){

  }
  login(address: string){
      if(address == 'publisher'){
          this.router.navigateByUrl('user/issue');
          sessionStorage.setItem('userType', 'publisher');
      }else{
        this.router.navigateByUrl('user/issue');
        sessionStorage.setItem('userType', 'investor');
      }
  }

}
