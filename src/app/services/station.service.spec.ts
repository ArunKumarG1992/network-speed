import { TestBed } from '@angular/core/testing';

import { StationService } from './station.service';

describe('StationService', () => {
  let service: StationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be test mocked stations', () => {
    service.getStations().subscribe(station => {
      expect(station).toEqual([
        { x: 0, y: 0, reach: 9 },
        { x: 20, y: 20, reach: 6 },
        { x: 10, y: 0, reach: 12 },
        { x: 5, y: 5, reach: 13 },
        { x: 99, y: 25, reach: 2 },
      ]);
    })
  });
});
