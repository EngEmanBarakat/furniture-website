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

addToLikeButton.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const productElement = button.closest(".product")  
        const productName = productElement.querySelector("p:nth-child(1)").textContent 
        const productPrice = productElement.querySelector(".Price").textContent
        const productImage = productElement.querySelector("div:nth-child(1)").style.backgroundImage.slice(5,-2)

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


//>>serarh 
//input > key(el 7aga elly bsearch 3nha ) > enter >>redirect >> shop(query) >>
//filter >> data


//da lw 3ndna api
async function fetchProducts(){
    try{
        const res = await fetch()
        return await res.json()
    }
    catch(error){
        console.log(error)
        return []
    }   
}

function displayProduct(products){
    const productList= document.getElementsByClassName("Grid")
    productList.innerHTML= "";
    products.map((item)=>{
        const product = document.createElement("div");
        product.className="Product";
        product.innerHTML = `
        <a class="product" id="1">
                <div>
                    <div style="background-image: url(${item.image});">
                        <img src="photos/Discount 30.png" alt="Discount"
                            style="width:48px; height: 48px; float: right; margin: 5%;">
                    </div>
                    <div>
                        <p>${item.title}</p>
                        <p>Stylish cafe chair</p>
                        <p>${item.price}<span style=" text-decoration:line-through; font-size: 16px; 
                        font-weight: 400; line-height: 24px; margin-left: 4%;">Rp 3.500.000</span></p>
                    </div>
                </div>

                <div class="Soha">
                    <button>Add to Cart</button>
                    <div>
                        <<button>Share</button>
                        <button onclick="ViewProductDetails(1)">View</button>
                            <button>like</button>
                    </div>
                </div>



            </a>

        `
        productList.append(product);
    });


}

function getSearchQuery(){
    
}

