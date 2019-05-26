const popupGift = () => {
    let gift = document.querySelector(".fixed-gift"),
        popup = document.querySelector(".popup-gift"),
        close = popup.querySelector(".popup-close");

    const openPopup = () => {
        pressedBtn = true;
        popup.style.display = "block";
        gift.style.display = "none";
        document.body.style.overflow = "hidden";
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

    gift.addEventListener("click", () => {
    openPopup();
    });

    close.addEventListener("click", () => {
    closePopup();
    })

    popup.addEventListener("click", (e) =>  {
        if (!parentsOfElements(e.target, "popup-content") &&
            !e.target.classList.contains("popup_close")) {
                closePopup();
        }
    });
}
module.exports = popupGift;