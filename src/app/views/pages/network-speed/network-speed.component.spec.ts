import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationService } from 'src/app/services/station.service';
import { of } from 'rxjs';
import { NetworkSpeedComponent } from './network-speed.component';

describe('NetworkSpeedComponent', () => {
  let component: NetworkSpeedComponent;
  let fixture: ComponentFixture<NetworkSpeedComponent>;
  let stationService: StationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    stationService = TestBed.inject(StationService);
    spyOn(stationService, 'getStations').and.returnValue( of ([
      { x: 0, y: 0, reach: 9 },
      { x: 20, y: 20, reach: 6 },
      { x: 10, y: 0, reach: 12 },
      { x: 5, y: 5, reach: 13 },
      { x: 99, y: 25, reach: 2 },
    ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test findBestNetworkStartion for success case', () => {
    component.device = {
      x: 0, y: 0
    }
    component.findBestNetworkStartion()
    expect(component.bestSpeed).toEqual(81);
    expect(component.beastStationMsg).toEqual('Best network station for point 0,0 is 0,0 with speed 81')
  });

  it('should test findBestNetworkStartion for error case', () => {
    component.device = {
      x: 100, y: 100
    }
    component.findBestNetworkStartion()
    expect(component.bestSpeed).toEqual(0);
    expect(component.beastStationMsg).toEqual('No network station within reach for point 100,100')
  });
});
