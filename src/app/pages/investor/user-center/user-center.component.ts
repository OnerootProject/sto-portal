import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss']
})
export class UserCenterComponent implements OnInit {
  public selectedValue: string = 'jack';
  constructor() { }

  ngOnInit() {
  }

}
