import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const murkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>     
  </a>
</li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', murkup);

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const { target } = event;

  if (!target.classList.contains('gallery__image')) {
    return;
  }
  const original = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">`);
  instance.show();
  onEscClick(instance);
}
function onEscClick(param) {
  document.addEventListener('keydown', event => {
    if (event.code !== 'Escape') {
      return;
    }
    param.close();
  });
}
