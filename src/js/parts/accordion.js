const accordion = () => {

   let accordion = document.querySelectorAll('#accordion div'),
      accordionBlock = document.querySelectorAll('.accordion-block'),
      accordionHeading = document.querySelectorAll('.accordion-heading');

   accordionBlock.forEach((elem) => {
      setAccord(elem, 'add');  
   });
   
   accordionHeading.forEach((elem2, index) => {
      let accordionHeadingSpan = elem2.querySelector('span');     

      elem2.addEventListener('click', () => {
         setAccord(accordion[index], 'toggle');
         accordion[index].style.marginBottom = '15px';
         accordion[index].style.marginTop = '15px';

         let currentIndex = index;
         accordionHeadingSpan = accordionHeading[currentIndex].querySelector('span');
         accordionHeadingSpan.classList.toggle('active');

         accordionBlock.forEach((elem3, index2) => {
               if(index2 != currentIndex) {
                  setAccord(elem3, 'add');
                  accordionHeadingSpan = accordionHeading[index2].querySelector('span');
                  accordionHeadingSpan.classList.remove('active');    
               }
         });
      });   
   });  

   function setAccord (element, action) {
      if (action == 'add') {
         element.classList.add('hidden-lg');
         element.classList.add('hidden-md');   
         element.classList.add('hidden-sm');   
         element.classList.add('hidden-xs'); 
      }
      
      if (action == 'toggle') {
         element.classList.toggle('hidden-lg');
         element.classList.toggle('hidden-md');   
         element.classList.toggle('hidden-sm');   
         element.classList.toggle('hidden-xs'); 
      }
   }
}

module.exports = accordion;