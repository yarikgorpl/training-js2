import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const murkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', murkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // звідки брати підпис
  captionPosition: 'bottom', // положення підпису відносно картинки
  captionDelay: 250, // затримка через яку з'явиться підпис
});
