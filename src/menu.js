// ss
import veganRamen from "./veganRamen.jpg";

function loadMenu() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("h1");
  header.textContent = "Menu";

  const img = document.createElement("img");
  img.src = veganRamen;

  const paragraph = document.createElement("p");
  paragraph.textContent = "Not just a Ramen.";

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(paragraph);
  content.appendChild(container);
}

export default loadMenu;
