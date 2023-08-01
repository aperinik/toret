const fs = require('fs');

const torets = JSON.parse(fs.readFileSync('toret.json'));

const pos = { 'latitude': 45.06276255058742, 'longitude': 7.678976947881029 } //Porta Nuova

var minDist = 999;
var t;
for (let t of torets) {
    coords = t.latlng;
    dist = Math.sqrt((pos.latitude - coords.latitude) ** 2 + (pos.longitude - coords.longitude) ** 2);
    if (dist < minDist) {
        minDist = dist;
        closest = t;
    }
}
console.log(minDist * 111000);
console.log(
    'ID:', closest.id, '\n',
    'Toret più vicino:', closest.address, '\n',
    'Coordinate:', closest.latlng, '\n',
    'URL Google Maps:', 'https://www.google.com/maps/place/' + closest.latlng.latitude + ',' + closest.latlng.longitude, '\n',
    'URL Foto:', 'https://ilovetoret.it' + closest.photo_original, '\n',
);