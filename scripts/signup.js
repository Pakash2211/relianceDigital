import {navtop,main_navbaar,NEW_NAVTOP,getData} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div").innerHTML = NEW_NAVTOP();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
//footer 
import {footer} from "../components/footer.js"
let footerEliment = document.getElementById("hp13");
footerEliment.innerHTML = footer();
//signup eliment
let registerEliment = document.getElementById("mainregisteration_div");
let register_first_nameEliment = document.getElementById("register_first_name");
let register_last_nameEliment = document.getElementById("register_last_name");
let register_email_eliment = document.getElementById("register_email");
let register_mobile_elimet = document.getElementById("register_mobile");
let signupotp_div = document.querySelector(".signupotp")
let register_otp_elimet = document.getElementById("register_otp");
let sighnupOtpSubmitButton_eliment = document.getElementById("sighnupOtpSubmitButton");
let signupotpsned_registerEliment = document.getElementById("signupotpsned");
let register_city_nameEliment = document.getElementById("register_city_name");

//login eliment
let input_numberElement = document.getElementById("login_signup_input_number");
let login_diveEliment = document.getElementById("mainsighun_llogindiv");
let login_otp_elimet = document.getElementById("login_otp_button_div_input");
// console.log(login_otp_elimet);
let inter_your_otp_lableEliment = document.getElementById("inter_your_otp_lable");
let Enter_your_mobile_lableEliment = document.getElementById("Enter_your_mobile_lable");
let login_otp_submit_btn = document.getElementById("login_otp_button_div");
let check_login_availble_button_elimet = document.getElementById("check_login_availble_button");
//api url

document.getElementById("register_pincode").style.display = "none"





// login all function
const matchOtp = (number,obj)=>{
let userOtpInput = login_otp_elimet.value;
if(number==userOtpInput){
    alert("login succsessfull")
    localStorage.setItem("usersData",JSON.stringify(obj));
    location.href = 'homePage.html'
}
else{
    alert("wrong otp");
}
}
const goto_otp_verification = (ele)=>{
   let ran_number = Math.floor(Math.random()*9999)+1000;
   alert(`Your Login OTP is : ${ran_number}`);
   inter_your_otp_lableEliment.style.display = "block";
   login_otp_elimet.style.display = "block";
   login_otp_submit_btn.style.display = "block";
   input_numberElement.style.display = "none";
   Enter_your_mobile_lableEliment.style.display = "none";
   check_login_availble_button_elimet.style.display = "none";
   login_otp_submit_btn.addEventListener("click",()=>{
     matchOtp(ran_number,ele)
   })
}
// register user functions
const postData_toserver = async(obj)=>{
   try {
    let url = `http://localhost:3000/profile`
     let res = await fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{'content-type': 'application/json',}
     })
     alert("signup succesfull");
     window.location.reload();
   } catch (error) {
    console.log(error)
   }
}
const match_otp_both = (obj,ran_number)=>{
    let userOtp = register_otp_elimet.value;
    if(ran_number==userOtp){
       postData_toserver(obj);
    }else{
        alert("wrong otp Enterd")
    }
}
const Go_otp_varification = (obj)=>{
    let ran_number = Math.floor(Math.random()*9999)+1000;
    alert(`Your otp is : ${ran_number}`);
    signupotp_div.style.display = "block";
    sighnupOtpSubmitButton_eliment.style.display = "block"
    signupotpsned_registerEliment.style.display = "none";
    register_otp_elimet.style.display = "block"
    sighnupOtpSubmitButton_eliment.addEventListener("click",()=>{
        match_otp_both(obj,ran_number);
    })
}
const getData_and_saveToserver = (number)=>{
   let name = `${register_first_nameEliment.value} ${register_last_nameEliment.value}`
   let email = register_email_eliment.value;
   let city = register_city_nameEliment.value;
   let add = document.getElementById("register_add_name").value;
   if(name!=""&&email!=""&&add!=""){
     let obj = {
        name:name,
        email:email,
        mobile:number,
        city:city,
        order:[],
        address:add
     }
     Go_otp_varification(obj);
   }
   else{
    alert("Fill All details First");
   }
}
const Go_to_register_page = (number)=>{
    registerEliment.style.display = "block";
    login_diveEliment.style.display = "none"
    register_mobile_elimet.value = number;
    signupotpsned_registerEliment.addEventListener("click",()=>{
        getData_and_saveToserver(number);
    })
}
const checkDatabase = (number,dataarr)=>{
    let check = true;
    dataarr.forEach((element) => {
        if(element.mobile==number){
            check = false;
            goto_otp_verification(element);
        }
    });
    if(check==true){
        Go_to_register_page(number);
    }
    
}
const checkToLoginServer = async()=>{
    try {
        let input_number = input_numberElement.value;
        if(input_number.length==10){
            let data = await getData(`http://localhost:3000/profile`);
            checkDatabase(input_number,data);
        }else{
            alert("wrong mobile number")
        }
    } catch (error) {
        console.log(error);
    }
}
check_login_availble_button_elimet.addEventListener("click",checkToLoginServer)