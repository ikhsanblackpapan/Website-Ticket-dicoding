let currentIndex = 0;
let slidesPerView = window.innerWidth <= 1000 ? 4 : 2; // Karena ada dua titik, masing-masing mengontrol 2 gambar
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");

function showSlide(index) {
  const carousel = document.querySelector(".carousel");
  const totalImages = carousel.children.length;
  const dots = document.querySelectorAll(".dot");

 // Pastikan indeks tetap dalam batas slidesPerView (karena dua titik = dua slide)
if (index >= slidesPerView) {
    currentIndex = 0; // Jika sudah sampai titik terakhir, kembali ke awal
} else if (index < 0) {
    currentIndex = slidesPerView - 1; // Jika menekan previous di titik pertama, kembali ke slide terakhir
} else {
    currentIndex = index;
}

  // Hitung offset untuk menampilkan dua gambar sekaligus
  const offset = -currentIndex * (200 / slidesPerView); // Karena setiap slide mengandung dua gambar, offset 200%
carousel.style.transform = `translateX(${offset}%)`;

  // Atur titik indikator aktif
dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
});

  // Kontrol tombol previous dan next
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.style.display = currentIndex === 0 ? "none" : "block"; // Sembunyikan tombol previous di awal
  nextButton.style.display =
    currentIndex === slidesPerView - 1 ? "none" : "block"; // Sembunyikan tombol next di slide terakhir
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function updateSlidesPerView() {
  slidesPerView = window.innerWidth <= 1000 ? 4 : 2; // Ubah jumlah slidesPerView berdasarkan ukuran layar
  showSlide(currentIndex); // Panggil showSlide agar sesuai dengan slide yang baru
}

// Tambahkan event listener untuk menangani perubahan ukuran layar
window.addEventListener("resize", updateSlidesPerView);

// Panggil pertama kali agar slide dan titik indikator sinkron saat halaman dimuat
showSlide(currentIndex);

// bagian hamburger

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

function showAlert() {
  alert("Pesanan Berhasil.");
}

function toggleDescription(event) {
  event.preventDefault(); // Mencegah link default
  const description = event.target.nextElementSibling; // Deskripsi yang berada di bawah link "About"

  if (
    description.style.display === "none" ||
    description.style.display === ""
  ) {
    description.style.display = "block"; // Tampilkan deskripsi
  } else {
    description.style.display = "none"; // Sembunyikan deskripsi
  }
}

function toggleDescription(event) {
  event.preventDefault(); // Mencegah aksi default dari link

  // Temukan deskripsi terkait dengan link yang diklik
  const clickedLink = event.target;
  const relatedDescription = clickedLink.nextElementSibling;

  // Jika deskripsi sudah terlihat, sembunyikan dan hapus class "active"
  if (relatedDescription.style.display === "block") {
    relatedDescription.style.display = "none";
    clickedLink.classList.remove("active");
    return; // Akhiri fungsi
  }

  // Sembunyikan semua deskripsi dan hapus class "active" dari semua link
  const allDescriptions = document.querySelectorAll(".description");
  const allLinks = document.querySelectorAll(".footer-section a");

  allDescriptions.forEach((desc) => {
    desc.style.display = "none";
  });

  allLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Tampilkan deskripsi yang terkait dan tambahkan class "active" pada link
  relatedDescription.style.display = "block";
  clickedLink.classList.add("active");
}
