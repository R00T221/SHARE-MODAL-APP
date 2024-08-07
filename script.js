//Fetching elements with class name modal and overlay
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
//openModal() function
/*When this function is called,it changes the scale-0 class to scale-1 by adding a new class 'scale-1' using classlist.add() attribute and adds overlay as well by adding opacity-100 and pointer-events-auto class.
Note that we have to translate it along x and y axis again here becox these class in j.s are applied after the modal has been positioned using top and left using css. The transform property with translate(-50%, -50%) in the .active class adjusts the position of the modal relative to itself, ensuring that its center remains at the same position even after scaling or other transformations.
*/
 openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("scale-100","-translate-x-1/2");
    overlay.classList.add("opacity-100","pointer-events-auto");
  };
// closeModal() function
closeModal = () => {
    modal.classList.remove("scale-100");
    overlay.classList.remove("opacity-100","pointer-events-auto");
  };
