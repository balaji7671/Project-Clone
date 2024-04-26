window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});






const menuToggle = document.querySelector(".menu_toggle");
const sideMenu = document.querySelector(".side_menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close_btn");

menuToggle.addEventListener("click", function() {
    sideMenu.style.maxWidth = "20em";
    overlay.style.display ="block";
    document.body.style.overflow ="hidden";
});

closeBtn.addEventListener("click", function () {
    sideMenu.style.maxWidth = "0";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    nav.style.position = "";
    header.style.position = "";
    nav.style.marginTop ="";
});






function dropMenu(dropdownSelector) {
    const dropdown = document.querySelector(dropdownSelector);
    const subMenu = dropdown.querySelector(".sub_menu");
    const link = dropdown.querySelector("a");
    const icon = dropdown.querySelector("i.fa-angle-down");

    dropdown.addEventListener("mouseenter", function () {
        subMenu.style.maxHeight = "15em";
        subMenu.style.marginTop = "1em";
        link.style.color = "red";
        icon.style.transform = "rotate(180deg)";
        icon.style.color = "red";
    });

    dropdown.addEventListener("mouseleave", function () {
        subMenu.style.maxHeight = "0";
        subMenu.style.marginTop = "0";
        link.style.color = "";
        icon.style.transform = "";
        icon.style.color = "";
    });

    dropdown.addEventListener("click", function (event) {
        if (subMenu.style.maxHeight === "15em") {
            subMenu.style.maxHeight = "0";
            subMenu.style.marginTop = "0";
        } else {
            subMenu.style.maxHeight = "15em";
            subMenu.style.marginTop = "1em";
        }
    });
}

dropMenu(".dropdown1");
dropMenu(".dropdown2");
dropMenu(".dropdown3");
dropMenu(".dropdown4");
dropMenu(".dropdown5");







const toggle_main_sidebar = document.querySelector(".toggle_main_sidebar");
const close_circle = document.querySelector(".fa-circle-xmark"); 
const fa_bars = document.querySelector(".fa-bars");


fa_bars.addEventListener("click", function () {
    toggle_main_sidebar.style.maxWidth ="40em";
    overlay.style.display = "block";
    document.body.style.overflow ="hidden";
});

close_circle.addEventListener("click", () => {
    toggle_main_sidebar.style.maxWidth = "0";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
});






function toggleSubMenu(slider_div, menu_div) {
    const slider = document.querySelector(slider_div);
    const subMenu = document.querySelector(menu_div);


    slider.addEventListener("click", function () {
        const allMenus = document.querySelectorAll('.toggle_menu');
        allMenus.forEach(menu => {
            if (menu !== subMenu && menu.style.maxHeight === "47em") {
                menu.style.maxHeight = "0";
            }
        });
        const maxHeight = subMenu.style.maxHeight;
        if (maxHeight === "47em") {
            subMenu.style.maxHeight = "0";
        } else {
            subMenu.style.maxHeight = "47em";

        }
        
    });
}

toggleSubMenu('.toggle_slider_bar1 .toggle_slider_text', '.toggle_slider_bar1 .toggle_menu');
toggleSubMenu('.toggle_slider_bar2 .toggle_slider_text', '.toggle_slider_bar2 .toggle_menu');
toggleSubMenu('.toggle_slider_bar3 .toggle_slider_text', '.toggle_slider_bar3 .toggle_menu');
toggleSubMenu('.toggle_slider_bar4 .toggle_slider_text', '.toggle_slider_bar4 .toggle_menu');
toggleSubMenu('.toggle_slider_bar5 .toggle_slider_text', '.toggle_slider_bar5 .toggle_menu');






function toggleMenu(slider_inside) {
    const allMenus = document.querySelectorAll('.toggle_list');
    const slider_menu = slider_inside.querySelector('.toggle_list');
    allMenus.forEach(menu => {
        if (menu !== slider_menu && menu.style.maxHeight === "47em") {
            menu.style.maxHeight = "0";
        }

    });
    if (slider_menu.style.maxHeight === "47em") {
        slider_menu.style.maxHeight = "0";
    } else {
        slider_menu.style.maxHeight = "47em";
    }
}

const slider_inside1 = document.querySelector('.toggle_menu2');
slider_inside1.addEventListener("click", function () {
    toggleMenu(slider_inside1);
});

const slider_inside = document.querySelector('.toggle_menu1');
slider_inside.addEventListener("click", function () {
    toggleMenu(slider_inside);
});










// <div class="menu_bar2">
//             <div class="nav_bars">
//                 <div class="nav_bar_header">
//                     <h6>GAMES</h6>
//                     <i class="fa-solid fa-angle-down"></i>
//                 </div>
//                 <div class="nav_bar_dropbox">
//                     <div class="dropbox1">
//                         <h6>BROWSE GAMES</h6>
//                         <div class="list">
//                             <ul>
//                                 <li><a href="#">Latest Games</a></li>
//                                 <li><a href="#">Comming Soon</a></li>
//                                 <li><a href="#">Free-To-Play</a></li>
//                                 <li><a href="#">EA SPORTS</a></li>
//                                 <li><a href="#">EA Originals</a></li>
//                                 <li><a href="#">Games Library</a></li>
//                                 <li><a href="#">EA app Deals</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="dropbox2">
//                         <div class="dropbox1">
//                             <h6>PLATFORMS</h6>
//                             <div class="list">
//                                 <ul>
//                                     <li><a href="#">PC</a></li>
//                                     <li><a href="#">PlayStation</a></li>
//                                     <li><a href="#">Xbox</a></li>
//                                     <li><a href="#">Nintendo Switch</a></li>
//                                     <li><a href="#">Mobile</a></li>
//                                     <li><a href="#">Pogo</a></li>
//                                 </ul>
//                             </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="nav_bars">
//                 <div class="nav_bar_header">
//                     <h6>EXPERIENCES</h6>
//                     <i class="fa-solid fa-angle-down"></i>
//                 </div>
//             </div>
//             <div class="nav_bars">
//                 <div class="nav_bar_header">
//                     <h6>ABOUT</h6>
//                     <i class="fa-solid fa-angle-down"></i>
//                 </div>
//             </div>
//             <div class="nav_bars">
//                 <div class="nav_bar_header">
//                     <h6>COMMITMENTS</h6>
//                     <i class="fa-solid fa-angle-down"></i>
//                 </div>
//             </div>
//             <div class="nav_bars">
//                 <div class="nav_bar_header">
//                     <h6>RESOURCES</h6>
//                     <i class="fa-solid fa-angle-down"></i>
//                 </div>
//             </div>
//         </div>







// .nav_bar_header{
//     display: flex;
//     // /* border: 2px solid; */
//     align-items: center;
//     padding: 0.7em;
//     cursor: pointer;
// }

// .nav_bar_header h6{
//     font-weight: 400;
// }

// .nav_bar_header:hover{
//     color: red;
// }

// .nav_bar_header:hover i{
//     transform: rotateX(180deg);
//     transition: 0.3s;
// }

// .nav_bar_dropbox{
//     display: flex;
//     position: absolute;
// }


// .nav_bars{
//     display: flex;
// }


