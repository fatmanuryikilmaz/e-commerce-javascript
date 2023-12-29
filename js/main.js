import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

//! add product to lacalStorage start
//?fetch veri almak için kullanılan yapı

(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
  searchFunc(data);
})(); //?kendi kendine gelen fonksiyon
//! add product to lacalStorage end

//! add cartItems to lacalStorage start
const cartItems = document.querySelector(".header-card-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems to lacalStorage end
