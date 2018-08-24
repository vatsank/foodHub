import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthfoodComponent } from './northfood.component';

describe('NorthfoodComponent', () => {
  let component: NorthfoodComponent;
  let fixture: ComponentFixture<NorthfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
