import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthfoodComponent } from './southfood.component';

describe('SouthfoodComponent', () => {
  let component: SouthfoodComponent;
  let fixture: ComponentFixture<SouthfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
