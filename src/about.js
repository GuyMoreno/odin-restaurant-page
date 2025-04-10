import plant from "./plant.jpg";

function loadAbout() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("h1");
  header.textContent = "About";

  const img = document.createElement("img");
  img.src = plant;

  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World.";

  const footer = document.createElement("p");
  footer.textContent = "Photo by Ivan Florendo";

  footer.classList.add("footer");

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(paragraph);
  container.appendChild(footer);

  content.appendChild(container);
}

export default loadAbout;
