//function removeProduct(productId) {
//    window.location.href = `http://127.0.0.1:5500/singleProduct.html?id=${productId}`;
//}

const CartItem=getCartItems();





function getCartItems(){
    return JSON.parse(localStorage.getItem("Cart")) || []
}



function renderCart(){
    let cont =document.getElementsByClassName("Container")[0]
    CartItem.map((item)=>{
        let ProductDiv=document.createElement("div")
        cont.appendChild(ProductDiv)
        ProductDiv.setAttribute("class", "Products")
        ProductDiv.innerHTML=`
                <img src="${item.image}" alt="" style="height: 60%;
                width: 15%;background-color: #F9F1E7;border-radius: 10px; object-fit: contain;">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <p>1</p>
                <p>${item.price}</p>
                <button></button>
            
            `
    })




}
 renderCart();
 let subTotalElement =document.getElementsByClassName("span1")[0]
 let TotalElement =document.getElementsByClassName("span2")[0]


function Prices(){
    let Total=0;
    CartItem.map((item)=>{
        const P = +item.price.replace("Rp","").replace(".","");
        console.log(P);
        Total=Total+P;
})


subTotalElement.textContent =Total;
TotalElement.textContent =Total;





}
Prices();


