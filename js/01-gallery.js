import { galleryItems } from "./gallery-items.js";

const galleryDivRef = document.querySelector(".gallery");
console.log(galleryDivRef);

const createGalleryCardsMarkup = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
};

const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryDivRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryDivRef);
