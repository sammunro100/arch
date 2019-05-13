import { BaseMapService } from './../_mapServices/base-map.service';
import { Component, OnInit } from '@angular/core';
import OlMap from 'ol/Map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: OlMap;

  constructor(
    private readonly baseMapService: BaseMapService
  ) { }

  ngOnInit() {
    this.map = this.baseMapService.getBaseMapConfig();
  }
}

