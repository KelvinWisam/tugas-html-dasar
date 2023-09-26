const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
    const product ="https://fakestoreapi.com/products";

   fetch(product)
   .then(response=>response.json())
   .then(data=>{  document.getElementById(`container`).innerHTML=``
data.forEach(function(product){
let element = document.createElement(`div`)
element.className = `box`

let nama = document.createElement(`h2`)
nama.innerHTML = product.title;
element.appendChild(nama)

let image = document.createElement(`img`)
image.src = product.image;
element.appendChild(image)

let deskripsi = document.createElement(`p`)
deskripsi.className = `Product-description`
deskripsi.innerHTML = product.price;
element.appendChild(deskripsi)

let output = document.getElementById(`container`)
output.appendChild(element)
})
   })



