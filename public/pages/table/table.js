const CONFIGURATION = {
    "locations": [
      {"title":"12 Nguyễn Văn Bảo","address1":"12 Nguyễn Văn Bảo","address2":"Phường 4, Hồ Chí Minh, Thành phố Hồ Chí Minh, Việt Nam","coords":{"lat":10.822135749002532,"lng":106.68682884774627},"placeId":"ChIJzwNtSeUodTERuTbGXjnnuKU"}
    ],
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
    "mapsApiKey": "AIzaSyC2Kwc8VHmxRtHzemN37IJ0rTSh8N_0wFA",
    "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false,"actions":false}
  };

  let map;

  async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
  
    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "e7f1f2b2b3b3b3b3",
    });
  
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }
  
  initMap();