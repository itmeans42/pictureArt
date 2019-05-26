const popupDesign = () => {
    let btns = document.querySelectorAll(".button-design"),
        popup = document.querySelector(".popup-design"),
        close = popup.querySelector(".popup-close"),
        elemsIn = popup.querySelector("form").children;

    const openPopup = () => {
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
        for(let i = 0; i < elemsIn.length; i++) {
            if(elemsIn[i] != status) {
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
        while (current != null) {
            if (current.classList.contains(click)) {
                return true;
            }
            current = current.parentElement;
        } return false;
    }
    
    btns.forEach((btn) => { 
        btn.addEventListener("click", () => {
            openPopup()
        });
    });
    close.addEventListener("click", () => {
        closePopup();
    });
    popup.addEventListener("click", (e) => {
        if (!parentsOfElements(e.target, "popup-content") &&
        !e.target.classList.contains("popup_close")) {
            closePopup();
        }
    });
}
module.exports = popupDesign;