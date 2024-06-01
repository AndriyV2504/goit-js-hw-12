import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function renderImages(images) {
    const gallery = document.querySelector(`.gallery`);
    const imagesMarkup = images.map(image => createImageCard(image)).join(``);
    gallery.insertAdjacentHTML(`beforeend`, imagesMarkup);
    refreshLightbox();
}

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
        <div class="photo-card">
            <a href="${largeImageURL}" class="gallery-link">
                <img 
                  width="360px";
                  height="200px";
                  src="${webformatURL}" 
                  alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${likes}</p>
                <p class="info-item"><b>Views:</b> ${views}</p>
                <p class="info-item"><b>Comments:</b> ${comments}</p>
                <p class="info-item"><b>Downloads:</b> ${downloads}</p>
            </div>
        </div>
    `;
}

export function showNotification(message, type = `info`) {
    iziToast[type]({
        message: message,
        position: `topRight`,
        padding: `20px`,
        backgroundColor: '#EF4040',
    });
}

export function clearGallery() {
    const gallery = document.querySelector(`.gallery`);
    gallery.innerHTML = ``;
}

export function initLightbox() {
    lightbox = new SimpleLightbox(`.gallery a`, {
        captionsData: `alt`,
        captionDelay: 250,
    });
}

function refreshLightbox() {
    if (lightbox) {
        lightbox.refresh();
    }
}

export function showLoader() {
    document.querySelector(`.loader`).classList.remove(`hidden`);
}

export function hideLoader() {
    document.querySelector(`.loader`).classList.add(`hidden`);
}