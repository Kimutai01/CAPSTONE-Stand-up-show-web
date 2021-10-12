const seeMoreBtn = document.querySelector('#comedian-see-more-btn');
const hiddenPart = document.querySelector('.comidian');

seeMoreBtn.addEventListener('click', ()=>{
  hiddenPart.style.display = "grid";
});
