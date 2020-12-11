// create map
const map = L.map('mapid').setView([-12.9424079,-38.4557171,18], 15)

// And create and tileLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    poupAnchor: [170, 2]
})


//const creat popup overlay 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src= "./public/images/arrow-white.svg" > </a>')


// create and add marker 
L
.marker([-12.9424079,-38.4557171,18], { icon })
.addTo(map)
.bindPopup(popup)
