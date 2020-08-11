import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss']
})
export class OfferingComponent implements OnInit {
  @Input() list: ArrayBuffer;
  constructor() { }

  ngOnInit() {
  }

}
