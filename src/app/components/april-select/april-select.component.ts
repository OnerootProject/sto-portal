import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import {SelectInterface} from '../../interface/select.interface'
declare var $;
@Component({
  selector: 'app-april-select',
  templateUrl: './april-select.component.html',
  styleUrls: ['./april-select.component.scss']
})
export class AprilSelectComponent implements OnInit {
  private setLang: any;
  private defaultSet: any;
  public dis: boolean = false;
  private height: number = 35;
  private placeholder: any = 'Select a reason';
  private placeholderColor: string = '#adada7';
  @Input() list: Array<SelectInterface>;
  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) { 
  //   document.addEventListener("click",_ => {
  //     this.dis = false;
  // });
  }

  ngOnInit() {
    setTimeout(_ => {
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
  sel(val,e){
    event.stopPropagation();
    this.el.nativeElement.querySelector('.select-box').blur();
    this.defaultSet = val;
    this.filter();
  }
}

