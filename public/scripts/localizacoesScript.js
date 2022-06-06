var map = L.map('map').setView([-14, -53], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map)
var marker


for (let index = 0; index < 4; index++) {
    let randomLongitude = Math.random() * (-14 - -8) + -8
    let randomLatitude = Math.random() * (-53 - -60) + -60
    
    var myIcon = L.icon({
        iconUrl: `/marcadores/marcador${index}.png`,
        iconSize: [20, 35]
        })
    

    L.marker([randomLongitude, randomLatitude],{icon: myIcon}).addTo(map).on('click', function(e) {
        map.setView([e.latlng.lat,e.latlng.lng],10)
    })
}