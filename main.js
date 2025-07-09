//add to cart :button , counter , local storage

let Cart=[]
let Like=[]


let addToCartButton= document.querySelectorAll(".Soha>button") //msh targeting only button
let addToLikeButton= document.querySelectorAll(".Soha>div:first-of-type>button:nth-child(3)") //msh targeting only button

let CartCountElement =document.getElementById("cart-count")
let LikeCountElement =document.getElementById("Like-count")


//prepare local storge
document.addEventListener("DOMContentLoaded",()=>{
    const savedCart = JSON.parse(localStorage.getItem("Cart")) || [] 
    Cart = savedCart
    UpdateCartCount()
})


document.addEventListener("DOMContentLoaded",()=>{
    const savedLike = JSON.parse(localStorage.getItem("Like")) || [] 
    Like = savedLike
    UpdateLikeCount()
})



addToCartButton.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".product")  
        const productName = productElement.querySelector("p:nth-child(1)").textContent 
        const productPrice = productElement.querySelector(".Price").textContent
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(1)").style.backgroundImage.slice(5,-2)

            Cart.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Cart" , JSON.stringify(Cart))
            UpdateCartCount()
    })
})



addToLikeButton.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".product")  
        const productName = productElement.querySelector("p:nth-child(1)").textContent 
        const productPrice = productElement.querySelector(".Price").textContent
        const productImage = productElement.querySelector("div:nth-child(1)>div:nth-child(1)").style.backgroundImage.slice(5,-2)

            Like.push({
                name :productName,
                price : productPrice,
                image :productImage

            })
            localStorage.setItem("Like" , JSON.stringify(Like))
            UpdateLikeCount()
    })
})

function UpdateCartCount(){
    CartCountElement.textContent =Cart.length
    CartCountElement.style.display = Cart.length > 0 ?"block" : "none"
}

function UpdateLikeCount(){
    LikeCountElement.textContent =Like.length
    LikeCountElement.style.display = Like.length > 0 ?"block" : "none"
    
}


function ViewProductDetails (productId){
    window.location.href =`http://127.0.0.1:5500/singleProduct.html?id=${productId}`
}

