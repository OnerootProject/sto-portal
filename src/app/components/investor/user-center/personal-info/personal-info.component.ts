import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  goRoult(){
    this.router.navigate(['/user/application']);
  }
}
