import { telgetData } from '../components/telgetData.js';
import { footer } from "../components/footer.js";
import {main_navbaar,NEW_NAVTOP} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div").innerHTML = NEW_NAVTOP();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
let hp13=document.querySelector("#hp13");
hp13.innerHTML="";
hp13.innerHTML=footer();

let telImg = ["https://www.reliancedigital.in/medias/RD-CLP-Sansui-TV-banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTI1MXxpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDFkLzk4NTgyMjg4NDY2MjIuanBnfDBiNmU0Y2RkZjgwNjM3ZmFmYWZjNDEzNzE0MmQ5ZGZlNjIxMjJmNGY5YzZkYTZjY2VjODVkMTRjMTY2NTVmZGI",
"https://www.reliancedigital.in/medias/LG-RD-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDg4L2g1ZC85ODU3NjQ2NTU5MjYyLmpwZ3w1NWNmZWVmOGI4YmY5NDc0ZWMwMGM2Y2Q4MDFmM2RlNzI4NzRlYjBmMjA3MmNhZjQ5YmEwMGVlYTdhYmIwZTdk",
"https://www.reliancedigital.in/medias/TV-new-Launches-D-CLP-Banner-01.07.jpg?context=bWFzdGVyfGltYWdlc3wxNDkzODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYyL2g2Zi85ODU3NjQ5MTQ3OTM0LmpwZ3xlM2QxYmNhMmY2MjU2YjA0ZWRmNTAwMzIzNGRlYzg5ZDA0YzIyM2QxOTJjNWU5ZTc4ODA0OTVjNzhjY2U4ZjAz",
"https://www.reliancedigital.in/medias/RD-website-banners-Website-version-1365-X-260-px-TV.png?context=bWFzdGVyfGltYWdlc3wxMzQ1MTF8aW1hZ2UvcG5nfGltYWdlcy9oMDEvaDNhLzk4NjI0NjcxNTgwNDYucG5nfGNmMDhkNjFlZTNkYzczNDgxZjBjMmIyMmUzMjRiMjBkMmY2ZDkwYTAwNDBlZjhhZDc3NzMzZWEzMmU1ZmZhZjA",
"https://www.reliancedigital.in/medias/Hisense-TV-CLP-Banner-20-07-2022-01.jpg?context=bWFzdGVyfGltYWdlc3wxNjIwNjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2hhMi85ODYzNDEzMjM1NzQyLmpwZ3w1MDY3NGRhMzUwMWYzNDAxZGM5MjA5NTI0YjljNzRhMmM2MjI4MzBjY2QxMDQwYWFhYjM0ZGQ4NDg1NDVjZjY4",
"https://www.reliancedigital.in/medias/Soundbar-D-CLP-Banner-27.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjA0ODN8aW1hZ2UvanBlZ3xpbWFnZXMvaGExL2hkMC85ODY2Njk0MTY0NTEwLmpwZ3xmZGI3Nzk5YWNkNGY5ZmE5NDNlNWQwMDJiM2NiYzcwY2IzNmRkY2RkMTE1YjdkMGVmZGUzODViMzU3MDBmNTBk",
]

let detail = document.getElementById('all_teldetails');
let page2 = document.querySelector('.sec_page');
let page1 = document.querySelector('.first_page');

let tel = document.querySelector(".tel_img");
let x = 0;
setInterval(() => {
  tel.src = telImg[x];
 
  if (x == 5) {
    x = 0;
  }
  x++;

}, 3000);




let displayTeldata = (data) => {
  detail.innerText = "";
  data.map((res) => {
    let mdiv = document.createElement('div');
   
    let div = document.createElement('div');
    div.addEventListener('click',()=>{
      
      let obj = {
        productKey:"television",
        productId : res.id

      }
      localStorage.setItem('product',JSON.stringify(obj));
      location.href = "../pages/telDetails.html";
    });
    let img = document.createElement('img');
    img.src = res.imglink;
    let title = document.createElement('p');
    title.innerText = res.name;

    let div1 = document.createElement('div');
    div1.setAttribute("id", "price");

    let deal_price = document.createElement('p');
    deal_price.innerText = res.dealpricex + ".00";

    let mrp = document.createElement('p');
    mrp.innerText = res.MRPx + ".00";

    let disc = document.createElement('p');
    disc.innerText = res.discountx + "(" + res.savepricex + ")";

    let div2 = document.createElement('div');

    let offer = document.createElement('p');
    offer.innerText = "OFFERS AVAILABLE"
    let cash = document.createElement('p');
    cash.style.display = "none";
    if (res.cashback == "yes") {
      cash.style.display = "block";
      cash.innerText = "CASHBACK"
    }
    div2.append(offer, cash);

    let div3 = document.createElement('div');
    let subdiv = document.createElement('div');
    let compbox = document.createElement('input');
    compbox.type = "checkbox";
    compbox.style.width = "40px";
    compbox.style.height = "18px"
    let comp = document.createElement('p');
    comp.innerText = "Compare";
    comp.style.cursor = "pointer";

    subdiv.append(compbox, comp);
    let subdiv1 = document.createElement('div');
    let swish = document.createElement('p');
    swish.innerHTML = "&#129293;";
    swish.style.width = "20px";
    swish.style.fontSize = "18px"
    let wish = document.createElement('p');
    wish.innerText = "Wishlist"
    subdiv1.append(swish, wish);

    div3.append(subdiv, subdiv1)

    div1.append(deal_price, mrp, disc);
    div.append(img, title, div1, div2);
    mdiv.append(div, div3);
    detail.append(mdiv);

  })

}


// <-------brand --------->
// <----brans search---------->
let searchShow = () => {
  let brand = document.querySelector('.filter_brand_upper');

}

let brandserch = document.querySelector('.brand_search_icon');
brandserch.addEventListener('click', searchShow);

// <----------brand more /less------->

let hidden_brand = document.querySelector('.hidden_brand');
let seemore_brand = document.querySelector('.brand_more');
let seeless_brand = document.querySelector('.brand_hidden')


let showMore = () => {
  hidden_brand.style.display = "block";
  seemore_brand.style.display = "none"
}
let hiddenMore = () => {
  hidden_brand.style.display = "none";
  seemore_brand.style.display = "block";
}

seemore_brand.addEventListener('click', showMore);
seeless_brand.addEventListener('click', hiddenMore);
// <-------brand end-------->


// <------discount------------------>

let hidden_disc = document.querySelector('.hidden_discount');
let seemore_disc = document.querySelector('.seemore_discount');
let seeless_disc = document.querySelector('.seeless_discount');


let showMoredisc = () => {
  hidden_disc.style.display = "block";
  seemore_disc.style.display = "none"
}
let hiddenMoredisc = () => {
  hidden_disc.style.display = "none";
  seemore_disc.style.display = "block";
}

seemore_disc.addEventListener('click', showMoredisc);
seeless_disc.addEventListener('click', hiddenMoredisc);

// <-----discount end------>

// <----feature----------->

let click_feature = document.querySelector('.click_feature');
let seemore_feature = document.querySelector('.seemore_feature');
let seeless_feature = document.querySelector('.seeless_feature');
let hidden_feature = document.querySelector('.hidden_feature');
let feature_view = document.querySelector('.feature_view');
let feature_down = document.querySelector('.feature_down');
let flag = false;

let showMorefec = () => {
  hidden_feature.style.display = "block";
  seemore_feature.style.display = "none";
}
let hiddenMorefec = () => {
  hidden_feature.style.display = "none";
  seemore_feature.style.display = "block";
}

let showClick = () => {
  if (flag == false) {
    feature_view.style.display = "block";
    seemore_feature.style.display = "block";
    let current_rotation = -180;
    feature_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag = true;
  } else {
    feature_view.style.display = "none";
    let current_rotation = 0;
    feature_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    hidden_feature.style.display = "none";
    flag = false;
  }


}
seemore_feature.addEventListener('click', showMorefec);
seeless_feature.addEventListener('click', hiddenMorefec);
click_feature.addEventListener('click', showClick);


// <-----end feature----------->

// <-----------------Operating System----------------->


let click_tvops = document.querySelector('.click_tvops');
let seemore_tvops = document.querySelector('.seemore_tvops');
let seeless_tvops = document.querySelector('.seeless_tvops');
let hidden_tvops = document.querySelector('.hidden_tvops');
let tvops_view = document.querySelector('.tvops_view');
let tvops_down = document.querySelector('.tvops_down');
let flag1 = false;

let showMoretvops = () => {
  hidden_tvops.style.display = "block";
  seemore_tvops.style.display = "none"
}
let hiddenMoretvops = () => {
  hidden_tvops.style.display = "none";
  seemore_tvops.style.display = "block";
}

let showClicktvops = () => {
  if (flag1 == false) {
    tvops_view.style.display = "block";
    seemore_tvops.style.display = "block";
    let current_rotation = -180;
    tvops_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag1 = true;
  } else {
    tvops_view.style.display = "none";
    hidden_tvops.style.display = "none";
    let current_rotation = 0;
    tvops_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag1 = false;
  }


}
seemore_tvops.addEventListener('click', showMoretvops);
seeless_tvops.addEventListener('click', hiddenMoretvops);
click_tvops.addEventListener('click', showClicktvops);

// <------------------tv operating System end------------->



// <---------------HDMI no--------------->

let click_HDMI = document.querySelector('.click_HDMI');
let seemore_HDMI = document.querySelector('.seemore_HDMI');
let seeless_HDMI = document.querySelector('.seeless_HDMI');
let hidden_HDMI = document.querySelector('.hidden_HDMI');
let HDMI_view = document.querySelector('.HDMI_view');
let HDMI_down = document.querySelector('.HDMI_down');
let flag2 = false;

let showMoreHDMI = () => {
  hidden_HDMI.style.display = "block";
  seemore_HDMI.style.display = "none"
}
let hiddenMoreHDMI = () => {
  hidden_HDMI.style.display = "none";
  seemore_HDMI.style.display = "block";
}

let showClickHDMI = () => {
  if (flag2 == false) {
    HDMI_view.style.display = "block";
    seemore_HDMI.style.display = "block";
    let current_rotation = -180;
    HDMI_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag2 = true;
  } else {
    HDMI_view.style.display = "none";
    hidden_HDMI.style.display = "none";
    let current_rotation = 0;
    HDMI_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag2 = false;
  }


}
seemore_HDMI.addEventListener('click', showMoreHDMI);
seeless_HDMI.addEventListener('click', hiddenMoreHDMI);
click_HDMI.addEventListener('click', showClickHDMI);
// <-----------------HDMI end---------------->

// <------------------no of USB-------------->
let click_noUSB = document.querySelector('.click_noUSB');
let noUSB_view = document.querySelector('.noUSB_view');
let noUSB_down = document.querySelector('.noUSB_down');
let flag3 = false;
let showClicknoUSB = () => {
  if (flag3 == false) {
    noUSB_view.style.display = "block";
    let current_rotation = -180;
    noUSB_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag3 = true;
  } else {
    noUSB_view.style.display = "none";
    let current_rotation = 0;
    noUSB_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag3 = false;
  }
}


click_noUSB.addEventListener('click', showClicknoUSB);
// <----------end no of USB----------------->


// <-------------Display Tech------------->

let click_tech = document.querySelector('.click_tech');
let tech_view = document.querySelector('.tech_view');
let tech_down = document.querySelector('.tech_down');
let flag4 = false;
let showClicktech = () => {
  if (flag4 == false) {
    tech_view.style.display = "block";
    let current_rotation = -180;
    tech_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag4 = true;
  } else {
    tech_view.style.display = "none";
    let current_rotation = 0;
    tech_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag4 = false;
  }
}


click_tech.addEventListener('click', showClicktech);

// <----------------------Display Tech End----------->

// <-------------------------display type------------------->
let click_dtype = document.querySelector('.click_dtype');
let seemore_dtype = document.querySelector('.seemore_dtype');
let seeless_dtype = document.querySelector('.seeless_dtype');
let hidden_dtype = document.querySelector('.hidden_dtype');
let dtype_view = document.querySelector('.dtype_view');
let dtype_down = document.querySelector('.dtype_down');
let flag5 = false;

let showMoredtype = () => {
  hidden_dtype.style.display = "block";
  seemore_dtype.style.display = "none"
}
let hiddenMoredtype = () => {
  hidden_dtype.style.display = "none";
  seemore_dtype.style.display = "block";
}

let showClickdtype = () => {
  if (flag5 == false) {
    dtype_view.style.display = "block";
    seemore_dtype.style.display = "block";
    let current_rotation = -180;
    dtype_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag5 = true;
  } else {
    dtype_view.style.display = "none";
    hidden_dtype.style.display = "none";
    let current_rotation = 0;
    dtype_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag5 = false;
  }


}
seemore_dtype.addEventListener('click', showMoredtype);
seeless_dtype.addEventListener('click', hiddenMoredtype);
click_dtype.addEventListener('click', showClickdtype);

// <-------------------------display type end----------------------->

// <--------------------------display size--------------------------->
let click_size = document.querySelector('.click_size');
let size_view = document.querySelector('.size_view');
let size_down = document.querySelector('.size_down');
let flag6 = false;
let showClicksize = () => {
  if (flag6 == false) {
    size_view.style.display = "block";
    let current_rotation = -180;
    size_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag6 = true;
  } else {
    size_view.style.display = "none";
    let current_rotation = 0;
    size_down.style.transform = 'rotate(' + current_rotation + 'deg)'
    flag6 = false;
  }
}


click_size.addEventListener('click', showClicksize);



// <--------------------------displaysize end----------------------->


let teldData = async () => {
  try {
    let data = await telgetData('http://localhost:3000/television?_page1&_limit=20');
    displayTeldata(data);
    page2.style.backgroundColor = "white";
    page2.style.color = "black";

    page1.style.backgroundColor = "blue";
    page1.style.color = "white";
  } catch (error) {
    console.log(error);
  }

}



let teldData2 = async () => {
  try {
    let data = await telgetData('http://localhost:3000/television?_page=2&limit_20');
    displayTeldata(data);
    page1.style.backgroundColor = "white";
    page1.style.color = "black";

    page2.style.backgroundColor = "blue";
    page2.style.color = "white";
    
  } catch (error) {
    console.log(error);
  }

}

window.addEventListener('load', teldData);
page2.addEventListener('click', teldData2);
page1.addEventListener('click',teldData);










/*******Product Filter Code Started****/



/***** get selected checkbox value in array form ****/
function check_box_val(selector, type) {
  let item = [];
  selector.forEach(function(ele) {
    if (ele.checked == true) {
      item.push(`${type}=${ele.value}`);
    }
  })
  return item;
}
function check_box_val1(selector, type) {
  let item = [];
  selector.forEach(function(ele) {
    if (ele.checked == true) {
      item.push(`${type}${ele.value}`);
    }
  })
  return item;
}

/****** Apply click event in all the checkbook for product filter ***************/
let filter_checkbox = document.querySelectorAll('.filter_checkbox');
filter_checkbox.forEach((item) => {
  item.addEventListener("click", async function() {
    await filter_data();// product filter function
  })
});


/******* selcet all the filter ****/

let brand_list = document.querySelectorAll('[name="brand"]');
let feature_list = document.querySelectorAll('[name="feature"]');
let tvops_list = document.querySelectorAll('[name="tvops"]');
let hdmi_list = document.querySelectorAll('[name="HDMI"]');
let usb_list = document.querySelectorAll('[name="USB"]');
let displayTech_list = document.querySelectorAll('[name="displayTech"]');
let displayType_list = document.querySelectorAll('[name="displayType"]');
let displaySize_list = document.querySelectorAll('[name="displaySize"]');

let discount_list = document.querySelectorAll('[name="discount"]');





/***********####****$$$$**********
 * Filter Product Data using this function
 * 1.get all filter value using 👉👉check_box_value(selector,type) 👈👈 this function 
 *
 * 👉👉Selector Which filter your are selected to get data
 * 👉👉 type Selector type
 * example check_box_value(brand_list,brand)
 * 
 * 2. After get all data and concat get data
 * 
 * 3.convert array into string using join() function
 * 
 * 4.crate url using converted string and fetch data and display data
 * 
 * *******************************/
async function filter_data(minprice=0,maxprice=0) {
  let url = 'http://localhost:3000/television?_page=1&_limit=20';
  
  let brand_filter = check_box_val(brand_list, 'brand');
  let feature_filter = check_box_val(feature_list, 'feature');
  let tvops_filter=check_box_val(tvops_list, 'tvops');
  let hdmi_filter=check_box_val(hdmi_list, 'HDMI');
  
  let usb_filter = check_box_val(usb_list, 'USB');
  let displayTech = check_box_val(displayTech_list, 'displayTech');
  let displayType=check_box_val(displayType_list, 'displayType');
  let displaySize=check_box_val(displaySize_list, 'displaySize');
 
  let discount=check_box_val1(discount_list, 'discount').join('&');
  let price_filter="";  
 if(minprice!=0 && maxprice!=0){
  price_filter=`&dealprice_gte=${minprice}&dealprice_lte=${maxprice}`;
 }else{
   price_filter='';
 }
  
 let final_array=brand_filter.concat(feature_filter,tvops_filter,hdmi_filter,usb_filter,displayTech,displayType,displaySize);
 
let  short_filter = short_val();
if(short_filter!=""){
  short_filter+'&';
}
 let final_filter=final_array.join('&');
 url+= '&' + short_filter + '&'+final_filter+ '&'+price_filter+ '&'+discount;
//console.log(short_filter)
//console.log(url);
  try {
    let res = await fetch(url);
    let data = await res.json();
    detail.innerHTML = '';
    displayTeldata(data);
  } catch (error) {
    alert(error)
  }
  
}

/*** product short selct box ******/
let short_filter=document.querySelector('.tel_selfilter');

/*************************
 *  get sort value for product short
 *************************/
function short_val(){
  let short_value=short_filter.value;
let short='';
  if(short_value=="rel"){
    short='';
  }
  if(short_value=="nam"){
    short='_sort=name&_order=asc';
  }
  if(short_value=='revname'){
    short='_sort=name&_order=desc';
  }
  if(short_value=='htol'){
    short='_sort=dealprice&_order=desc';
  }
  if(short_value=='ltoh'){
    short='_sort=dealprice&_order=asc';
  }
  return short;
}



/*******####******#*##*#
 * select box change that time call filter data for product short
 * *******************/
short_filter.addEventListener('change',async function() {
  await filter_data();
})



//http://localhost:3000/television?_sort=dealprice&_order=asc



/*---------------------------------------------------
.           PRICE SLIDERS 
---------------_---------------_---------------------*/

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000,150000],
    connect: true,
    range: {
        'min': 5000,
        'max': 200000
    }
});

let filter_minmax=document.querySelector('.filter_minmax');
slider.noUiSlider.on('update', async function (values, handle, unencoded) {
   filter_minmax.innerHTML=
   `<strong> Rs:- ${Math.round(values[0])}</strong>  &nbsp; &nbsp; &nbsp; <strong> Rs:- ${Math.round(values[1])}</strong>`;
   let minprice=values[0];
  let  maxprice=values[1];
   await filter_data(minprice,maxprice);
});