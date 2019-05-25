const filter = () => {
    let menuItems = document.querySelectorAll('.portfolio-menu li'),
        allItems = document.querySelector('.portfolio-menu .all'),
        lovers = document.querySelector('.portfolio-menu .lovers'),
        chef = document.querySelector('.portfolio-menu .chef'),
        girl = document.querySelector('.portfolio-menu .girl'),
        guy = document.querySelector('.portfolio-menu .guy'),
        grandmother = document.querySelector('.portfolio-menu .grandmother'),
        granddad = document.querySelector('.portfolio-menu .granddad'),

        allPictures = document.querySelectorAll('.portfolio-wrapper .all'),
        loversPictures = document.querySelectorAll('.portfolio-wrapper .lovers'),
        chefPictures = document.querySelectorAll('.portfolio-wrapper .chef'),
        girlPictures = document.querySelectorAll('.portfolio-wrapper .girl'),
        guyPictures = document.querySelectorAll('.portfolio-wrapper .guy'),
        noPictures = document.querySelector('.container .portfolio-no');

    const hideAll = () => {
        allPictures.forEach((elem) => {
            elem.style.display = 'none';
        });
        noPictures.style.display = 'none';
        menuItems.forEach((elem2)=> {
            elem2.classList.remove('active');
        }); 
    }

    const chooseItem = (btn, picturesType) => {
        btn.addEventListener('click', () => {
            hideAll();
            picturesType.forEach((elem) => {   
                btn.classList.add('active');
                elem.style.display = 'block';
            });
        });
    }

    const emptyBlock = (btn, block) => {
        btn.addEventListener('click', ()=> {
            hideAll();
            btn.classList.add('active');
            block.style.display = 'block';
        });
    }

    chooseItem(allItems,allPictures);
    chooseItem(lovers,loversPictures);
    chooseItem(chef,chefPictures);
    chooseItem(girl,girlPictures);
    chooseItem(guy,guyPictures);
    emptyBlock(grandmother, noPictures);
    emptyBlock(granddad, noPictures);
}
module.exports = filter;