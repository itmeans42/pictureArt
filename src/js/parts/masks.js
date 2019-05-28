const masks = () => {
    let inputTel = document.querySelectorAll('input[type="tel"]');
    let inputText = document.querySelectorAll('input[type="text"]:not([class="promocode"]), textarea');
        inputTel.forEach((elem) => {
            elem.addEventListener("input", mask, false);
        });
        inputText.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[A-Z]/gi, '');
            });
        });

    function mask() {
        let matrix = "+_ (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
}
module.exports = masks;