import { AfterViewInit, Component } from '@angular/core';
import { LatLngBoundsLiteral, LatLngTuple, Map, marker, tileLayer } from 'leaflet'
import { Marker } from 'src/app/interfaces/marker.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  map: Map | null;
  constructor() {
    this.map = null;
  }

  ngAfterViewInit() {
    this.map = new Map('map').setView([6.2199, -75.5889], 18);
    tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);

  }

  async addMarker(data : Marker) {
    const item = await marker([data.lat, data.lng]).addTo(this.map!).bindPopup(data.desc);
    const latLng: LatLngTuple = [item.getLatLng().lat, item.getLatLng().lng];
    const latLngBounds: LatLngBoundsLiteral = [latLng];
    this.map!.fitBounds(latLngBounds);

  }
}
