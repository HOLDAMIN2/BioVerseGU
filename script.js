function toggleSearch() {

    const popup =
    document.getElementById("searchPopup");

    if (
        popup.style.display === "block"
    ) {

        popup.style.display = "none";

    }

    else {

        popup.style.display = "block";

    }

}
/* GAUHATI UNIVERSITY MAP */

var map = L.map('map').setView(
    [26.1540, 91.6620],
    16
);

/* MAP LAYER */

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:
    '&copy; OpenStreetMap contributors'
}
).addTo(map);

/* HOTSPOT 1 */

L.marker([26.1540, 91.6620])
.addTo(map)
.bindPopup(
'<b>Botanical Garden</b><br>Rich biodiversity zone.'
);

/* HOTSPOT 2 */

L.marker([26.1520, 91.6645])
.addTo(map)
.bindPopup(
'<b>Wetland Area</b><br>Natural ecosystem region.'
);

/* HOTSPOT 3 */

L.marker([26.1555, 91.6605])
.addTo(map)
.bindPopup(
'<b>Forest Zone</b><br>Dense tree population.'
);