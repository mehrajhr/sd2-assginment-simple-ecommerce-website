let totalItem = 0;
let totalPrice = 0;
let newPrice = 0;
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
  const { id, image, description, title, price } = element;
  console.log(element);
  const cardContainer = document.getElementById("card-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
    id="img_${id}"
      class="h-64"
      src="${image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 id="title_${id}" class="card-title">${title}</h2>
    <p >${description}</p>
    <h4  class="text-2xl font-semibold text-gray-600">Price: <span id="price_${id}">${price}</span></h4>
    <div class="card-actions justify-end">
      <button onClick="handleAddToCart(${id})" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    `;
  cardContainer.appendChild(div);
};
const handleAddToCart = (id) => {
  totalItem++;
  document.getElementById("totalItems").innerText = totalItem;
  document.getElementById("showTotalItem").innerText = totalItem;
  const price = document.getElementById(`price_${id}`).innerText;
  console.log(price);
  const updatePrice = parseFloat(price);
  console.log(updatePrice);
  totalPrice += updatePrice;
  document.getElementById("totalPrice").innerText = totalPrice;
  addCardinAddtocardContainer(id,updatePrice);
};
const addCardinAddtocardContainer = (id,price) => {
  const addCardContainer = document.getElementById("addCardContainer");
  const div = document.createElement("div");
  const title = document.getElementById(`title_${id}`).innerText;
  const image = document.getElementById(`img_${id}`).src;
  div.innerHTML = `
    <div class="border rounded-2xl p-2 flex gap-4 justify-center items-center w-64">
        <div>
                                    <img class="w-16 h-16"
                                        src="${image}" alt="">
                                </div>
                                <div class="flex flex-col gap-2 ">
                                    <h2>${title}</h2>
                                    <p>Price : ${price}</p>
                                </div>
                            </div>
    `;
    addCardContainer.appendChild(div);

};
const handleDiscount = () =>{
  const discountAmount = document.getElementById('discount-amount');
  if(totalPrice > 500){
    const discount = totalPrice * (10/100);
    newPrice = totalPrice - discount;
    discountAmount.innerHTML = 
    `
    <p>Discount : 10% - ${discount.toFixed(2)}</p>
    <p>Total Amount : ${newPrice}</p>
    `;
  }
  else{
    const discount = 0;
    newPrice = totalPrice - discount;
    discountAmount.innerHTML = 
    `
    <p>Discount : 0% - $${discount.toFixed(2)}</p>
    <p>Total Amount : $${newPrice + 10}</p>
    `;
  }
}
const handleOrderNow = () =>{
    if(totalItem >= 1){
        
        alert("Your order succesfull");
    }else{
        alert("no item found,,please add");
    }
}
