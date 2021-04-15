let hamburger = document.querySelector('.hamburger');
let fadein = document.querySelector('.fadein');
let menu = document.querySelector('.menu');
let bod = document.querySelector('.container');


hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});



window.addEventListener('scroll', function(){


let $sections = document.querySelectorAll('.fade-in-section');
$sections.forEach(function(element,index){
 let bottom_of_object = element.offsetTop + element.offsetHeight
 let bottom_of_window = window.pageYOffset + screen.height



if(bottom_of_window > bottom_of_object){

  element.classList.add("is-visible")
}




})

})