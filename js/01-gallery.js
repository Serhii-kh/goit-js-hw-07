import { galleryItems } from "./gallery-items.js";

const galleryDivRef = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>

`;
    })
    .join("");
};

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryDivRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryDivRef.addEventListener("click", onGalleryDivClick);

function onGalleryDivClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const modalWindow = basicLightbox.create(".gallery a");
  modalWindow.show();
}

console.log(galleryDivRef);
