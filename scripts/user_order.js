import {navtop,main_navbaar,NEW_NAVTOP,getData,show_uersIn_nav} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div")
navtopelimet.innerHTML = NEW_NAVTOP();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
//footer
import {footer} from "../components/footer.js"
let footerEliment = document.getElementById("hp13");
footerEliment.innerHTML = footer();

document.getElementById("logout_btn").addEventListener("click",()=>{
    localStorage.setItem("usersData",JSON.stringify({}));
    location.href = "login_signup.html";
})
const showData_now = (arr,parentNode)=>{
    arr.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<img
        src="${element.img1}" 
        alt="">
       <h4>
       ${element.name}
       </h4>
       <h5>Order in Progress</h5>`
       parentNode.append(div)
    });
}
const showUserAllOrder = async(id)=>{
      let data = await getData(`http://localhost:3000/profile?&id=${id}`);
      let orderArr = data[0].order;
      if(orderArr.length>0){
        let user_order_grideliment = document.getElementById("user_order_grid");
        user_order_grideliment.innerHTML = "";
        showData_now(orderArr,user_order_grideliment);
      }

}
const displayData = (user)=>{
    let user_email_DetailsEliment =document.getElementById("user_email_Details");
    let user_name_DetailsEliment = document.getElementById("user_name_Details");
    let user_city_Detailseliment = document.getElementById("user_city_Details");
    let user_add_DetailsEliment = document.getElementById("user_add_Details");
    user_add_DetailsEliment.innerText = `Add. : ${user.address}`

    user_city_Detailseliment.innerText = `City : ${user.city}`
    user_email_DetailsEliment.innerText = `Email : ${user.email}`
    user_name_DetailsEliment.innerText = `Name : ${user.name}`
    showUserAllOrder(user.id);
}
let userdata = JSON.parse(localStorage.getItem("usersData"))||{};
    if(userdata.name&&userdata.email){
       displayData(userdata);
       show_uersIn_nav(userdata)
    }
let htmlfile = `<div>
<img
 src="https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGYwLzk4MjQ0MzUyNzM3NTguanBnfGQ5NzFkOGZkMjQyNjc1YzVkOGYzNGM0YmJjYmY3NTY2MWI0NTZkMTA2NjgwODQxZGEwMmZlNzU1ZjU3ZWZmYjQ" 
 alt="">
<h4>
    HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD
     + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD),
      39.6 cm (15.6 inch)
</h4>
<h3>Order in Progress</h3>
</div>`