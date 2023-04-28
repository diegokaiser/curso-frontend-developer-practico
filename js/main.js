const jsMenuMobile = document.querySelector(".menu");
const jsMobileMenu = document.querySelector(".mobile-menu");
const jsMenuEmail = document.querySelector(".navbar-email");
const jsDesktopMenu = document.querySelector(".desktop-menu");
const jsNavbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const jsShoppingCartTitle = document.querySelector(".title-container");
const jsCartAside = document.querySelector(".product-detail");
const jsCardsContainer = document.querySelector(".cards-container");
const jsProductAside = document.querySelector(".product-detail-info");
const jsCloseProductAside = document.querySelector(".product-detail-close");

jsMenuEmail.addEventListener("click", toggleDesktopMenu);
jsMenuMobile.addEventListener("click", toggleDesktopMobile);
jsShoppingCartTitle.addEventListener("click", toggleCartAside);
jsNavbarShoppingCart.addEventListener("click", toggleCartAside);
jsCloseProductAside.addEventListener("click", closeProductAside);

function toggleDesktopMobile() {
  jsCartAside.classList.remove("active");
  jsProductAside.classList.remove("active");
  jsMobileMenu.classList.toggle("active");
}

function toggleDesktopMenu() {
  jsCartAside.classList.remove("active");
  jsProductAside.classList.remove("active");
  jsDesktopMenu.classList.toggle("active");
}

function toggleCartAside() {
  jsDesktopMenu.classList.remove("active");
  jsMobileMenu.classList.remove("active");
  jsCartAside.classList.toggle("active");
  jsProductAside.classList.remove("active");
}

function openProductDetail() {
  jsDesktopMenu.classList.remove("active");
  jsMobileMenu.classList.remove("active");
  jsCartAside.classList.remove("active");
  jsProductAside.classList.add("active");
}

function closeProductAside() {
  jsProductAside.classList.remove("active");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Monitor",
  price: 210,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Teclado",
  price: 70,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProductList(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const productCart = document.createElement("img");
    productCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productCart);

    productInfo.appendChild(productDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    jsCardsContainer.appendChild(productCard);
  }
}
renderProductList(productList);
