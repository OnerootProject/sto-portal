import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.scss']
})
export class UserApplicationComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
