let hamburger = document.querySelector('.hamburger');
let fadein = document.querySelector('.fadein');
let menu = document.querySelector('.menu');
let bod = document.querySelector('.container');


hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

// First article
const $home = document.getElementById('home')
const $id1 = document.getElementById('1')
$home.addEventListener('click', function(){
  $id1.classList.toggle("is-visible")
})

// Second article
const $portfolio = document.getElementById('portfolio')
const $id2 = document.getElementById('2')
$portfolio.addEventListener('click', function(){
  $id2.classList.toggle("is-visible")
})

// Third article
const $images = document.getElementById('images')
const $id3 = document.getElementById('3')
$images.addEventListener('click', function(){
  $id3.classList.toggle("is-visible")
})

// Fourth article
const $contact = document.getElementById('contact')
const $id4 = document.getElementById('4')
$contact.addEventListener('click', function(){
  $id4.classList.toggle("is-visible")
})


