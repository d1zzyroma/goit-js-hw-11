import{S as c}from"./assets/vendor-f4e7ce0d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();new c(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const a=new Date,d=a.getDate(),m=a.getMonth()+1,u=a.getFullYear(),p=`${d}-${m}-${u}`,k=document.getElementById("publication_date");k.textContent=p;document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".commentList-item").forEach(i=>{const e=new Date;e.setDate(e.getDate()-5);const s=e.toISOString().split("T")[0],t=i.querySelector(".publication-date");t?t.textContent=""+s:console.error('Element with class "publication-date" not found')}),document.addEventListener("click",function(i){const e=i.target;if(e.classList.contains("like-btn")){const s=e.classList.contains("liked"),t=e.parentElement.nextElementSibling.querySelector(".dislike-btn").classList.contains("disliked");if(s){e.classList.remove("liked");const n=parseInt(e.dataset.likes);e.dataset.likes=n-1,e.querySelector(".like-count").textContent=e.dataset.likes}else{e.classList.add("liked");const n=parseInt(e.dataset.likes);if(e.dataset.likes=n+1,e.querySelector(".like-count").textContent=e.dataset.likes,t){e.parentElement.nextElementSibling.querySelector(".dislike-btn").classList.remove("disliked");const l=parseInt(e.parentElement.nextElementSibling.querySelector(".dislike-btn").dataset.dislikes);e.parentElement.nextElementSibling.querySelector(".dislike-btn").dataset.dislikes=l-1,e.parentElement.nextElementSibling.querySelector(".dislike-btn .dislike-count").textContent=e.parentElement.nextElementSibling.querySelector(".dislike-btn").dataset.dislikes}}}if(e.classList.contains("dislike-btn")){const s=e.classList.contains("disliked"),t=e.parentElement.previousElementSibling.querySelector(".like-btn").classList.contains("liked");if(s){e.classList.remove("disliked");const n=parseInt(e.dataset.dislikes);e.dataset.dislikes=n-1,e.querySelector(".dislike-count").textContent=e.dataset.dislikes}else{e.classList.add("disliked");const n=parseInt(e.dataset.dislikes);if(e.dataset.dislikes=n+1,e.querySelector(".dislike-count").textContent=e.dataset.dislikes,t){e.parentElement.previousElementSibling.querySelector(".like-btn").classList.remove("liked");const l=parseInt(e.parentElement.previousElementSibling.querySelector(".like-btn").dataset.likes);e.parentElement.previousElementSibling.querySelector(".like-btn").dataset.likes=l-1,e.parentElement.previousElementSibling.querySelector(".like-btn .like-count").textContent=e.parentElement.previousElementSibling.querySelector(".like-btn").dataset.likes}}}})});document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("commentForm"),i=document.getElementById("commentAuthor"),e=document.getElementById("commentText"),s=document.getElementById("commentList");o.addEventListener("submit",function(t){t.preventDefault();var n=i.value.trim(),l=e.value.trim();if(l!==""){var r=document.createElement("li");r.className="commentList-item",r.innerHTML=`
                <img src="./img/default-avatar.jpg" alt="" class="commentList-item-img">
                <div class="comment-text-content">
                    <p class="comment-text"><b style="font-size: 18px; color: dodgerblue;">${n}</b></p>
                    <p class="comment-text">${l}</p>
                    <div class="icons">
                        <ul class="icons-list">
                            <li class="icons-list-item">
                                <button class="icons-btn like-btn" data-likes="0">
                                    <svg width="16" height="16">
                                        <use xlink:href="./img/symbol-defs.svg#icon-like"></use>
                                    </svg>
                                    <span class="like-count">0</span> ชอบ 
                                </button>
                            </li>
                            <li class="icons-list-item">
                                <button class="icons-btn dislike-btn" data-dislikes="0">
                                    <svg width="16" height="16">
                                        <use xlink:href="./img/symbol-defs.svg#icon-dislike"></use>
                                    </svg>
                                    <span class="dislike-count">0</span> ไม่ชอบ 
                                </button>
                            </li>
                            <li class="icons-list-item">
                                <a href="#commentForm" class="icons-btn">
                                    <svg width="16" height="16">
                                        <use xlink:href="./img/symbol-defs.svg#icon-comment"></use>
                                    </svg>
                                    ฟอร์ม
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            `,s.insertAdjacentElement("afterbegin",r),i.value="",e.value=""}})});
//# sourceMappingURL=commonHelpers.js.map
