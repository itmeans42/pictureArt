const calc = () => {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        calcPrice = document.querySelector('.calc-price')
        promocode = document.querySelector('.promocode');

    let sizeValues = {1: 1000, 2: 2000, 3: 3000, 4: 4000};

    let materialValues = {1: 1000, 2: 2000, 3: 3000};

    let optionsValues = {1: 500, 2: 500, 3: 500};
    
    const countPrice = () => {
        if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            
            let price = sizeValues[size.options.selectedIndex] + materialValues[material.options.selectedIndex];

            if (options.options.selectedIndex > 0) {
                price = price + optionsValues[options.selectedIndex];
            }
            if (promocode.value === "IWANTPOPART") {
                price = price * 0.7;
            }
            calcPrice.textContent = price;
        } else {
            calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
        }
    }
        
    size.addEventListener('change', () => {
        countPrice();
    });
    material.addEventListener('change', () => {
        countPrice();
    });
    options.addEventListener('change', () => {
        countPrice();
    });
    promocode.addEventListener('input', () => {
        countPrice();
    });
}

module.exports = calc;