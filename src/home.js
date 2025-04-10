// home.js
// export const greeting = "Hello, Odinite!";

import restaurantImage from "./restaurantImage.jpg";

function loadHome() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("h1");
  header.textContent = "Fine Food & Great People";

  const img = document.createElement("img");
  img.src = restaurantImage;

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Welcome to a place where every bite tells a story — our restaurant blends fine flavors, cozy atmosphere, and heartfelt hospitality.";

  const footer = document.createElement("p");
  footer.textContent = "Photo by Pascal Meier";

  footer.classList.add("footer");

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(paragraph);
  container.appendChild(footer);

  content.appendChild(container);
}

export default loadHome;
