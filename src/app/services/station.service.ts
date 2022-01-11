import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor() { }

  getStations(): Observable<Station[]> {
    //API call to get the available stations
    return of([
      { x: 0, y: 0, reach: 9 },
      { x: 20, y: 20, reach: 6 },
      { x: 10, y: 0, reach: 12 },
      { x: 5, y: 5, reach: 13 },
      { x: 99, y: 25, reach: 2 },
    ])
  }
}
