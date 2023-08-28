// fetch("https://kea-alt-del.dk/t7/api/products/1163")
//   .then((res) => res.json())
//   .then((data) => showProducts(data));

// function showProducts(products) {
//   products.forEach(showProduct);
// }

// function showProduct(product) {
//   console.log(product);
//   const template = document.querySelector("#productTemplate").content;
//   const copy = template.cloneNode(true);

//   copy.querySelector("h3").textcontent = product.productdisplayname;

//   document.querySelector("main").appendChild(copy);
// }

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#ProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  //appende
  document.querySelector("main").appendChild(copy);
}
