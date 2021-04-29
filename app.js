const prevBtn = document.querySelector('.prevBtn__cntr');
const nextBtn = document.querySelector('.nextBtn__cntr');
let slides = document.querySelectorAll('.slider__item .slides');
let slidesCntr = document.querySelectorAll('.slider__item');
let mainImg = document.getElementById('featured');
let activeImg = document.getElementsByClassName('active');
let thumbWrap = document.getElementById('thumb__wrap')



let size = slides[0].clientHeight;
let counter = 1;
slidesCntr[counter].classList.add('active');





prevBtn.addEventListener('click', () => {
    let size = slides[0].clientHeight;
    counter--
    if(counter < 0) {
        return counter = 0;
    }

    if(activeImg.length > 0) {
        slidesCntr[counter+1].classList.remove('active')
    }
    if(counter === 0) {
        thumbWrap.classList.add('thumb__wrap-up');
        thumbWrap.removeAttribute('style')
    }
    mainImg.src = slides[counter].src;
    slidesCntr[counter].classList.add('active')
    console.log(counter)

    
});

nextBtn.addEventListener('click', () => {
    let size = slides[0].clientHeight;
    counter++

    if(counter > slides.length - 1) {
        return counter = slides.length - 1;
    }

    if(activeImg.length > 0) {
        slidesCntr[counter-1].classList.remove('active')
    }

    if(counter === slides.length - 1) {
        thumbWrap.classList.add('thumb__wrap-up');
        thumbWrap.style.transform = 'translateY(' + (-size/2) + 'px)';
    }

    mainImg.src = slides[counter].src;
    slidesCntr[counter].classList.add('active')
    console.log(counter)
})


for(let i = 0; i < slides.length; i++) {
slidesCntr[i].addEventListener('click', () => {
    let size = slides[0].clientHeight;
    mainImg.src = slides[i].src;
    slidesCntr[i].classList.add('active')
    if(activeImg.length > 0) {
        slidesCntr[counter].classList.remove('active')
        counter = i;
    }

    

    if(counter === 0) {
        thumbWrap.classList.add('thumb__wrap-up');
        thumbWrap.removeAttribute('style')
    }
   
    if(counter === slides.length - 1) {
        thumbWrap.classList.add('thumb__wrap-up');
        thumbWrap.style.transform = 'translateY(' + (-size/2) + 'px)';
    }
   
    console.log(counter)
 })
};

