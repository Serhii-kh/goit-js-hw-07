import { galleryItems } from "./gallery-items.js";

const galleryDivRef = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
`;
    })
    .join("");
};

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryDivRef.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
