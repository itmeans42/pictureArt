const feedbackSlider = () => {
        let slideIndex = 1,
            items = document.querySelectorAll(".feedback-slider-item"),
            prev = document.querySelector(".main-prev-btn"),
            next = document.querySelector(".main-next-btn");

    const showSlides = (n) => {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach((item) => {
            item.classList.add("animated");
            item.style.display = "none";
        });
        items[slideIndex - 1].style.display = "block";
    }
    const plusSlides = (n, auto=false) => {
        showSlides(slideIndex += n);
        if (!auto) { 
            clearInterval(sliderInterval);
            sliderInterval = timer();
        }
        items[slideIndex - 1].classList.remove(n>0?"slideInRight":"slideInLeft");
        items[slideIndex - 1].classList.add(n>0?"slideInLeft":"slideInRight");  
    }
    showSlides(slideIndex);
    prev.addEventListener("click", () => { plusSlides(-1 ) });
    next.addEventListener("click", () => { plusSlides( 1 ) });
    const timer = () => setInterval(()=> { plusSlides(1,1) }, 5000);
    let sliderInterval = timer();
    }
module.exports = feedbackSlider;