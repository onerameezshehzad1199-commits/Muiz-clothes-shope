/* =========================
   MOIUZ CLOTH JAVASCRIPT
========================= */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

  }, 800);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn) {

  menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

  });

}


/* Close mobile menu when link clicked */

document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("active");

  });

});


/* =========================
   SEARCH
========================= */

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

if (searchBtn) {

  searchBtn.addEventListener("click", () => {

    searchBox.classList.add("active");

    setTimeout(() => {
      searchInput.focus();
    }, 400);

  });

}


if (closeSearch) {

  closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("active");

  });

}


/* Search products */

if (searchInput) {

  searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

      const productName =
        card.querySelector("h3").textContent.toLowerCase();

      if (productName.includes(searchValue)) {

        card.style.display = "";

      } else {

        card.style.display = "none";

      }

    });

  });

}


/* =========================
   CART
========================= */

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];


/* Open cart */

if (cartBtn) {

  cartBtn.addEventListener("click", () => {

    cartPopup.classList.add("active");

  });

}


/* Close cart */

if (closeCart) {

  closeCart.addEventListener("click", () => {

    cartPopup.classList.remove("active");

  });

}


/* Close cart when clicking outside */

if (cartPopup) {

  cartPopup.addEventListener("click", (event) => {

    if (event.target === cartPopup) {

      cartPopup.classList.remove("active");

    }

  });

}


/* =========================
   ADD TO CART
========================= */

document.querySelectorAll(".quick-add").forEach(button => {

  button.addEventListener("click", () => {

    const productName = button.dataset.product;

    let price = 0;

    if (productName === "Noir Essential") {
      price = 8500;
    }

    if (productName === "Ivory Muse") {
      price = 9900;
    }

    if (productName === "The Classic") {
      price = 10500;
    }

    if (productName === "Midnight Edit") {
      price = 12500;
    }

    cart.push({
      name: productName,
      price: price
    });

    updateCart();

    cartPopup.classList.add("active");

  });

});


/* =========================
   UPDATE CART
========================= */

function updateCart() {

  if (cart.length === 0) {

    cartItems.innerHTML =
      '<p class="empty-cart">Your bag is currently empty.</p>';

    cartTotal.textContent = "PKR 0";

    return;

  }


  cartItems.innerHTML = "";

  let total = 0;


  cart.forEach((item, index) => {

    total += item.price;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name}</span>
      <span>
        PKR ${item.price.toLocaleString()}
        <button
          onclick="removeFromCart(${index})"
          style="
            background:none;
            border:none;
            color:#999;
            cursor:pointer;
            margin-left:10px;
          "
        >×</button>
      </span>
    `;

    cartItems.appendChild(div);

  });


  cartTotal.textContent =
    "PKR " + total.toLocaleString();

}


/* =========================
   REMOVE CART ITEM
========================= */

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
  document.getElementById("newsletterForm");

const formMessage =
  document.getElementById("formMessage");


if (newsletterForm) {

  newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
      document.getElementById("email").value.trim();


    if (email === "") {

      formMessage.textContent =
        "Please enter your email.";

      return;

    }


    formMessage.textContent =
      "Thank you. Welcome to the world of MOIUZ.";

    newsletterForm.reset();

  });

}


/* =========================
   CHECKOUT
========================= */

const checkoutBtn =
  document.querySelector(".checkout-btn");


if (checkoutBtn) {

  checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {

      alert("Your bag is empty.");

    } else {

      alert(
        "Thank you for shopping with MOIUZ CLOTH. Checkout system can be connected next."
      );

    }

  });

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    searchBox.classList.remove("active");

    cartPopup.classList.remove("active");

    navbar.classList.remove("active");

  }

});
