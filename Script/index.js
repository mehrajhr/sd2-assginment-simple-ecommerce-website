let totalItem = 0;
let totalPrice = 0;
const loadData = () => {
  fetch(
    "https://farez770.github.io/products_json-data-for-iiuc-sd2-assignment/data.json"
  )
    .then((res) => res.json())
    .then((data) => loadProducts(data));
};
loadData();
const loadProducts = (data) => {
  data.forEach((element) => {
    loadProduct(element);
  });
};

const loadProduct = (element) => {
    const {id,image,description,title,price} = element;
  console.log(element);
  const cardContainer = document.getElementById("card-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      class="h-64"
      src="${image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${title}</h2>
    <p >${description}</p>
    <h4  class="text-2xl font-semibold text-gray-600">Price: <span id="price_${id}">${price}</span></h4>
    <div class="card-actions justify-end">
      <button onClick="handleAddToCart(${id})" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    `
    ;
    cardContainer.appendChild(div);
};
const handleAddToCart = (id) =>{
    totalItem++;
    document.getElementById('totalItems').innerText = totalItem;
    document.getElementById("showTotalItem").innerText = totalItem;
    const price = document.getElementById(`price_${id}`).innerText;
    console.log(price);
    const updatePrice = parseFloat(price);
    console.log(updatePrice);
    totalPrice += updatePrice;
    document.getElementById("totalPrice").innerText = totalPrice;
}
