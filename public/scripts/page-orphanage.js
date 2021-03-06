/* Criando objetos8 */
const options = {
  dragging: false,
  touchZoom: false,
  doubleClick: false,
  scrollWheelZoom: false,
  ZoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-12.9424079, -38.4557171, 18], 15);

// And create and tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  poupAnchor: [170, 2],
});

// create and add marker
L.marker([-12.9424079, -38.4557171, 18], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  console.log(button.children);

  // Remover todasas classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar as imagens clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  //atualizar o container de image
  imageContainer.src = image.src;
  //adicionar de volta a classe .active para este botão
  button.classList.add("active");
}
