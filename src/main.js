import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNotification, clearGallery, initLightbox, showLoader, hideLoader } from './js/render-functions.js';

let currentPage = 1;
let currentQuery = '';
const perPage = 15;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.search-form');
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load more';
    loadMoreButton.classList.add('load-more');
    document.body.appendChild(loadMoreButton);
    loadMoreButton.style.display = 'none';

    form.addEventListener('submit', onSearch);
    loadMoreButton.addEventListener('click', onLoadMore);

    initLightbox();
});

async function onSearch(event) {
    event.preventDefault();

    const query = event.target.elements.searchQuery.value.trim();
    if (!query) {
        showNotification('Please enter a search query!', 'warning');
        return;
    }

    currentQuery = query;
    currentPage = 1;

    clearGallery();
    showLoader();

    try {
        const data = await fetchImages(query, currentPage, perPage);
        hideLoader();

        if (data.hits.length === 0) {
            showNotification('Sorry, there are no images matching your search query. Please try again!', 'warning');
            return;
        }

        renderImages(data.hits);
        updateLoadMoreButton(data.totalHits);
    } catch (error) {
        hideLoader();
        showNotification('An error occurred while fetching images. Please try again!', 'error');
    }
}

async function onLoadMore() {
    currentPage += 1;
    showLoader();

    try {
        const data = await fetchImages(currentQuery, currentPage, perPage);
        hideLoader();
        renderImages(data.hits);
        updateLoadMoreButton(data.totalHits);
    } catch (error) {
        hideLoader();
        showNotification('An error occurred while fetching images. Please try again!', 'error');
    }
}

function updateLoadMoreButton(totalHits) {
    const loadMoreButton = document.querySelector('.load-more');
    if (currentPage * perPage >= totalHits) {
        loadMoreButton.style.display = 'none';
        showNotification("We're sorry, but you've reached the end of search results.", 'info');
    } else {
        loadMoreButton.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
});
