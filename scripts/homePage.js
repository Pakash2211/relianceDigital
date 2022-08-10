import { footer } from "../components/footer.js";
import {navtop,main_navbaar,NEW_NAVTOP} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div").innerHTML = navtop();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
let hp13=document.querySelector("#hp13");
hp13.innerHTML="";
hp13.innerHTML=footer();

roll1();
roll2();

class si{
    constructor(parent,arr){
        this.i=0;
        this.si=setInterval(()=>{
            if(this.i==arr.length)this.i=0;
            // console.log(this.i);
            parent.src=arr[this.i].imglink;
            this.i++;
        },2000)
    }
}

async function getData(url){
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}
async function roll1(){
    let data=await getData(`http://localhost:3000/roll1`);
    // console.log(data);
    // let i=0;
    let hp2img=document.querySelector("#hp2img");
    hp2img.src="";
    let setI=new si(hp2img,data);
}

async function roll2(){
    let data=await getData(`http://localhost:3000/roll2`);
    // console.log(data);
    let i=0;
    let hp2img=document.querySelector("#hp7img");
    hp2img.src="";
    let setI=new si(hp2img,data);
}

let ihp3=0;
let ihp4=0;

hp3();

async function hp3(){
    let data=await getData(`http://localhost:3000/laptop`);
    let key="laptop";
    console.log(data);
    let parent=document.querySelector("#hp3components");
    dispData(data,parent,3,key);
    console.log(ihp3,"---");
}

hp4();

async function hp4(){
    let data=await getData(`http://localhost:3000/appliances`);
    let key="appliances";
    console.log(data);
    let parent=document.querySelector("#hp4components");
    dispData(data,parent,4,key);
}

document.querySelector("#hp3btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/laptop`);
    let parent=document.querySelector("#hp3components");
    let key="laptop";
    console.log(ihp3);
    if(ihp3==5){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }else if(ihp3==data.length){
        ihp3=0;
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp3btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/laptop`);
    let parent=document.querySelector("#hp3components");
    let key="laptop";
    console.log(ihp3);
    if(ihp3==5){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }else if(ihp3==data.length){
        ihp3=0;
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp4btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/appliances`);
    let parent=document.querySelector("#hp4components");
    let key="appliances";
    console.log(ihp4);
    if(ihp4==5){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }else if(ihp4==data.length){
        ihp4=0;
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp4btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/appliances`);
    let parent=document.querySelector("#hp4components");
    let key="appliances";
    console.log(ihp4);
    if(ihp4==5){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }else if(ihp4==data.length){
        ihp4=0;
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        };
    }
})

let ihp10=0;
let ihp11=0;
let ihp12=0;

function dispData(data,parent,q,key){
    if(q==3){
        parent.innerHTML="";
        for(let i=ihp3;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp3].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp3].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp3].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp3].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp3].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp3<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp3].id);
                });
                ihp3++;
                parent.append(a);
            }
        }
    }else if(q==4){
        parent.innerHTML="";
        for(let i=ihp4;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp4].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp4].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp4].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp4].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp4].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp4<5){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp4].id);
                });
                ihp4++;
                parent.append(a);
            }
        }
    }else if(q==10){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE");
        let a1=document.createElement("a");
        a1.setAttribute("href","../pages/telDetails.html");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        console.log(img,a1);
        for(let i=ihp10;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp10].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp10].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp10].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp10].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp10].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp10<4){
                console.log(ihp10);
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp10].id);
                });
                ihp10++;
                parent.append(a);
            }
        }
    }else if(q==11){
        parent.innerHTML="";
        for(let i=ihp11;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp11].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp11].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp11].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp11].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp11].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp11<4){
                console.log(ihp11);
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp11].id);
                });
                ihp11++;
                parent.append(a);
            }
        }
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI");
        let a1=document.createElement("a");
        a1.setAttribute("href","../pages/telDetails.html");
        a1.append(img);
        // parent.innerHTML="";
        parent.append(a1);
        console.log(img,a1);
    }else if(q==12){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1");
        let a1=document.createElement("a");
        a1.setAttribute("href","../pages/telDetails.html");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        console.log(img,a1);
        for(let i=ihp12;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp12].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp12].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp12].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp12].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp12].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp12<4){
                console.log(ihp12);
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp12].id);
                });
                ihp12++;
                parent.append(a);
            }
        }
    }
}

hp10();

async function hp10(){
    let data=await getData(`http://localhost:3000/watches`);
    let key="watches";
    console.log(data);
    let parent=document.querySelector("#hp10components");
    dispData(data,parent,10,key);
}

hp12();

async function hp12(){
    let data=await getData(`http://localhost:3000/tvForHomePage`);
    let key="tvForHomePage";
    console.log(data);
    let parent=document.querySelector("#hp12components");
    dispData(data,parent,12,key);
}

hp11();

async function hp11(){
    let data=await getData(`http://localhost:3000/soundbar`);
    let key="soundbar";
    console.log(data);
    let parent=document.querySelector("#hp11components");
    dispData(data,parent,11,key);
}

document.querySelector("#hp10btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/watches`);
    let parent=document.querySelector("#hp10components");
    let key="watches";
    console.log(ihp10);
    if(ihp10==4){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp10;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp10].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp10].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp10].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp10].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp10].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp10<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp10].id);
                });
                ihp10++;
                parent.append(a);
            }
        };
    }else if(ihp10==data.length){
        ihp10=0;
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp10;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp10].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp10].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp10].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp10].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp10].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp10<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp10].id);
                });
                ihp10++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp10btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/watches`);
    let parent=document.querySelector("#hp10components");
    let key="watches";
    console.log(ihp10);
    if(ihp10==4){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp10;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp10].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp10].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp10].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp10].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp10].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp10<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp10].id);
                });
                ihp10++;
                parent.append(a);
            }
        };
    }else if(ihp10==data.length){
        ihp10=0;
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp10;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp10].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp10].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp10].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp10].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp10].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp10<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp10].id);
                });
                ihp10++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp11btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/soundbar`);
    let parent=document.querySelector("#hp11components");
    let key="soundbar";
    console.log(ihp11);
    if(ihp11==4){
        parent.innerHTML="";
        for(let i=ihp11;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp11].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp11].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp11].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp11].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp11].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp11<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp11].id);
                });
                ihp11++;
                parent.append(a);
            }
        };
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        // parent.innerHTML="";
        parent.append(a1);
    }else if(ihp11==data.length){
        ihp11=0;
        parent.innerHTML="";
        for(let i=ihp11;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp11].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp11].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp11].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp11].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp11].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp11<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp11].id);
                });
                ihp11++;
                parent.append(a);
            }
        };
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        // parent.innerHTML="";
        parent.append(a1);
    }
})

document.querySelector("#hp11btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/soundbar`);
    let parent=document.querySelector("#hp11components");
    let key="soundbar";
    console.log(ihp11);
    if(ihp11==4){
        parent.innerHTML="";
        for(let i=ihp11;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp11].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp11].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp11].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp11].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp11].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp11<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp11].id);
                });
                ihp11++;
                parent.append(a);
            }
        };
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        // parent.innerHTML="";
        parent.append(a1);
    }else if(ihp11==data.length){
        ihp11=0;
        parent.innerHTML="";
        for(let i=ihp11;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp11].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp11].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp11].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp11].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp11].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp11<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp11].id);
                });
                ihp11++;
                parent.append(a);
            }
        };
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Best-Selling-Soundbars-Products-Carousel-Banner-30-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w1MDA1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDBkLzk4NTc5NzI4OTU3NzQuanBnfGZmYTM1ZDMzNGU5YTY3NzA1NWJiNWE1OTA4MTU5MjIyMTRjNWY1MTA4ZmQxNGM5NGNhMzU2YjUyMzE4Y2QzNWI");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        // parent.innerHTML="";
        parent.append(a1);
    }
})

document.querySelector("#hp12btnLeft").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/tvForHomePage`);
    let parent=document.querySelector("#hp12components");
    let key="tvForHomePage";
    console.log(ihp12);
    if(ihp12==4){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp12;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp12].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp12].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp12].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp12].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp12].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp12<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp12].id);
                });
                ihp12++;
                parent.append(a);
            }
        };
    }else if(ihp12==data.length){
        ihp12=0;
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp12;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp12].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp12].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp12].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp12].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp12].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp12<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp12].id);
                });
                ihp12++;
                parent.append(a);
            }
        };
    }
})

document.querySelector("#hp12btnRight").addEventListener("click",async ()=>{
    let data=await getData(`http://localhost:3000/tvForHomePage`);
    let parent=document.querySelector("#hp12components");
    let key="tvForHomePage";
    console.log(ihp12);
    if(ihp12==4){
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp12;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp12].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp12].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp12].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp12].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp12].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp12<data.length){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp12].id);
                });
                ihp12++;
                parent.append(a);
            }
        };
    }else if(ihp12==data.length){
        ihp12=0;
        let img=document.createElement("img");
        img.setAttribute("src","https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1");
        let a1=document.createElement("a");
        a1.setAttribute("href","");
        a1.append(img);
        parent.innerHTML="";
        parent.append(a1);
        for(let i=ihp12;i<data.length;i++){
            let a=document.createElement("a");
            a.setAttribute("href","../pages/telDetails.html");
            let str=`
                <div class="product">
                    <div class="box1">
                        <img src="${data[ihp12].imglink}">
                    </div>
                    <div class="box2">
                        <p class="proName">${data[ihp12].name.substring(0,50)}</p>
                        <p class="dealPrice">Deal Price: <span>&#8377;${data[ihp12].dealprice}</span></p>
                        <p class="mrpPrice">MRP Price:&nbsp;&nbsp; <span>&#8377;${data[ihp12].MRP}</span></p>
                        <p class="youSave">You Save:&nbsp;&nbsp; <span>${data[ihp12].discountx}(&#8377;11,510)</span></p>
                        <p class="off">OFFERS AVAILABLE</p>
                    </div>
                </div>
            `;
            a.innerHTML=(str);
            if(ihp12<4){
                a.addEventListener("click",()=>{
                    let obj={
                        productKey:key,
                        productId:data[i].id
                    }
                    localStorage.setItem("product",JSON.stringify(obj));
                    console.log(data[ihp12].id);
                });
                ihp12++;
                parent.append(a);
            }
        };
    }
})
