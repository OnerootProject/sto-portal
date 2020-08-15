import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import {SelectInterface} from '../../interface/select.interface'
declare var $;
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  private setLang: any;
  private defaultSet: any;
  public dis: boolean = false;
  private height: number = 35;
  i: number = 0 ;
  j: number = 0 ;
  private placeholder: any = 'Select a resson';
  private placeholderColor: string = '#adada7';
  // private transform: string = 'rotatex(0deg)';
  @Input() list: Array<SelectInterface>;
  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) { 
    document.addEventListener("click",_ => {
      this.dis = false;
  });
  }

  ngOnInit() {
    setTimeout(_ => {
      console.log(this.list);
      this.filter();
    })

  }
  filter(){
    let item = this.list;
    for(let i in item){
      if(this.defaultSet){
        if(item[i].val == this.defaultSet)
          return this.setLang = item[i].name
      }
      // else
      //   return this.setLang = item[i].name, this.defaultSet = item[i].val ;
    }
  }
  slideDownLanguage(){
    event.stopPropagation();
    this.dis = !this.dis;
  }
  sel(val,e,$event){
    this.i ++ ;
    console.log(this.i,'rrrrrrrrrrr')
    event.stopPropagation();
    this.defaultSet = val;
    this.dis = !this.dis;
    this.filter();
  }

}
