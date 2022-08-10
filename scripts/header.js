
// for mobile and application carosal iffect
document.getElementById("ctegry_list_mobile").addEventListener("mouseenter",()=>{
    document.getElementById("nav_mobiles").style.display = "flex";
    document.getElementById("ctegry_list_mobile").style.background = "#e42529"
})
document.getElementById("ctegry_list_mobile").addEventListener("mouseleave",()=>{
    document.getElementById("nav_mobiles").style.display = "none";
    document.getElementById("ctegry_list_mobile").style.background = "#003380"
})

// telivision carosal effect
document.getElementById("ctegry_list_telivision").addEventListener("mouseenter",()=>{
    document.getElementById("nav_TELEVISIONS").style.display = "flex";
    document.getElementById("ctegry_list_telivision").style.background = "#e42529"
})
document.getElementById("ctegry_list_telivision").addEventListener("mouseleave",()=>{
    document.getElementById("nav_TELEVISIONS").style.display = "none";
    document.getElementById("ctegry_list_telivision").style.background = "#003380"
})
// sound and speekers carosal iffect
document.getElementById("ctegry_list_HEADPHONES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_HEADPHONES").style.display = "flex";
    document.getElementById("ctegry_list_HEADPHONES").style.background = "#e42529"
})
document.getElementById("ctegry_list_HEADPHONES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_HEADPHONES").style.display = "none";
    document.getElementById("ctegry_list_HEADPHONES").style.background = "#003380"
})

//home application carosal iffect
document.getElementById("ctegry_list_APPLIANCES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_APPLIANCES").style.display = "flex";
    document.getElementById("ctegry_list_APPLIANCES").style.background = "#e42529"
})
document.getElementById("ctegry_list_APPLIANCES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_APPLIANCES").style.display = "none";
    document.getElementById("ctegry_list_APPLIANCES").style.background = "#003380"
})
//computers carosal iffect

document.getElementById("ctegry_list_COMPUTERS").addEventListener("mouseenter",()=>{
    document.getElementById("nav_COMPUTERS").style.display = "flex";
    document.getElementById("ctegry_list_COMPUTERS").style.background = "#e42529"
})
document.getElementById("ctegry_list_COMPUTERS").addEventListener("mouseleave",()=>{
    document.getElementById("nav_COMPUTERS").style.display = "none";
    document.getElementById("ctegry_list_COMPUTERS").style.background = "#003380"
})
// camra carosal iffect
document.getElementById("ctegry_list_CAMERAS").addEventListener("mouseenter",()=>{
    document.getElementById("nav_CAMERAS").style.display = "flex";
    document.getElementById("ctegry_list_CAMERAS").style.background = "#e42529"
})
document.getElementById("ctegry_list_CAMERAS").addEventListener("mouseleave",()=>{
    document.getElementById("nav_CAMERAS").style.display = "none";
    document.getElementById("ctegry_list_CAMERAS").style.background = "#003380"
})
// kitchen carosal iffect
document.getElementById("ctegry_list_KITCHEN").addEventListener("mouseenter",()=>{
    document.getElementById("nav_KITCHEN").style.display = "flex";
    document.getElementById("ctegry_list_KITCHEN").style.background = "#e42529"
})
document.getElementById("ctegry_list_KITCHEN").addEventListener("mouseleave",()=>{
    document.getElementById("nav_KITCHEN").style.display = "none";
    document.getElementById("ctegry_list_KITCHEN").style.background = "#003380"
})

//personal care carosal iffect
document.getElementById("ctegry_list_PERSONAL").addEventListener("mouseenter",()=>{
    document.getElementById("nav_PERSONAL").style.display = "flex";
    document.getElementById("ctegry_list_PERSONAL").style.background = "#e42529"
})
document.getElementById("ctegry_list_PERSONAL").addEventListener("mouseleave",()=>{
    document.getElementById("nav_PERSONAL").style.display = "none";
    document.getElementById("ctegry_list_PERSONAL").style.background = "#003380"
})
//ctegry_list_ACCESSORIES
document.getElementById("ctegry_list_ACCESSORIES").addEventListener("mouseenter",()=>{
    document.getElementById("nav_ACCESSORIES").style.display = "flex";
    document.getElementById("ctegry_list_ACCESSORIES").style.background = "#e42529"
})
document.getElementById("ctegry_list_ACCESSORIES").addEventListener("mouseleave",()=>{
    document.getElementById("nav_ACCESSORIES").style.display = "none";
    document.getElementById("ctegry_list_ACCESSORIES").style.background = "#003380"
})
//small sreen
localStorage.setItem("num",0);
document.getElementById("lishtshowbaar").onclick = ()=>{
    let num = localStorage.getItem("num");
    if(num == 0){
        document.getElementById("ctegry_list").style.display = "flex";
        localStorage.setItem("num",1);
    }
    if(num == 1){
        document.getElementById("ctegry_list").style.display = "none";
        localStorage.setItem("num",0);
    }
}
///login signup check
const show_uersIn_nav = (user)=>{
    let pincodeElimnet = document.getElementById("register_pincode");
    pincodeElimnet.innerText = `Deliver to ${user.city}` 
    let signup_login_On_naveliment = document.getElementById("signup_login_On_nav");
    signup_login_On_naveliment.style.display = "none"
    let home_page_user_name_textEliment = document.getElementById("home_page_user_name_text");
    let home_page_user_name_eliment = document.getElementById("home_page_user_name");
    home_page_user_name_eliment.style.display = "block"
    home_page_user_name_textEliment.innerText = user.name
}
let loginData = JSON.parse(localStorage.getItem("usersData"))||{};
if(loginData.name){
    show_uersIn_nav(loginData);
}else{
    let signup_login_On_naveliment = document.getElementById("signup_login_On_nav");
    signup_login_On_naveliment.style.display = "block"
    let home_page_user_name_eliment = document.getElementById("home_page_user_name");
    home_page_user_name_eliment.style.display = "none"
}
document.getElementById("nav_user_logout_button").addEventListener("click",()=>{
    localStorage.setItem("usersData",JSON.stringify({}));
    location.reload();
})

//cart item show function 

const showCartDataOnNav = (cartData)=>{
    if(cartData.length>0){
        let carttotal = document.getElementById("nav_cart_item_total");
        carttotal.innerText = cartData.length;
        carttotal.style.display = "block";

        let navcart = document.getElementById("nav_cart_item_show");
        navcart.innerHTML = "";
        cartData.forEach((element,index,arr) => {

            //emage eliment
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = element.img1;

            let nanmeh4 = document.createElement("h4");
            nanmeh4.innerText = element.name
            let priceelimet = document.createElement("h3");
            priceelimet.innerText = `₹${element.dealprice}`
            let quantity = document.createElement("h6");
            quantity.innerText = `Qty : ${element.itemCount}`
            let button = document.createElement("button");
            button.innerText = "Remove"
            let imgDiv = document.createElement("div");
            imgDiv.append(img);
            let quantitydiv = document.createElement("div");
            quantitydiv.className = "nav_div_third"
            let removeButton = document.createElement("h6");
            removeButton.append(button);
            quantitydiv.append(quantity,removeButton);
            let name_remove_buuton_div = document.createElement("div");
            name_remove_buuton_div.append(nanmeh4,priceelimet,quantitydiv)
            div.append(imgDiv,name_remove_buuton_div)
            button.addEventListener("click",()=>{
               removeItem_fromCart(element.id,arr);
            })
            navcart.append(div);
        });
  

    }else{
        let carttotal = document.getElementById("nav_cart_item_total");
        document.getElementById("nav_cart_div_first").style.display = "none";
        carttotal.style.display = "none";
    }
}
let cartData = JSON.parse(localStorage.getItem("Cart"))||[];
showCartDataOnNav(cartData);

document.getElementById("nav_cart_item").addEventListener("mouseenter",()=>{
    let cartData = JSON.parse(localStorage.getItem("Cart"))||[];
    if(cartData.length>0){
        document.getElementById("nav_cart_div_first").style.display = "flex";
    }
})
document.getElementById("nav_cart_item").addEventListener("mouseleave",()=>{
    document.getElementById("nav_cart_div_first").style.display = "none";
})

const removeItem_fromCart=(index,arr)=>{
      let splicedArr = arr.filter((ele)=>{
        return index!=ele.id
      })
      localStorage.setItem("Cart",JSON.stringify(splicedArr));
      showCartDataOnNav(splicedArr)
}



//search eliment 
let sercheliment_param = document.getElementById("nav_input");
const goto_serchParm = (e)=>{
    let serch_value = sercheliment_param.value;
    if(e.key=="Enter"){
        if(serch_value=="lg"||serch_value=="Television"||serch_value=="samsung"||serch_value=="tcl"||serch_value=="tv"){
            location.href= "televisionfilter.html";
        }
    }

}
sercheliment_param.addEventListener("keypress",goto_serchParm);
