import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  private directionsService: any;
  map: any;
  private currentPositionIndex: number = 0;
  private positions: any[] = [
    { lat: 28.662208, lng: -106.040669 }, // Position 1
    { lat: 28.651234, lng: -106.050543 }, // Position 2
    { lat: 28.649876, lng: -106.058912 }, // Position 3
    { lat: 28.647890, lng: -106.065432 }, // Position 4
    { lat: 28.642424, lng: -106.147147 } // Position 5
  ];

  ngOnInit() {
    this.initializeMap();
    this.calculateAndDisplayRoute();
    this.updateCurrentPosition();
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
      origin: this.positions[0], // Replace 'Point A' with the actual starting point
      destination: this.positions[this.positions.length - 1], // Replace 'Point B' with the actual destination
      waypoints: this.positions.slice(1, -1).map((position) => ({ location: position })),
      optimizeWaypoints: true, // Optimize the order of waypoints for the most efficient route
      travelMode: 'DRIVING', // You can change the travel mode to 'WALKING', 'BICYCLING', or 'TRANSIT'
    };

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(directionsRequest, (response: any, status: any) => {
      if (status === 'OK') {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);
        directionsRenderer.setDirections(response);

        // Show your position within the route
        const myPositionMarker = new google.maps.Marker({
          position: this.positions[this.currentPositionIndex],
          map: this.map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Change the icon as desired
        });
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  private updateCurrentPosition() {
    setInterval(() => {
      this.currentPositionIndex++;
      if (this.currentPositionIndex >= this.positions.length) {
        this.currentPositionIndex = 0;
      }

      const myPositionMarker = new google.maps.Marker({
        position: this.positions[this.currentPositionIndex],
        map: this.map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Change the icon as desired
      });
    }, 10000); // Interval of 10 seconds
  }
}
