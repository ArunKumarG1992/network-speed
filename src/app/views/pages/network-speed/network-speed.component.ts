import { Component } from '@angular/core';
import { Device } from 'src/app/models/device';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-network-speed',
  templateUrl: './network-speed.component.html',
  styleUrls: ['./network-speed.component.css']
})
export class NetworkSpeedComponent {
  stations: Array<Station> = []
  device: Device = {}
  beastStationMsg: string = ''
  bestSpeed: number = 0

  constructor(private stationService: StationService) {
    this.stationService.getStations().subscribe(stations => {
      this.stations = stations
    });
  }

  findBestNetworkStartion(): void {
    this.bestSpeed = 0
    let beastStation: Station | undefined
    this.stations.forEach((station: Station) => {
      if (this.device.x != undefined && this.device.y != undefined) {
        //To calculate distance below formula is used
        //distance = √((xA − xB)^2 + (yA − yB)^2)
        let distance = Math.sqrt(Math.pow((this.device.x - station.x), 2) + Math.pow((this.device.y - station.y), 2))
        //if distance > reach, speed = 0
        if (distance < station.reach) {
          //speed = (reach - device's distance from network station)^2
          let speed = Math.pow((station.reach - distance), 2)
          if (this.bestSpeed < speed) {
            this.bestSpeed = speed
            beastStation = station
          }
        }
      }
    })
    //Output best station with the best speed calculated
    if (this.bestSpeed === 0) {
      this.beastStationMsg = 'No network station within reach for point ' + this.device.x + ',' + this.device.y
    } else {
      this.beastStationMsg = 'Best network station for point ' + this.device.x + ',' + this.device.y + ' is ' + beastStation?.x + ',' + beastStation?.y + ' with speed ' + this.bestSpeed
    }
  }

}
