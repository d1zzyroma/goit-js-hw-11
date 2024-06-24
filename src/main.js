import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();
const formattedDate = `${day}-${month}-${year}`;
const publicationDateElement = document.getElementById('publication_date');

publicationDateElement.textContent = formattedDate;

document.addEventListener('DOMContentLoaded', function() {
    const commentItems = document.querySelectorAll('.commentList-item');
    commentItems.forEach(item => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 5);
        const formattedDate = currentDate.toISOString().split('T')[0];
        const publicationDateDiv = item.querySelector('.publication-date');
        if (publicationDateDiv) {
            publicationDateDiv.textContent = '' + formattedDate;
        } else {
            console.error('Element with class "publication-date" not found');
        }
    });
    document.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('like-btn')) {
            const isLiked = target.classList.contains('liked');
            const isDisliked = target.parentElement.nextElementSibling.querySelector('.dislike-btn').classList.contains('disliked');

            if (!isLiked) {
                target.classList.add('liked');
                const likeCount = parseInt(target.dataset.likes);
                target.dataset.likes = likeCount + 1;
                target.querySelector('.like-count').textContent = target.dataset.likes;

                if (isDisliked) {
                    target.parentElement.nextElementSibling.querySelector('.dislike-btn').classList.remove('disliked');
                    const dislikeCount = parseInt(target.parentElement.nextElementSibling.querySelector('.dislike-btn').dataset.dislikes);
                    target.parentElement.nextElementSibling.querySelector('.dislike-btn').dataset.dislikes = dislikeCount - 1;
                    target.parentElement.nextElementSibling.querySelector('.dislike-btn .dislike-count').textContent = target.parentElement.nextElementSibling.querySelector('.dislike-btn').dataset.dislikes;
                }
            } else {
                target.classList.remove('liked');
                const likeCount = parseInt(target.dataset.likes);
                target.dataset.likes = likeCount - 1;
                target.querySelector('.like-count').textContent = target.dataset.likes;
            }
        }

        if (target.classList.contains('dislike-btn')) {
            const isDisliked = target.classList.contains('disliked');
            const isLiked = target.parentElement.previousElementSibling.querySelector('.like-btn').classList.contains('liked');

            if (!isDisliked) {
                target.classList.add('disliked');
                const dislikeCount = parseInt(target.dataset.dislikes);
                target.dataset.dislikes = dislikeCount + 1;
                target.querySelector('.dislike-count').textContent = target.dataset.dislikes;

                if (isLiked) {
                    target.parentElement.previousElementSibling.querySelector('.like-btn').classList.remove('liked');
                    const likeCount = parseInt(target.parentElement.previousElementSibling.querySelector('.like-btn').dataset.likes);
                    target.parentElement.previousElementSibling.querySelector('.like-btn').dataset.likes = likeCount - 1;
                    target.parentElement.previousElementSibling.querySelector('.like-btn .like-count').textContent = target.parentElement.previousElementSibling.querySelector('.like-btn').dataset.likes;
                }
            } else {
                target.classList.remove('disliked');
                const dislikeCount = parseInt(target.dataset.dislikes);
                target.dataset.dislikes = dislikeCount - 1;
                target.querySelector('.dislike-count').textContent = target.dataset.dislikes;
            }
        }
    });
});


  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('commentForm');
    var commentAuthorInput = document.getElementById('commentAuthor');
    var commentTextInput = document.getElementById('commentText');
    var commentList = document.getElementById('commentList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var commentAuthor = commentAuthorInput.value.trim();
        var commentMessage = commentTextInput.value.trim();

        if (commentMessage !== '') {
            var listItem = document.createElement('li');
            listItem.className = 'commentList-item';
            listItem.innerHTML = `
                <img src="./img/default-avatar.jpg" alt="" class="commentList-item-img">
                <div class="comment-text-content">
                    <p class="comment-text"><b style="font-size: 18px; color: dodgerblue;">${commentAuthor}</b></p>
                    <p class="comment-text">${commentMessage}</p>
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
            `;
            commentList.insertAdjacentElement("afterbegin",listItem);

            commentAuthorInput.value = ''; 
            commentTextInput.value = ''; 
        }
    });
});


