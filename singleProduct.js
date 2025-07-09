let Cart = [];
let Like = [];

// Select elements correctly
let addToCartButtons1 = document.querySelectorAll(".Soha>button");
let addToCartButtons2 = document.querySelectorAll(".Add");

let addToLikeButtons1 = document.querySelectorAll(".Soha > div:first-of-type > button:nth-child(3)");
let addToLikeButtons2 = document.querySelectorAll(".Like");

let CartCountElement = document.getElementById("cart-count");
let LikeCountElement = document.getElementById("Like-count");

let PlusButton = document.querySelectorAll(".Plus");
let MinusButton = document.querySelectorAll(".Minus");
let QuantityElement = document.querySelectorAll("Quantity");


// Load cart and like data from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
    Cart = savedCart;
    UpdateCartCount();

    const savedLike = JSON.parse(localStorage.getItem("Like")) || [];
    Like = savedLike;
    UpdateLikeCount();


});





addToCartButtons1.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".product")  
        const productName = productElement.querySelector("p:nth-child(1)").textContent;
        const productPrice = productElement.querySelector(".Price").textContent
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(1)").style.backgroundImage.slice(5, -2);

            Cart.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Cart" , JSON.stringify(Cart))
            UpdateCartCount()
    })
})

addToCartButtons2.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".Sec-1")  
        const productName = productElement.querySelector("h2").textContent;
        const productPrice = productElement.querySelector("h3").textContent
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(2)>img").src;

            Cart.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Cart" , JSON.stringify(Cart))
            UpdateCartCount()
    })
})


addToLikeButtons1.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".product")  
        const productName = productElement.querySelector("p:nth-child(1)").textContent;
        const productPrice = productElement.querySelector(".Price").textContent
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(1)").style.backgroundImage.slice(5, -2);

            Like.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Like" , JSON.stringify(Like))
            UpdateLikeCount()
    })
})

addToLikeButtons2.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".Sec-1")  
        const productName = productElement.querySelector("h2").textContent;
        const productPrice = productElement.querySelector("h3").textContent;
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(2)>img").src;

            Like.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Like" , JSON.stringify(Like))
            UpdateLikeCount()
    })
})



// Update the cart count
function UpdateCartCount() {
    CartCountElement.textContent = Cart.length;
    CartCountElement.style.display = Cart.length > 0 ? "block" : "none";
}

// Update the like count
function UpdateLikeCount() {
    LikeCountElement.textContent = Like.length;
    LikeCountElement.style.display = Like.length > 0 ? "block" : "none";
}

// Function to view product details
function ViewProductDetails(productId) {
    window.location.href = `http://127.0.0.1:5500/singleProduct.html?id=${productId}`;
}

// Retrieve product details
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Fake data for product details
const Products = {
    "1": { name: 'Syltherine', price: "Rp 2.500.000", image: "photos/image 1.png" },
    "2": { name: "Syltherine", price: "Rp 2.500.000", image: "photos/image 2.webp" },
    "3": { name: 'Lolito', price: "Rp 7.000.000", image: "photos/image 3.png" },
    "4": { name: "Lolito", price: "Rp 9.000.000", image: "photos/image 4.png" },
    "5": { name: 'Grifo', price: "Rp 1.500.000", image: "photos/image 5.png" },
    "6": { name: "Muggo", price: "Rp 150.000", image: "photos/image 6.png" },
    "7": { name: 'Pingky', price: "Rp 7.000.000", image: "photos/image 7.png" },
    "8": { name: "Potty", price: "Rp 500.000", image: "photos/image 8.png" },
    "9": { name: 'Syltherine', price: "Rp 2.500.000", image: "photos/image 1.png" },
    "10": { name: "Syltherine", price: "Rp 2.500.000", image: "photos/image 2.webp" }
};

// Display product details if available
if (Products[productId]) {
    document.querySelector(".item > h2").innerHTML = Products[productId].name;
    document.querySelector(".item > h3").innerHTML = Products[productId].price;
    document.querySelector(".sora>img").src= Products[productId].image;
}

