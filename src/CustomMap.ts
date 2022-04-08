// Hide functionality from other devs
/// <reference types="@types/google.maps" />
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'),{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });  
  }

}