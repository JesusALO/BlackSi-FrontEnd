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
  private currentPositionMarker: any;
  private directionsRenderer: any;
  private waypoints: any[] = [];
  private currentLocationInterval: any;
  estimatedTravelTimes: string[] = [];


  ngOnInit() {
    this.initializeMap();
  }

  public initializeMap() {
    const mapOptions = {
      center: { lat: 28.637240, lng: -106.075057 }, // Set the initial position of the map
      zoom: 12, // Adjust the initial zoom level
    };

    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
    this.map = map;

    // Add click event listener to allow setting waypoints
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.addWaypoint(event.latLng);
    });
  }

  

  public addWaypointFromSearch() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const address = input.value;
  
    if (address.trim() !== '') {
      this.geocodeLocation(address)
        .then((location: any) => {
          this.addWaypoint(location);
          input.value = ''; // Clear the search input
        })
        .catch((error: any) => {
          console.log('Geocoding error:', error);
        });
    }
  }
  


  private geocodeLocation(address: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results: any, status: any) => {
        if (status === 'OK' && results && results.length > 0) {
          resolve(results[0].geometry.location);
        } else {
          reject(status);
        }
      });
    });
  }
  

  private addWaypoint(latLng: any) {
    if (this.waypoints.length >= 8) {
      window.alert('Maximum number of waypoints reached.');
      return;
    }

    this.waypoints.push({ location: latLng });
    this.calculateAndDisplayRoute();
  }

  private calculateAndDisplayRoute() {
    const directionsRequest = {
      origin: this.waypoints[0]?.location,
      destination: this.waypoints[this.waypoints.length - 1]?.location,
      waypoints: this.waypoints.slice(1, -1),
      optimizeWaypoints: true,
      travelMode: 'DRIVING',
    };
  
    this.directionsService.route(directionsRequest, (response: any, status: any) => {
      if (status === 'OK') {
        this.directionsRenderer.setDirections(response);
  
        const legs = response.routes[0].legs;
  
        this.estimatedTravelTimes = legs.map((leg: any) => leg.duration.text);
  
        this.startUpdatingCurrentLocation();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  

  private getInstructions(legs: any[]): string[] {
    const instructions: string[] = [];
    for (const leg of legs) {
      const steps = leg.steps;
      for (let j = 0; j < steps.length; j++) {
        instructions.push(steps[j].instructions);
      }
    }
    return instructions;
  }

  private startUpdatingCurrentLocation() {
    if (this.currentLocationInterval) {
      clearInterval(this.currentLocationInterval); // Clear the current location interval if it exists
    }

    this.currentLocationInterval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.updateCurrentPositionMarker(latLng);
        },
        (error: any) => {
          console.log('Error getting current position:', error.message);
        }
      );
    }, 1000); // Update every 10 seconds
  }

  private updateCurrentPositionMarker(latLng: any) {
    if (this.currentPositionMarker) {
      this.currentPositionMarker.setPosition(latLng);
    } else {
      this.currentPositionMarker = new google.maps.Marker({
        position: latLng,
        map: this.map,
      });
    }
  }
}
