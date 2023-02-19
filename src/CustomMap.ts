class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      }
    );
  }
}

export default CustomMap;
