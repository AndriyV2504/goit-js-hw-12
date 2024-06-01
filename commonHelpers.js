import{a as L,i as b,S as w}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const v="43967395-ba8c6739f73e8322e41736fdd",S="https://pixabay.com/api/";async function f(t,e=1,n=15){const a=`${S}?key=${v}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${n}`;try{return(await L.get(a)).data}catch(r){throw console.error("Fetch error:",r),r}}let d;function m(t){const e=document.querySelector(".gallery"),n=t.map(a=>$(a)).join("");e.insertAdjacentHTML("beforeend",n),P()}function $({webformatURL:t,largeImageURL:e,tags:n,likes:a,views:r,comments:o,downloads:i}){return`
        <div class="photo-card">
            <a href="${e}" class="gallery-link">
                <img 
                  width="360px";
                  height="200px";
                  src="${t}" 
                  alt="${n}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${a}</p>
                <p class="info-item"><b>Views:</b> ${r}</p>
                <p class="info-item"><b>Comments:</b> ${o}</p>
                <p class="info-item"><b>Downloads:</b> ${i}</p>
            </div>
        </div>
    `}function s(t,e="info"){b[e]({message:t,position:"topRight",padding:"20px",backgroundColor:"#EF4040"})}function q(){const t=document.querySelector(".gallery");t.innerHTML=""}function p(){d=new w(".gallery a",{captionsData:"alt",captionDelay:250})}function P(){d&&d.refresh()}function y(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}let c=1,h="";const u=15;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".search-form"),e=document.createElement("button");e.textContent="Load more",e.classList.add("load-more"),document.body.appendChild(e),e.style.display="none",t.addEventListener("submit",x),e.addEventListener("click",M),p()});async function x(t){t.preventDefault();const e=t.target.elements.searchQuery.value.trim();if(!e){s("Please enter a search query!","warning");return}h=e,c=1,q(),y();try{const n=await f(e,c,u);if(l(),n.hits.length===0){s("Sorry, there are no images matching your search query. Please try again!","warning");return}m(n.hits),g(n.totalHits)}catch{l(),s("An error occurred while fetching images. Please try again!","error")}}async function M(){c+=1,y();try{const t=await f(h,c,u);l(),m(t.hits),g(t.totalHits)}catch{l(),s("An error occurred while fetching images. Please try again!","error")}}function g(t){const e=document.querySelector(".load-more");c*u>=t?(e.style.display="none",s("We're sorry, but you've reached the end of search results.","info")):e.style.display="block"}document.addEventListener("DOMContentLoaded",()=>{p()});
//# sourceMappingURL=commonHelpers.js.map
