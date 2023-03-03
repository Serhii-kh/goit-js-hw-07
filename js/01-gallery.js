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

let modal;

function onGalleryDivClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  modal.show();
  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    window.removeEventListener("keydown", onEscKeyPress);
    modal.close();
  }
}
