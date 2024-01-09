export const initMap = () => {
  const map = L.map('map').setView([55.7726, 37.63], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  L.marker([55.7724, 37.6252]).addTo(map).bindPopup('E-trans').openPopup();
};
