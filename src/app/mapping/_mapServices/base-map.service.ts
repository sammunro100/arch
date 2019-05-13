import { Injectable } from '@angular/core';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';

@Injectable({
  providedIn: 'root'
})
export class BaseMapService {

  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;
  baseMapConfig: any;
  map: OlMap;
  vector: VectorLayer;
  vectorSource = new VectorSource({ wrapX: false });

  constructor() { }

  getBaseMapConfig(): any {
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.vector = new VectorLayer({
      source: this.vectorSource
    });

    this.view = new OlView({
      center: fromLonLat([6.661594, 50.433237]),
      zoom: 3
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer, this.vector],
      view: this.view
    });

    return this.map;
  }
}
