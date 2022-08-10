function navtop() {
  return `<ul id="find_store_list">
    <li>
        <a href="#">
            <i class="fa-solid fa-location-dot"></i>
            Find a store</a>
    </li>
    <li>
        <a href="#">Buying guide</a>
    </li>
    <li>
        <a href="#">Contact Us</a>
    </li>
  </ul>`;
}
function NEW_NAVTOP() {
  return `<ul id="navbaar_top_on_another_page">
      <li>
       OUR BRAND PROMISE
      </li>
      <li>
       <i class="fa-solid fa-arrow-right-arrow-left"></i>
       EASY RETURN
      </li>
      <li>
       <i class="fa-solid fa-truck"></i>
       NEXT DAY DELIVERY
      </li>
      <li>
       <i class="fa-solid fa-q"></i>
       SERVICE GUARANTEE
      </li>
      <li>
       <i class="fa-solid fa-diagram-project"></i>
        UNMATCHED NETWORK
      </li>
      <li>
           <i class="fa-solid fa-location-dot"></i>
           FIND A STORE
       </li>
      <li>
       CONTACT US
       </li>
  </ul>`;
}
function main_navbaar() {
  return `<!-- logo and seach baar and cart and login -->
    <div id="nav_serchbaar_div">
       <a href="homePage.html">
         <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </a>
       <div id="main_serchbaar">
          <input id="nav_input" type="text" placeholder="Find your favorite products">
          <i class="fa-solid fa-magnifying-glass"></i>
       </div>
       <ul id="headermaininfo">
         <li>
             <a id="register_pincode" href="#"> Select your PIN Code</a>
         </li>
         <li id="nav_cart_item">
             <span id="nav_cart_item_total">0</span>
             <a href="cart.html">
                 <i class="fa-solid fa-cart-shopping"></i>
                 Cart
             </a>
             <div id="nav_cart_div_first">
      <div id="triingle_cart"></div>
      <div id="padding_cart_nav"></div>
      <div id="nav_cart_item_show">
        <div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1?context=bWFzdGVyfGltYWdlc3wzMTg1NDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2hjYy85ODQ5MTUyNzY1OTgyLmpwZ3w5NjQwMGUxNTk1MjI5NmVlNjI0NjcyMmE0ZThjMTIyMDE1NDEwNmIwZDc4ZmYxMmYzY2FlYWM2ZTEwZjc3MDYw"
              alt=""
            />
          </div>
          <div>
            <h4>
              Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core
              i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD),
              35.56 cm (14 inch)
            </h4>
            <h3>₹31,490</h3>
            <div class="nav_div_third">
              <h6>Qty : 1</h6>
              <h6><button>Remove</button></h6>
            </div>
          </div>
        </div>
      </div>
      <div id ="view_cart_button_nav">
        <a href="cart.html"><button>VIEW CART</button></a>
     </div>
    </div>
         </li>
         <li id="signup_login_On_nav">
             <a href="login_signup.html">
                 <i class="fa-solid fa-user"></i>
                 Login
             </a>
         </li>
         <li id="home_page_user_name">
             <i class="fa-solid fa-user"></i>
             <a id="home_page_user_name_text" href="user_profile.html">
                 Arvind Maurya
             </a>
             <div id="nav_account_div">
                    <div id="triingle">
            
                    </div>
                    <ul id="nav_account_div_list">
                       <li>
                           <a href="user_profile.html">My Profile</a>
                       </li>
                       <li>
                           <a href="user_order.html">My Orders</a>
                       </li>
                       <li>
                           <a href="#">My Address</a>
                       </li>
                       <li>
                           <a href="#">My Wishlist</a>
                       </li>
                       <li>
                           <a href="#">ROne Loyelty Points</a>
                       </li>
                       <li>
                           <a href="#">My Credits</a>
                       </li>
                       <li id="nav_user_logout_button">
                           <a href="#">Logout</a>
                       </li>
                    </ul> 
               </div>
         </li>
       </ul>
    </div>
 <!-- categry baar -->
    <div id="nav_categry">
    <li id="lishtshowbaar">
            <a href="#">
                <i class="fa-solid fa-bars"></i>
                All Categories
            </a>
           </li>
      <ul id="ctegry_list">
         <!-- mobile categry -->
         <li id="ctegry_list_mobile">
             <a href="#">MOBILES & TABLETS
                <i class="fa-solid fa-angle-down"></i>
             </a>
             <div id="nav_mobiles">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Smartphones</a>
                         </li>
                         <li>
                             <a href="#">OnePlus Nord 2T 5G</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Wearable Technology</a>
                         </li>
                         <li>
                             <a href="#">Smart Watch Accessories</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Accessories</a>
                         </li>
                         <li>
                            <a href="#">Tablet Accessories</a> 
                         </li>
                         <li>
                             <a href="#">Mobile Accessories</a>
                         </li>
                         <li>
                             <a href="#">Mobile Grips & Stands</a>
                         </li>
                         <li>
                             <a href="#">Car Mobile Holders</a>
                         </li>
                         <li>
                             <a href="#">Memory Cards</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Headphones & Headsets</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Tablets & eReaders</a>
                         </li>
                         <li>
                            <a href="#">Every Day use Tablets below 15000</a> 
                         </li>
                         <li>
                             <a href="#">Premium Tablets, Above 15001</a>
                         </li>
                     </ul> 
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Power Banks</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">eSlates</a>
                         </li>
                     </ul>
                     
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">AI Learning Robots</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </li>
         <!-- categry television -->
         <li id="ctegry_list_telivision">
           <a href="../pages/telLandpage.html">
             TELEVISIONS
             <i class="fa-solid fa-angle-down"></i>
           </a>
           <div id="nav_TELEVISIONS">
                <div>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="../pages/telLandpage.html">Televisions</a>
                     </li>
                     <li>
                       <a href="../pages/telLandpage.html">Smart TVs</a>  
                     </li>
                     <li>
                         <a href="../pages/telLandpage.html">32 Inch TVs</a>
                     </li>
                     <li>
                         <a href="../pages/telLandpage.html">43 Inch TVs</a>
                     </li>
                     <li>
                         <a href="../pages/telLandpage.html">55 Inch TVs</a>
                     </li>
                     <li>
                         <a href="../pages/telLandpage.html">Android TVs</a>
                     </li>
                 </ul>
                </div>
                <div>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">Gaming</a>
                     </li>
                     <li>
                         <a href="#">Gaming Consoles</a>
                     </li>
                     <li>
                         <a href="#">Gaming Accessories</a>
                     </li>
                     <li>
                         <a href="#">Gaming Titles</a>
                     </li>
                 </ul>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">Projectors</a>
                     </li>
                 </ul>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">Streaming Devices</a>
                     </li>
                 </ul>
                </div>
                <div>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">Reconnect Disney | Marvel Audio Collection</a>
                     </li>
                 </ul>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">TV & Audio Accessories</a>
                     </li>
                     <li>
                         <a href="#">Virtual Reality Headsets</a>
                     </li>
                     <li>
                         <a href="#">Stabilizers & Surge Protectors</a>
                     </li>
                     <li>
                         <a href="#">Power Strips & Extension Cords</a>
                     </li>
                 </ul>
                 <ul class="discription_nav">
                     <li class="nav_discription_heading">
                         <a href="#">Electronic Musical Instruments</a>
                     </li>
                     <li>
                         <a href="#">Musical Mini Keyboards</a>
                     </li>
                     <li>
                         <a href="#">Musical Standard Keyboards</a>
                     </li>
                 </ul>
                </div> 
           </div>
         </li>
         <!-- categry  HEADPHONES & SPEAKERS-->
         <li id="ctegry_list_HEADPHONES">
             <a href="#">
                 HEADPHONES & SPEAKERS
                 <i class="fa-solid fa-angle-down"></i>
              </a> 
             <div id="nav_HEADPHONES">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Headphones & Headsets</a>
                         </li>
                         <li>
                           <a href="#">True Wireless</a>  
                         </li>
                         <li>
                             <a href="#">Bluetooth Neckbands</a>
                         </li>
                         <li>
                             <a href="#">Wired Earphones</a>
                         </li>
                         <li>
                             <a href="#">On Ear Headphones</a>
                         </li>
                         <li>
                             <a href="#">Noise Cancelling Headphones</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Bluetooth & WiFi Speakers</a>
                         </li>
                         <li>
                             <a href="#">Bluetooth Speakers</a>
                         </li>
                         <li>
                             <a href="#">Smart Speakers</a>
                         </li>
                     </ul> 
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">TV Speakers & Soundbars</a>
                         </li>
                         <li>
                             <a href="#">Soundbars</a>
                         </li>
                         <li>
                             <a href="#">Home Theatre Systems</a>
                         </li>
                         <li>
                             <a href="#">Party speakers</a>
                         </li>
                         <li>
                             <a href="#">Multimedia</a>
                         </li>
                         <li>
                             <a href="#">Audio, Speaker Stands</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Musical Instruments</a>
                         </li>
                     </ul>
                 </div>
             </div> 
         </li>
         <!-- categery home applications -->
         <li id="ctegry_list_APPLIANCES">
             <a href="#">
                 HOME APPLIANCES
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_APPLIANCES">
                   <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Air Conditioners</a>
                         </li>
                         <li>
                           <a href="#">Split Air Conditioners</a>  
                         </li>
                         <li>
                             <a href="#">Window Air Conditioners</a>
                         </li>
                         <li>
                             <a href="#">Smart Air Conditioners</a>
                         </li>
                         <li>
                             <a href="#">Energy Efficient Air Conditioners</a>
                         </li>
                         <li>
                             <a href="#">1 ton Air Conditioners</a>
                         </li>
                         <li>
                             <a href="#">1.5 ton Air Conditioners</a>
                         </li>
                         <li>
                             <a href="#">5 Star Air Conditioners</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Air Coolers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Air Purifiers</a>
                         </li>
                     </ul>
                   </div>
                   <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Washing Machines</a>
                         </li>
                         <li>
                            <a href="#">Fully Automatic Front Load</a> 
                         </li>
                         <li>
                             <a href="#">Fully Automatic Top Load</a>
                         </li>
                         <li>
                             <a href="#">Semi-Automatic Top Load</a>
                         </li>
                         <li>
                             <a href="#">Washing Machine Detergents & Liquids</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Refrigerators</a>
                         </li>
                         <li>
                            <a href="#">Single Door</a> 
                         </li>
                         <li>
                             <a href="#">Double Door</a>
                         </li>
                         <li>
                             <a href="#">Side by Side Refrigerators</a>
                         </li>
                         <li>
                             <a href="#">Convertible</a>
                         </li>
                     </ul>
                   </div>
                   <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Vacuum Cleaners</a>
                         </li>
                         <li>
                             <a href="#">Robotic Vacuum Cleaners</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Dishwashers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Fans</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Cloth Dryers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Geysers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Room Heaters</a>
                         </li>
                     </ul>
                   </div>
             </div>
         </li>
         <!-- categery computers -->
         <li id="ctegry_list_COMPUTERS">
             <a href="#">
                 COMPUTERS
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_COMPUTERS">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Laptops</a>
                         </li>
                         <li>
                             <a href="#">Basic use laptops</a>
                         </li>
                         <li>
                             <a href="#">Student Laptops</a>
                         </li>
                         <li>
                             <a href="#">Thin and light Laptops</a>
                         </li>
                         <li>
                             <a href="#">Multi-Tasking Laptops</a>
                         </li>
                         <li>
                             <a href="#">Gaming Laptops</a>
                         </li>
                         <li>
                             <a href="#">Content creator Laptops</a>
                         </li>
                     </ul> 
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Computer Monitors</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Desktops & All-In-Ones</a>
                         </li>
                     </ul>
                     
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Bluetooth & WiFi Speakers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Internet Connectivity Devices</a>
                         </li>
                         <li>
                             <a href="#">Routers</a>
                         </li>
                         <li>
                             <a href="#">WiFi Range Extenders</a>
                         </li>
                         <li>
                             <a href="#">Wireless USB Adapters</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Printers & Inks</a>
                         </li>
                         <li>
                            <a href="#">Printers</a> 
                         </li>
                         <li>
                             <a href="#">Toners & Ink Cartridges</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Data Storage Devices</a>
                         </li>
                         <li>
                            <a href="#">Memory Cards</a> 
                         </li>
                         <li>
                             <a href="#">Pen Drives & OTG Drives</a>
                         </li>
                         <li>
                             <a href="#">Hard Disks & SSD</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Computer Accessories</a>
                         </li>
                         <li>
                            <a href="#">Upto 72% Off, Only on Reliancedigital.in</a> 
                         </li>
                         <li>
                             <a href="#">Computer Networking Cables</a>
                         </li>
                         <li>
                             <a href="#">Laptop Chargers & Adaptor</a>
                         </li>
                         <li>
                             <a href="#">Hubs & Docks</a>
                         </li>
                         <li>
                             <a href="#">Laptop Bags & Sleeves</a>
                         </li>
                         <li>
                             <a href="#">Laptop Cooling Pad</a>
                         </li>
                         <li>
                             <a href="#">Laptop Screen Protectors</a>
                         </li>
                         <li>
                             <a href="#">Laptop Tables & Stands</a>
                         </li>
                         <li>
                             <a href="#">Mouse Pads</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Input Devices</a>
                         </li>
                         <li>
                            <a href="#">Keyboards</a> 
                         </li>
                         <li>
                             <a href="#">Computer Mouse</a>
                         </li>
                         <li>
                             <a href="#">Stylus Pens</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </li>
         <!-- categry camraas -->
         <li id="ctegry_list_CAMERAS">
             <a href="#">
                 CAMERAS
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_CAMERAS">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">DSLR Cameras</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Mirrorless Cameras</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Point & Shoot Cameras</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">ProSumer Cameras</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Action Cameras</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Photo Storage Devices</a>
                         </li>
                         <li>
                            <a href="#">Memory Cards</a> 
                         </li>
                         <li>
                             <a href="#">Pen Drives</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Binoculars</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Camera Lens</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Digital Camera Accessories</a>
                         </li>
                         <li>
                             <a href="#">Camera Batteries & Chargers</a>
                         </li>
                         <li>
                             <a href="#">Camera bags & cases</a>
                         </li>
                         <li>
                             <a href="#">Tripods & Monopods</a>
                         </li>
                         <li>
                             <a href="#">Action Camera Accessories</a>
                         </li>
                     </ul> 
                 </div>
             </div>
         </li>
         <!-- categery kitchen -->
         <li id="ctegry_list_KITCHEN">
             <a href="#">
                 KITCHEN APPLIANCES
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_KITCHEN">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Microwave Ovens</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Water Purifiers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Fruits and Vegetable Cleaner</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Oven Toaster Grillers (OTG)</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Cookwares</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Juicer Mixer Grinders</a>
                         </li>
                         <li>
                             <a href="#">Juicers</a>
                         </li>
                         <li>
                             <a href="#">Hand Mixers</a>
                         </li>
                         <li>
                             <a href="#">Mixer Grinders</a>
                         </li>
                         <li>
                             <a href="#">Choppers & Slicers</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Induction Cookers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Food Processors</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Kitchen Hobs & Gas Stoves</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Kitchen Chimneys</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Rice Cookers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Sandwich Makers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Popup Toasters</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Coffee Makers & Grinders</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Reconnect Disney|Marvel Kitchen Collection</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Air Fryers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Specialty Appliances</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Electric Kettles</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Water Dispensers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Wet Grinders</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Egg Boilers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Flour Mills</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </li>
         <!-- categry personal care -->
         <li id="ctegry_list_PERSONAL">
             <a href="#">
                 PERSONAL CARE
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_PERSONAL">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Shavers & Trimmers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Epilators</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Hair Dryers & Stylers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Weighing Scales</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Irons</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Reconnect Disney|Marvel Grooming Collection</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Hygiene & Personal Care</a>
                         </li>
                         <li>
                             <a href="#">Digital Thermometers</a>
                         </li>
                         <li>
                             <a href="#">Massagers</a>
                         </li>
                         <li>
                             <a href="#">Misc. Care Devices</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Garment Steamers</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </li>
         <!-- categry accesseries -->
         <li id="ctegry_list_ACCESSORIES">
             <a href="#">
                 ACCESSORIES
                 <i class="fa-solid fa-angle-down"></i>
              </a>
              <div id="nav_ACCESSORIES">
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Bags, Cases & Sleeves</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Smart Devices</a>
                         </li>
                         <li>
                             <a href="#">Smart Plugs</a>
                         </li>
                         <li>
                             <a href="#">Smart Cameras</a>
                         </li>
                         <li>
                             <a href="#">Smart Sensors</a>
                         </li>
                         <li>
                             <a href="#">Smart Lights</a>
                         </li>
                         <li>
                             <a href="#">Smart Speakers</a>
                         </li>
                         <li>
                             <a href="#">Smart Tracking Devices</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Batteries & PowerBanks</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Cables & Cords</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Chargers & Adapters</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Bluetooth & WiFi Speakers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Audio/Video Accessories</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Reconnect Disney | Marvel Accessories</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Data Storage Devices</a>
                         </li>
                         <li>
                             <a href="#">Memory Cards</a>
                         </li>
                         <li>
                             <a href="#">Pen Drives & OTG Drives</a>
                         </li>
                         <li>
                             <a href="#">Hard Disks & SSD</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Mounts & Stands</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Routers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Screen Guards & Protectors</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Power Strips & Extension Cords</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Stabilizers</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Surge Protectors</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Webcams</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Headphones & Headsets</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Cleaners & Protectors</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Computer Mouse</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Keyboards</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Indoor Lighting</a>
                         </li>
                     </ul>
                     <ul class="discription_nav">
                         <li class="nav_discription_heading">
                             <a href="#">Office Electronics</a>
                         </li>
                         <li>
                            <a href="#">Laminators</a> 
                         </li>
                         <li>
                             <a href="#">Paper Shredders</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </li>
      </ul>
    </div>`;
}
const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const show_uersIn_nav = (user) => {
  let pincodeElimnet = document.getElementById("register_pincode");
  pincodeElimnet.innerText = `Deliver to ${user.city}`;
  let signup_login_On_naveliment = document.getElementById(
    "signup_login_On_nav"
  );
  signup_login_On_naveliment.style.display = "none";
  let home_page_user_name_textEliment = document.getElementById(
    "home_page_user_name_text"
  );
  let home_page_user_name_eliment = document.getElementById(
    "home_page_user_name"
  );
  home_page_user_name_eliment.style.display = "block";
  home_page_user_name_textEliment.innerText = user.name;
};
export { navtop, main_navbaar, NEW_NAVTOP, getData, show_uersIn_nav };
