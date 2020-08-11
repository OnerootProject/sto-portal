import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitQuotaComponent } from './submit-quota.component';

describe('SubmitQuotaComponent', () => {
  let component: SubmitQuotaComponent;
  let fixture: ComponentFixture<SubmitQuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitQuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
