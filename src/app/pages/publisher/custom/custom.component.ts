import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigateByUrl('user/issue')
  }
  dateChange(event){
      console.log(event.target.value)
  }
  dateChange1(event){
    console.log(event.target.value)
}
}
