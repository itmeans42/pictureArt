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

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    showSlides(slideIndex);

    prev.addEventListener("click", () => {
        clearInterval(sliderInterval);
        plusSlides(-1);
        items[slideIndex - 1].classList.remove("slideInLeft");
        items[slideIndex - 1].classList.add("slideInRight");
        }),

        next.addEventListener("click", () => {
        clearInterval(sliderInterval);
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
        });

    let sliderInterval = setInterval (() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
        }, 6000);
    

    }
module.exports = feedbackSlider;