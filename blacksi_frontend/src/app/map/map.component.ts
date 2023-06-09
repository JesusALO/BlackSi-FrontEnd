import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  private directionsService: any;
  map: any;

  ngOnInit() {
    this.initializeMap();
    this.calculateAndDisplayRoute();
  }

  public initializeMap() {
    const mapOptions = {
      center: { lat: 28.637240, lng: -106.075057 }, // Set the initial position of the map
      zoom: 12, // Adjust the initial zoom level
    };
  
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);
  
    this.directionsService = new google.maps.DirectionsService();
    this.map = map;
  }
  

  private calculateAndDisplayRoute() {
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
    const directionsRequest = {
      origin: { lat: 28.662208, lng: -106.040669 }, // Replace 'Point A' with the actual starting point
      destination: { lat: 28.642424, lng: -106.147147 }, // Replace 'Point B' with the actual destination
      travelMode: 'DRIVING', // You can change the travel mode to 'WALKING', 'BICYCLING', or 'TRANSIT'
    };
  
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(directionsRequest, (response: any, status: any) => {
      if (status === 'OK') {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  
  
}
