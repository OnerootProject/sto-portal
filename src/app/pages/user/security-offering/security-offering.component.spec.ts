import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOfferingComponent } from './security-offering.component';

describe('SecurityOfferingComponent', () => {
  let component: SecurityOfferingComponent;
  let fixture: ComponentFixture<SecurityOfferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOfferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
