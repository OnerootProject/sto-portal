import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {SelectInterface} from '../../../interface/select.interface'
declare var $;

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.scss']
})
export class UserApplicationComponent implements OnInit {
  private documentType: Array<SelectInterface> = [
    {val: 1, name: '身份证'},
    {val: 2, name: '护照'},
    {val: 3, name: '签证'}
  ];
  private countryList: Array<SelectInterface> = [
    {val: 1, name: '中国'},
    {val: 2, name: '韩国'},
    {val: 3, name: '新加坡'},
    {val: 4, name: '印度尼西亚'}
  ];
  private gpathA: any='../../../../assets/images/user/carda.png';
  private gpathB: any='../../../../assets/images/user/cardb.png';
  private img: any;
  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }
  selectPhotos(type:number){
    if(type == 1)
      $('#upload-photo').click();
    else
      $('#upload-photos').click();
  }
  add_img(type:number){
    if(type == 1)
      this.ys(event,type);
    else
      this.ys(event,type);
  }
  ys(event,type){
    let _this = this;
    let eleFile = event.target.files[0];
    let reader = new FileReader();
      this.img = new Image();

    setTimeout(_=>{
      if(type == 1)
        this.gpathA = reader.result;
      else
        this.gpathB = reader.result;
    },500)

    let file = null;
    file = event.target.files[0];
    if(file.type.indexOf("image") == 0) {
      reader.readAsDataURL(file);
    }

    reader.onload = function(e) {
      _this.img.src = reader.result;
    };

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    _this.img.onload = function() {
        let originWidth = _this.img.width;
        let originHeight = _this.img.height;
        let maxWidth = 400,
            maxHeight = 400;
        let targetWidth = originWidth,
            targetHeight = originHeight;
        if(originWidth > maxWidth || originHeight > maxHeight) {
            if(originWidth / originHeight > maxWidth / maxHeight) {
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, targetWidth, targetHeight);
        context.drawImage(_this.img, 0, 0, targetWidth, targetHeight);
        canvas.toBlob(function(blob) {
            let form = new FormData();
            form.append('file', blob);
            form.append("fileName", "123jpg")

        });
    }
  }

}
