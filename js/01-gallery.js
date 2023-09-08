import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
// tworzenie i renderowanie galleri
galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original;
  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});
galleryList.addEventListener("click", selectImage);
function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
`);
  instance.show();
  document.addEventListener("keydown", escape);
  function escape(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escape);
    }
  }
}
