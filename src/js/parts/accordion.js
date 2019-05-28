const accordion = () => {
   let accordionHeading = document.querySelectorAll('.accordion-heading'),
       accordionBlock = document.querySelectorAll('.accordion-block');

   accordionBlock.forEach((item) => {
      item.style.display = 'none';
      item.classList.add('animated');
      item.classList.add('fadeInUp');
   });

let activePanel;
accordionHeading.forEach((item, i, accordionHeadings) => {
   item.addEventListener('click', function(e) {
   this.classList.add('ui-accordion-header-active');
   this.nextElementSibling.classList.add('ui-accordion-content-active');
   this.nextElementSibling.style.display = 'block';

   if (activePanel) {
      activePanel.classList.remove('ui-accordion-header-active');
      activePanel.nextElementSibling.classList.remove('ui-accordion-content-active');
      activePanel.nextElementSibling.style.display = 'none';
   }
   activePanel = (activePanel === this) ? 0 : this;
   });
});
};

module.exports = accordion;