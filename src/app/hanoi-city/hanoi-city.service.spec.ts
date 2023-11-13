import { TestBed } from '@angular/core/testing';

import { HanoiCityService } from './hanoi-city.service';

describe('HanoiCityService', () => {
  let service: HanoiCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HanoiCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
