import User from './User';
import Company from './Company';

interface MapItem {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      }
    );
  }

  addMarker(mapItem: MapItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapItem.location.lat,
        lng: mapItem.location.long,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapItem.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // refactor - too much deplications
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.long,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.long,
  //     },
  //   });
  // }
}

export default CustomMap;
