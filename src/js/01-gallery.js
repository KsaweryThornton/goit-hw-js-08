import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
//
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryElem = galleryItems
  .map(item => {
    `<a
    class="gallery__item"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryElem);

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    let lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  }
});
