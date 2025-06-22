const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push(product);
localStorage.setItem('cart', JSON.stringify(cart));

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
wishlist.push(product);
localStorage.setItem('wishlist', JSON.stringify(wishlist));


