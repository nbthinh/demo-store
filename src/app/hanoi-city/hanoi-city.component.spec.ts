import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiCityComponent } from './hanoi-city.component';

describe('HanoiCityComponent', () => {
  let component: HanoiCityComponent;
  let fixture: ComponentFixture<HanoiCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HanoiCityComponent]
    });
    fixture = TestBed.createComponent(HanoiCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
