// import veganRamen from "./veganRamen.jpg";

function loadAbout() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("h1");
  header.textContent = "About";

  const img = document.createElement("img");
  img.src = veganRamen;

  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World.";

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(paragraph);
  content.appendChild(container);
}

export default loadAbout;
