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

let products =[
    {
        nama :`Honda Brio`,
        Image :`../Asset/Picture/honda-brio-18235.jpg`,
        deskripsi :`Honda Brio tersedia dalam pilihan mesin Bensin di Indonesia Hatchback baru dari Honda hadir dalam 14 varian. Bicara soal spesifikasi mesin Honda Brio, ini ditenagai dua pilihan mesin Bensin berkapasitas 1199 cc. Brio tersedia dengan transmisi Manual and CVT tergantung variannya. Brio adalah Hatchback 5 seater dengan panjang 3815 mm, lebar 1680 mm, wheelbase 2405 mm.`
    },{
        nama :`Toyota Rush 2023`,
        Image :`../Asset/Picture/toyota rush.jpg`,
        deskripsi :`Toyota Rush 2023 adalah 7 Seater SUV yang tersedia dalam daftar harga Rp 278,8 - 302,2 Juta di Indonesia. Ini tersedia dalam 6 warna, 4 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan Otomatis di Indonesia. Dimensi Rush adalah 4435 mm L x 1695 mm W x 1705 mm H. Lebih dari 135 pengguna telah memberikan penilaian untuk Rush berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 21,82 Juta (selama 60 bulan). Pesaing terdekat Toyota Rush adalah Terios, Xpander, Veloz dan Avanza.`
    },{
        nama :`Suzuki Ertiga 2023`,
        Image :`../Asset/Picture/suzuki-ertiga-front-angle-low-view-561755.jpg`,
        deskripsi :`Suzuki Ertiga 2023 adalah 7 Seater MPV yang tersedia dalam daftar harga Rp 225,1 - 259,5 Juta di Indonesia. Ini tersedia dalam 7 warna, 3 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan Otomatis di Indonesia. Mobil ini memiliki ground clearance 180 mm dengan dimensi sebagai berikut: 4395 mm L x 1735 mm W x 1690 mm H. Lebih dari 189 pengguna telah memberikan penilaian untuk Ertiga berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 11,26 Juta (selama 60 bulan). Pesaing terdekat Suzuki Ertiga adalah Kijang Innova Zenix, Avanza, XL7 dan Xpander.`
    },{
        nama :`Suzuki S-Presso 2023`,
        Image :`../Asset/Picture/suzuki-s-presso-front-angle-low-view-628835.jpg`,
        deskripsi :`Suzuki S-Presso 2023 adalah 4 Seater Hatchback yang tersedia dalam daftar harga Rp 155 - 164 Juta di Indonesia. Ini tersedia dalam 6 warna, 2 varian, 1 pilihan mesin, dan 2 opsi transmisi: Manual dan Otomatis di Indonesia. Dimensi S-Presso adalah 3565 mm L x 1520 mm W x 1565 mm H. Lebih dari 1 pengguna telah memberikan penilaian untuk S-Presso berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 13,25 Juta (selama 60 bulan). Pesaing terdekat Suzuki S-Presso adalah E-C4, KWID, Ayla dan Agya.`
    },{
        nama :`Wuling Alvez`,
        Image :`../Asset/Picture/wuling-alvez-front-angle-low-view-829412.jpg`,
        deskripsi :`Wuling Alvez membawa value for money sangat tinggi dalam segmen compact SUV. Banderol hanya kisaran Rp200 jutaan saja. Jauh di bawah lawan-lawannya yang berada di rentang Rp300 jutaan hingga Rp400 jutaan. Value menarik itu didapat dari seabrek fitur diberikan berbanding tawaran harganya. Karena murah, ia bisa menyenggol beberapa segmen. Kelas small SUV, LSUV sampai city car hatchback mampu disasarnya.`
    },{
        nama :`BMW X5 2023`,
        Image :`../Asset/Picture/bmw-x5-front-angle-low-view-279111.jpg`,
        deskripsi :`BMW X5 2023 adalah 5 Seater Crossover yang tersedia dengan harga Rp 1,82 Milyar di Indonesia. Ini tersedia dalam 8 warna, 1 varian, 1 pilihan mesin, dan 1 opsi transmisi: Otomatis di Indonesia. Dimensi X5 adalah 4922 mm L x 2004 mm W x 1745 mm H. Lebih dari 2 pengguna telah memberikan penilaian untuk X5 berdasarkan fitur, jarak tempuh, kenyamanan tempat duduk dan kinerja mesin. Cicilan bulanan terendah dimulai dari Rp 293,9 Juta (selama 72 bulan). Pesaing terdekat BMW X5 adalah C3 dan GLC-Class.`
    }
]

document.getElementById(`container`).innerHTML=``
products.forEach(function(product){
let element = document.createElement(`div`)
element.className = `box`

let nama = document.createElement(`h2`)
nama.innerHTML = product.nama
element.appendChild(nama)

let image = document.createElement(`img`)
image.src = product.Image
element.appendChild(image)

let deskripsi = document.createElement(`p`)
deskripsi.className = `Product-description`
deskripsi.innerHTML = product.deskripsi
element.appendChild(deskripsi)

let output = document.getElementById(`container`)
output.appendChild(element)
})

