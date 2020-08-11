import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-quota',
  templateUrl: './add-quota.component.html',
  styleUrls: ['./add-quota.component.scss']
})
export class AddQuotaComponent implements OnInit {

  constructor(
    public translate:TranslateService
  ) { }

  ngOnInit() {
  }

}
