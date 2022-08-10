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
})

const displyData = (user)=>{
    let user_email_DetailsEliment =document.getElementById("user_email_Details");
    let user_name_DetailsEliment = document.getElementById("user_name_Details");
    let user_city_Detailseliment = document.getElementById("user_city_Details");
    let user_add_DetailsEliment = document.getElementById("user_add_Details");
    user_city_Detailseliment.innerText = `City : ${user.city}`
    user_email_DetailsEliment.innerText = `Email : ${user.email}`
    user_name_DetailsEliment.innerText = `Name : ${user.name}`
    user_add_DetailsEliment.innerText = `Add. : ${user.address}`

    let user_name_profilePageEliment = document.getElementById("user_name_profilePage");
    user_name_profilePageEliment.innerText = user.name
    let user_email_profilepageEliment = document.getElementById("user_email_profilepage");
    user_email_profilepageEliment.innerText = user.email;

}

setInterval(()=>{
    let userdata = JSON.parse(localStorage.getItem("usersData"))||{};
    if(userdata.name&&userdata.email){
       displyData(userdata);
       show_uersIn_nav(userdata);
    }
    else{
        location.href = "login_signup.html";
    }
},300)