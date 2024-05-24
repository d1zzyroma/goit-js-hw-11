import{S as i,i as c}from"./assets/vendor-3fe00192.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function d(l){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"44030880-e45e37f6dd8504bc3a71fd6c0",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=`${t}?${s}`;return fetch(a).then(e=>e.json())}function u(l){return l.map(t=>`
         <li class="gallery-item">
         <a href="${t.largeImageURL}" class="gallery-link">
           <img src="${t.webformatURL}" alt="${t.tags}" width="358px" height="150">
         </a>
         <div class="inf-wrapper">
           <div class="likes item">
             <p class="text-one">Likes</p>
             <p class="likes-count text-two">${t.likes}</p>
           </div>
           <div class="views item">
             <p class="text-one">Views</p>
             <p class="views-count text-two">${t.views}</p>
           </div>
           <div class="comments item">
             <p class="text-one">Comments</p>
             <p class="comments-count text-two">${t.comments}</p>
           </div>
           <div class="downloads item">
             <p class="text-one">Downloads</p>
             <p class="downloads-count text-two">${t.downloads}</p>
           </div>
         </div>
       </li>
        `).join("")}const r={formEl:document.querySelector(".form"),inputFormEl:document.querySelector(".form-input"),buttonFormEl:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loaderWrapper:document.querySelector(".loader-wrapper")};r.formEl.addEventListener("submit",p);function p(l){l.preventDefault(),r.gallery.innerHTML="";const t=r.inputFormEl.value.trim();m(),d(t).then(s=>{if(s.hits.length>0){const a=u(s.hits);r.gallery.insertAdjacentHTML("beforeend",a),new i(".gallery a",{showCounter:!1,captionsData:"alt",captionDelay:250}),r.gallery.refresh()}else c.show({title:"Error",message:"What would you like to add?",position:"topRight",color:"rgba(239, 64, 64, 1)",icon:"fas fa-exclamation-circle"})}).catch(s=>console.log(s)).finally(()=>{f()})}function m(){r.loader.style.display="block",r.loaderWrapper.style.display="flex"}function f(){r.loader.style.display="none",r.loaderWrapper.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
