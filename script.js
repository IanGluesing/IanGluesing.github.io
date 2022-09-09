window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite2',
            location: {
                lat: 42.026865,
                lng: -93.651164,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './magnemite/scene.gltf');
        model.setAttribute('rotation', '0 0 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '.15 .15 .15');
        model.setAttribute('position', { x: 0, y: 0, z: -10 });

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
