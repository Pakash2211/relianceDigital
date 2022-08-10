import { footer } from "../components/footer.js";
import {main_navbaar,NEW_NAVTOP} from "../components/navbaar.js"
let navtopelimet = document.getElementById("top_find_store_div").innerHTML = NEW_NAVTOP();
let navbaarelimet = document.getElementById("navbaar_div");
navbaarelimet.innerHTML = main_navbaar();
let hp13=document.querySelector("#hp13");
hp13.innerHTML="";
hp13.innerHTML=footer();


let images = [
    "https://www.reliancedigital.in/medias/RD-CLP-Sansui-TV-banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTI1MXxpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDFkLzk4NTgyMjg4NDY2MjIuanBnfDBiNmU0Y2RkZjgwNjM3ZmFmYWZjNDEzNzE0MmQ5ZGZlNjIxMjJmNGY5YzZkYTZjY2VjODVkMTRjMTY2NTVmZGI",
    "https://www.reliancedigital.in/medias/LG-RD-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDg4L2g1ZC85ODU3NjQ2NTU5MjYyLmpwZ3w1NWNmZWVmOGI4YmY5NDc0ZWMwMGM2Y2Q4MDFmM2RlNzI4NzRlYjBmMjA3MmNhZjQ5YmEwMGVlYTdhYmIwZTdk",
    "https://www.reliancedigital.in/medias/TV-new-Launches-D-CLP-Banner-01.07.jpg?context=bWFzdGVyfGltYWdlc3wxNDkzODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYyL2g2Zi85ODU3NjQ5MTQ3OTM0LmpwZ3xlM2QxYmNhMmY2MjU2YjA0ZWRmNTAwMzIzNGRlYzg5ZDA0YzIyM2QxOTJjNWU5ZTc4ODA0OTVjNzhjY2U4ZjAz",
    "https://www.reliancedigital.in/medias/RD-website-banners-Website-version-1365-X-260-px-TV.png?context=bWFzdGVyfGltYWdlc3wxMzQ1MTF8aW1hZ2UvcG5nfGltYWdlcy9oMDEvaDNhLzk4NjI0NjcxNTgwNDYucG5nfGNmMDhkNjFlZTNkYzczNDgxZjBjMmIyMmUzMjRiMjBkMmY2ZDkwYTAwNDBlZjhhZDc3NzMzZWEzMmU1ZmZhZjA",
    "https://www.reliancedigital.in/medias/Hisense-TV-CLP-Banner-20-07-2022-01.jpg?context=bWFzdGVyfGltYWdlc3wxNjIwNjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2hhMi85ODYzNDEzMjM1NzQyLmpwZ3w1MDY3NGRhMzUwMWYzNDAxZGM5MjA5NTI0YjljNzRhMmM2MjI4MzBjY2QxMDQwYWFhYjM0ZGQ4NDg1NDVjZjY4",
    "https://www.reliancedigital.in/medias/Soundbar-D-CLP-Banner-27.07.jpg?context=bWFzdGVyfGltYWdlc3wxMTIyMjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2hkNi85ODY4MDAyOTgzOTY2LmpwZ3xlNzY4M2I4MzgyMGM2OTU4ODUwOWVlMTcwYWY4MmE2ZTFkNDZlMDA4YTYwZDM1YmFkYmE2ZGQ0OGM5MWIxMDgy"
];

var x;
let slideshowContainer = document.getElementById("slideshow")
let slideShowImage = document.createElement("img");
let i=0;

x = setInterval(function(){
    if(i==images.length){
        i=0;
    }
    slideShowImage.src = images[i];
    i = i+1;
},2000)
slideshowContainer.append(slideShowImage)