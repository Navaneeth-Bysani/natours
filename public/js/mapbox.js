//console.log('hello from the client side')


export const displayMap = locations => {
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YW5lZXRoYnlzYW5pIiwiYSI6ImNrYjI0a3p3NjA3djIyeW43amxsMTNkMG4ifQ.K-LlmKiug9hF9LtowMiDWg';
var map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v11',
   scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
	//Create Marker
	const el = document.createElement('div');
	el.className = 'marker';

	new mapboxgl.Marker({
		element: el,
		anchor: 'bottom'
	}).setLngLat(loc.coordinates).addTo(map);

	new mapboxgl.Popuo({
		offset: 30
	}).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

	//Extend map bounds to include current location
	bounds.extend(loc.coordinates);

});


map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}