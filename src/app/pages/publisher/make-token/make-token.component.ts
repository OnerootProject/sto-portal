import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-make-token',
  templateUrl: './make-token.component.html',
  styleUrls: ['./make-token.component.scss']
})
export class MakeTokenComponent implements OnInit {

  step: number = 1;

  constructor(
    public translate:TranslateService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  next(num: number){
      if(num == 0){
          this.router.navigateByUrl('user/issue')
      }
      this.step = num;
  }
  back(num: number){
    this.step = num;
  }

}
