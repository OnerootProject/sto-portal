import { Component, OnInit, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-make-token',
  templateUrl: './make-token.component.html',
  styleUrls: ['./make-token.component.scss']
})
@Injectable()
export class MakeTokenComponent implements OnInit {

  step: number = 1;
  steps: number = 1;

  constructor(
    public translate:TranslateService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  next(num: number){
    this.steps = -1;
      if(num == 0){
          this.router.navigateByUrl('user/issue')
      }
      
      let move = document.getElementsByClassName('move');
      if(move){
        this.move(move[0], num);
      }
      setTimeout(()=>{
        this.step = num;
      },300)
      setTimeout(()=>{
        this.steps = num;
      },310)
      
  }
  move(obj, num){
    if(obj){
      obj.style.left = ((num-1) * 25)+'%';
    }
  }
  back(num: number){
    this.step = num;
  }

}
