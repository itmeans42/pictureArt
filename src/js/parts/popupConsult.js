function popupConsult() {
    let btns = document.querySelectorAll(".button-consultation"),
        popup = document.querySelector(".popup-consultation"),
        popupDesign = document.querySelector(".popup-design"),
        popupGift = document.querySelector(".popup-gift"),
        close = popup.querySelector(".popup-close"),
        elemsIn = popup.querySelector("form").children;

    const openPopup = () => {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
        for(let i = 0; i < elemsIn.length; i++){
            if(elemsIn[i] != status){
            elemsIn[i].style.display = "block";
            }
        }
    }

    const closePopup = () => {
    popup.style.display = "none";
    document.body.style.overflow = "";
    }

    const parentsOfElements = (elem, click) => {
    let current = elem;
        while (current != null){
            if (current.classList.contains(click)){
            return true;
            }
            current = current.parentElement;
        } return false;
        }

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            openPopup();
        });
    });
    close.addEventListener("click", function () {
        closePopup();
    });
    popup.addEventListener("click", function (e) {
        if (!parentsOfElements(e.target, "popup-content") &&
        !e.target.classList.contains("popup_close")) {
            closePopup();
        }
    });
}
module.exports = popupConsult;