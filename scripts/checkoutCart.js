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

let ordershow = document.getElementById('displayBuyingProductDiv');
let order_product = document.getElementById('viewTotalAmount');
let total_detail = document.getElementById('viewTotalAmont_ProceedToPaymentDiv');
let flag2 = false;
ordershow.addEventListener('click',()=>{
 
    if(flag2 == false){
        order_product.style.display ="block"
        total_detail.style.display = "flex";
        flag2 = true;
    }else{
        order_product.style.display ="none"
        total_detail.style.display = "none";
        flag2 = false;
    }





})








let cartArr=JSON.parse(localStorage.getItem("Cart"))||[]

let user_data = JSON.parse(localStorage.getItem("usersData"))||[];
// adress box-------------------------------------------->


let viewTotalAmount=document.getElementById("viewTotalAmount")
let displayAdrress_pincodeHere=document.getElementById("displayAdrress_pincodeHere")
let flag=true
let chooseShippingAddress=document.getElementById("deliveryMethodBox")
const displayDeliveryOptions = ()=>{
    let chooseShippingAddress = document.getElementById("chooseShippingAddress");
    let shipping_picode_clickDiv = document.getElementById("shipping_picode_clickDiv");
    chooseShippingAddress.innerText = `SHIPPING ADDRESS : ${user_data.address}`
    shipping_picode_clickDiv.style.display = "block"
}
chooseShippingAddress.addEventListener("click",function(){displayDeliveryOptions()})
// let choosePickupStore=document.getElementById("choosePickupStore")
// choosePickupStore.addEventListener("click",function(){displayDeliveryOptions(flag=false,displayAdrress_pincodeHere)})



// display Cart -------------------------------------------->

displayCartProducts(cartArr,viewTotalAmount)

function displayCartProducts(cartArr,parentNode){
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
    window.addEventListener("load",displayCartProducts(cartArr,viewTotalAmount),calculateTotal())
}
function decItemCount(id){
    console.log("id="+id)
    cartArr.forEach(ele => {
        if(ele.id==id){
            ele.itemCount--
            console.log(ele.itemCount)
        }
    });
   window.addEventListener("load",displayCartProducts(cartArr,viewTotalAmount),calculateTotal())  
}
function removeProductFromCart(index){
   cartArr.splice(index,1)
   localStorage.setItem("Cart",JSON.stringify(cartArr))
   window.addEventListener("load",displayCartProducts(cartArr,viewTotalAmount),calculateTotal())  
}
  
  

// display total amount------------------------------------------------------------>

function displayTotal(total,itemCount,parentDiv){
    parentDiv.innerHTML=""
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
  </div>
  <div id="proceedToPaymentBtn">
  <h3>Proceed To Payment</h3>
 </div>
  `
    parentDiv.innerHTML=priceHtml
    
    let paymentOptionDiv=document.getElementById("paymentOptionDiv")
   let proceedToPaymentBtn=document.getElementById("proceedToPaymentBtn")
   proceedToPaymentBtn.addEventListener("click",function(){displayPaymentMethods(total,paymentOptionDiv)})

    
}


function calculateTotal(){
    let itemCount=0
    let total = cartArr.reduce(function(acc,curr){
        itemCount++
            return acc+(curr.dealprice*curr.itemCount)
    },0)

    let divContainAmount=document.getElementById("divContainAmount")

    displayTotal(total,itemCount,divContainAmount)
    
}
calculateTotal()

// calcute total over ---------------------------------------------------------------------------->




// function displayPaymentMethods(total,parentDiv){
//     let div = document.createElement("div")
//     let h3 = document.createElement("h3");
//     h3.innerText = "PAY SECURELY"
//     let paymentOptionDivHtml=`<div id="upi">
//  <div id="">UPI</div>
//  <div id="">Debit Card</div>
//  <div id="">Credit Card</div>
// </div>
// <div id="displayUpi">
//  <div id="upiPayment">UPI Payment</div>
//  <div id="upiDetail">
//      <p>*Clicking on “Pay” will take you to a secure payment gateway where you can enter the UPI Id 
// and make your payment. Your order will not be completed without this action</p>
//      <input type="checkbox">
//      <label for="" id="terms">I agree to the Terms & Conditions</label>
//      <div id="payAmountBtn">Pay Amount- Rs.${total}</div>
//  </div>
// </div>
//     `
//     div.innerHTML = paymentOptionDivHtml
//     parentDiv.append(h3,div);

    
// let payAmountBtn=document.getElementById("payAmountBtn")
// console.log(payAmountBtn)
// payAmountBtn.addEventListener("click",alert_myOrdersPostRequestFunction)
// }
function displayPaymentMethods(total,parentDiv){
    let paymentOptionDivHtml=`
 <div id="paySecurely">
    <h3>PAY SECURELY</h3>
    <div id="upiParentDiv">
     <div id="upi">
       <div id="">UPI</div>
       <div id="">Debit Card</div>
       <div id="">Credit Card</div>
       <div id="">Net Banking</div>
       <div id="">Wallet</div>
       <div id="">Buy Now Pay Later</div>
     </div>
     <div id="displayUpi">
       <div id="upiPayment">UPI Payment</div>
       <div id="upiDetail">
          <p>*Clicking on “Pay” will take you to a secure payment gateway where you can enter the UPI Id 
          and make your payment. Your order will not be completed without this action</p>
          <div id="checkbox_terms">
             <input type="checkbox" id="checkbox">
             <label for="" id="terms">I agree to the Terms & Conditions</label>
          </div>
          <div id="payAmountBtn">Pay Amount- Rs.${total}</div>
        </div>
     </div>
    </div>
 </div>

    `
    total_detail.style.display = "flex"
  order_product.style.display ="block"
    parentDiv.innerHTML=paymentOptionDivHtml

    
let payAmountBtn=document.getElementById("payAmountBtn")
console.log(payAmountBtn)
payAmountBtn.addEventListener("click",alert_myOrdersPostRequestFunction)
}
const PostoredrData = async()=>{
   try {
      let loginData = JSON.parse(localStorage.getItem("usersData"))||{};
      for(var i = 0; i<cartArr.length; i++){
         loginData.order.push(cartArr[i]);
      }
      let obj = {
        name:loginData.name,
        email:loginData.email,
        mobile:loginData.mobile,
        city:loginData.city,
        order:loginData.order,
        address:loginData.address
     }
     let url = `http://localhost:3000/profile/${loginData.id}`
     let postData = await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(obj),
        headers:{'content-type': 'application/json',}
     })

   } catch (error) {
     console.log(error)
   }
}
const DeleteData = async()=>{
    try {
        let loginData = JSON.parse(localStorage.getItem("usersData"))||{};
        let url = `http://localhost:3000/profile/${loginData.id}`
         let res = await fetch(url,{
           method:"delete"
        })
    } catch (error) {
        
    }
}
function alert_myOrdersPostRequestFunction(){
    PostoredrData();
    localStorage.setItem("Cart",JSON.stringify([]));
    alert("Order Placed Successfully")
    location.href = "homePage.html"
}
document.getElementById("nav_cart_item").style.display= "none"






















