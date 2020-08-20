import { Component, OnInit,  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {SelectInterface} from '../../../interface/select.interface'
import { Router , ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'
import {ApplicationService} from '../../../service/application.service'
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
    public translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private applicationService: ApplicationService
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
    this.upload(event,type);
    // this.applicationService.uploadOSS(event)
  }
  async upload(event,type){
    let eleFile = event.target.files[0];
    let reader = new FileReader(),
      img:any = new Image();

    let file = null;
    file = event.target.files[0];
    if(file.type.indexOf("image") == 0) {
      reader.readAsDataURL(file);
    }

    reader.onload = function(e) {
      img.src = reader.result;
    };

    setTimeout(_=>{
      if(type == 1)
        this.gpathA = reader.result;
      else
        this.gpathB = reader.result;
    },500)
  }

  changeDate(data){
    console.log(data,'22222222')
  }

}
