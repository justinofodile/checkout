let cart_container = document.querySelector('#cart-container');
let cartTotal = document.querySelector('#cart-total');
let proceedToCheckout = document.querySelector('#proceedToCheckout');
// console.log(cart_cotainer);

let cart_items = [
    {
        productID: Math.random(),
        productTitle: 'Oriamo 10000mah Power Bank OPB-P118D',
        price: 9000,
        img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/6931721/1.jpg?8750',
        quantity: 1,
        like: false,
    },
    {
        productID: Math.random(),
        productTitle: 'Oriamo Blender',
        price: 10000,
        img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/2629132/1.jpg?6822',
        quantity: 1,
        like: false,
    },
    {
        productID: Math.random(),
        productTitle: 'Oriamo Clipper',
        price: 2000,
        img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/95/637217/1.jpg?9404',
        quantity: 1,
        like: false,
    },
    {
        productID: Math.random(),
        productTitle: 'Oriamo earpod',
        price: 3000,
        img: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/05/8552852/1.jpg?3209',
        quantity: 1,
        like: false,
    },
];

let totalCostOfItemInCart;

// console.log(cart_items)

let currencyDisplay = Intl.NumberFormat('en-US');

function displayCartItems(products) {
    cart_container.innerHTML = cart_items.map((item) => {
        return `<div class="single-product">
               <img class="product_image" src="${item.img}" alt="">
               <div class="product_information">
                   <h3 class="product_title">${item.productTitle}</h3>
                   <p class="product_amount">&#8358; ${currencyDisplay.format(item.price)}</p>
                   <div><button onclick=decreaseQty(${item.productID})>-</button> <span>${item.quantity}</span> <button onclick=increaseQty(${item.productID})>+</button></div>
                   <button onclick=removeItemFromCart(${item.productID}) class="remove-btn">Remove</button>
                   <button onclick=updateProductLikeness(${item.productID}) class='like-btn'>${item.like === true ? `<i class="fas fa-heart fa-lg" style="color: #910808;"></i>` : `<i class="far fa-heart fa-lg"></i>`}</button>
               </div>
   </div>`
    }
    ).join("")
}

displayCartItems();
// calculateCartTotal()

// Function to increase the quantity of the item
function increaseQty(id) {
    cart_items.forEach((item) => {
        if (item.productID === id) {
            item.quantity = item.quantity + 1;
            // console.log(item.quantity);
        }
    })
    displayCartItems();
    calculateCartTotal()
}
// Function to increase the quantity of the item
function decreaseQty(id) {
    cart_items.forEach((item) => {
        if (item.productID === id) {
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity = item.quantity - 1;
            }
        }
    })
    displayCartItems();
    calculateCartTotal()
}

function removeItemFromCart(id) {
    cart_items = cart_items.filter((item) => item.productID !== id);
    displayCartItems()
    calculateCartTotal()
    return cart_items
}


function calculateCartTotal() {
    totalCostOfItemInCart = cart_items.reduce((total, value) => {
        return total + value.quantity * value.price;
    }, 0);
    cartTotal.textContent = 'Total = ' + currencyDisplay.format(totalCostOfItemInCart);
}

calculateCartTotal()
// Function to increase the quantity of the item
function updateProductLikeness(id) {
    cart_items.forEach((item) => {
        if (item.productID === id && item.like === false) {
            item.like = true;
        } else if (item.productID === id && item.like === true) {
            item.like = false;
        }
    })
    displayCartItems();
}

proceedToCheckout.addEventListener('click', proceedToCheck);

function proceedToCheck(params) {
    console.log(cart_items, totalCostOfItemInCart);
}





// console.log(displayCartItems(cart_items));

// cart_cotainer.innerHTML = displayCartItems(cart_items)


// products.map(item => ).join("");

