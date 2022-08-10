// import {navbar} from "../component/navbar.js "
// import {footer} from "../component/footer.js"

// let navMain=document.getElementById("navMain")
// navMain.innerHTML=navbar()

// let footerMain=document.getElementById("footerMain")
// footerMain.innerHTML=footer()
import {navtop,main_navbaar,NEW_NAVTOP,getData,show_uersIn_nav} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div")
navtopelimet.innerHTML = NEW_NAVTOP();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
//footer
import {footer} from "../components/footer.js"
let footerEliment = document.getElementById("hp13");
footerEliment.innerHTML = footer();
let cartArr=JSON.parse(localStorage.getItem("Cart"))||[]
console.log(cartArr)
let listProductsDiv=document.getElementById("listCartProducts")
displayCartObj(cartArr,listProductsDiv)

function displayCartObj(cartArr,parentNode){
    parentNode.innerHTML=""
    cartArr.forEach((elem,index) => {
        let oneProduct=document.createElement("div")
        oneProduct.id="oneProduct"

        let productDetailDiv=document.createElement("div")
        productDetailDiv.id="productDetailDiv"

        let imgCounterDiv=document.createElement("div")
        imgCounterDiv.id="imgCounterDiv"
        let itemImg=document.createElement("img")
        itemImg.id="itemImg"
        itemImg.src=elem.imglink
        let counterDiv=document.createElement("div")
        counterDiv.id="counterDiv"
        let subtractItemCount=document.createElement("div")
        subtractItemCount.id="subtractItemCount"
        subtractItemCount.innerText="-"
        let displayItemCount=document.createElement("div")
        displayItemCount.id="displayItemCount"
        displayItemCount.innerText=elem.itemCount
        let addItemCount=document.createElement("div")
        addItemCount.id="addItemCount"
        addItemCount.innerText="+"

        counterDiv.append(subtractItemCount,displayItemCount,addItemCount)
        imgCounterDiv.append(itemImg,counterDiv)

        let nameMrpDiv=document.createElement("div")
        nameMrpDiv.id="nameMrpDiv"
        let nameIdDiv=document.createElement("div")
        nameIdDiv.id="nameIdDiv"
        let itemName=document.createElement("div")
        itemName.id="itemName"
        itemName.innerText=elem.name
        let itemId=document.createElement("div")
        itemId.id="itemId"
        itemId.innerText=elem.id
        nameIdDiv.append(itemName,itemId)

        let mrpDeliveryDiv=document.createElement("div")
        mrpDeliveryDiv.id="mrpDeliveryDiv"

        let offerPriceCart=document.createElement("h3")
        offerPriceCart.id="offerPriceCart"
        offerPriceCart.innerText=`Rs.${elem.dealprice}`

        let p1=document.createElement("p")
        p1.innerText="M.R.P.:"
        let mrpCart=document.createElement("span")
        mrpCart.innerText=`Rs.${elem.MRP}`
        mrpCart.id="mrpCart"
        p1.append(mrpCart)
        // p1.innerText="(inclusive of all taxes)"

        let p2=document.createElement("p")
        p2.innerText="You save: "
        let discountCart=document.createElement("span")
        discountCart.id="discountCart"
        discountCart.textContent=`${Math.round(((elem.MRP-elem.dealprice)/elem.MRP)*100)}%`
        let weSave=document.createElement("span")
        weSave.id="weSave"
        weSave.innerText=`  (Rs.${elem.MRP-elem.dealprice})`
        p2.append(discountCart,weSave)

        let p3=document.createElement("p")
        p3.innerText="Free Shipping"
        let p4=document.createElement("p")
        p4.innerText="Standard Delivery: 10 Aug (Wed)-12 Aug (Fri)"
        let p5=document.createElement("p")
        p5.innerText="*Delivery assurance is subject to our delivery locations staying open as per govt. regulations"
        mrpDeliveryDiv.append(offerPriceCart,p1,p2,p3,p4,p5)

        nameMrpDiv.append(nameIdDiv,mrpDeliveryDiv)
        productDetailDiv.append(imgCounterDiv,nameMrpDiv)

        let productRemoveDiv=document.createElement("div")
        productRemoveDiv.id="productRemoveDiv"
        let removeProduct=document.createElement("div")
        removeProduct.id="removeProduct"
        removeProduct.innerText="Remove"
        let wishlistProduct=document.createElement("div")
        wishlistProduct.id="wishlistProduct"
        wishlistProduct.innerText="Add to wishlist"
        productRemoveDiv.append(removeProduct,wishlistProduct)
       
        oneProduct.append(productDetailDiv,productRemoveDiv)

        addItemCount.addEventListener("click",function(){incItemCount(elem.id)})
        subtractItemCount.addEventListener("click",function(){decItemCount(elem.id)})
        removeProduct.addEventListener("click",function(){removeProductFromCart(index)})
    
         parentNode.append(oneProduct)

    });
}
function incItemCount(id){
    console.log("id="+id) 
    cartArr.forEach(ele => {
        if(ele.id==id){
            ele.itemCount++
            console.log(ele.itemCount)
        }
    });
    window.addEventListener("load",displayCartObj(cartArr,listProductsDiv),calculateTotal())
}
function decItemCount(id){
    console.log("id="+id)
    cartArr.forEach(ele => {
        if(ele.id==id){
            ele.itemCount--
            console.log(ele.itemCount)
        }
    });
   window,addEventListener("load",displayCartObj(cartArr,listProductsDiv),calculateTotal())  
}
function removeProductFromCart(index){
   cartArr.splice(index,1)
   localStorage.setItem("Cart",JSON.stringify(cartArr))
   window.addEventListener("load",displayCartObj(cartArr,listProductsDiv),calculateTotal())  
}
  

let checkoutCart=document.getElementById("checkout")
checkoutCart.addEventListener("click",moveToCheckoutCart)

function moveToCheckoutCart(){
    let loginData = JSON.parse(localStorage.getItem("usersData"))||{};
    let cartArr=JSON.parse(localStorage.getItem("Cart"))||[]
    if(loginData.name){
        if(cartArr.length>0){
          location.href="checkoutCart.html"
        }
   }else{
      location.href = "login_signup.html"
   }
}
calculateTotal()
function calculateTotal(){
    let itemCount=0
    let total = cartArr.reduce(function(acc,curr){
        itemCount++
            return acc+(curr.dealprice*curr.itemCount)
    },0)
    
    displayTotal(total,itemCount)
    
}

function displayTotal(total,itemCount){
     let priceHtml=`
     <div id="coupon">
    <input type="text" placeholder="Coupon Code">
    <label for="">Apply</label>
  </div>
  <div id="priceDetail">
      <h3>Price Details</h3>
      <div id="totalPriceDiv">
          <p>Price (<span id="totalItemType">${itemCount}</span> items)</p><span id="totalPrizeCart">Rs.${total}</span>
      </div>
      <p id="deliveryCharges">Deliver Charges</p><span id="deliveryPrizeCart">Free</span>
  </div>
  <hr id="checkoutLine">
  <div id="amountPayable">
      <h3>Amount Payable</h3><span id="totalPrizeCart">Rs.${total}</span>
  </div>`

  let couponAmountDiv=document.getElementById("couponAmountDiv")
  couponAmountDiv.innerHTML=priceHtml

  let totalItem_pincode_html=`
  <div id="myCart">My Cart (<span id="totalItemType">${itemCount} </span>items)</div>
  <dic id="sippingTo">Sipping to: <span id="myPincode">400001</span></dic>`

  let totalInCart=document.getElementById("totalInCart")
  totalInCart.innerHTML=totalItem_pincode_html
}
document.getElementById("nav_cart_item").style.display= "none"