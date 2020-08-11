import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTokenComponent } from './make-token.component';

describe('MakeTokenComponent', () => {
  let component: MakeTokenComponent;
  let fixture: ComponentFixture<MakeTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
