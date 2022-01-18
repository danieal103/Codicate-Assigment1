var menuOpen = false;

docReady(function() {
  // DOM is loaded and ready for manipulation here
   
  //Responsive Menu hide/show
  menuScroll();
  responsiveMenu();
});

function menuScroll() {  
   window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20 ) document.getElementById("bottom_header").style.top = screen.width > 500 ? "0px" : "0px";
    else document.getElementById("bottom_header").style.top="50px";

    }
}

function responsiveMenu(){
  window.onresize = function() {
  if(screen.width > 500) {
    document.getElementById("header_nav_top").style.display = "block";
   } else {
    document.getElementById("header_nav_top").style.display = "none";
   }
 }
}

function MessageBox(){
    alert("Hello World");
}

function CustomAlert(message){
  alert(message);
}

function OpenMenu(){
  menuOpen = !menuOpen;
  document.getElementById("top_header").style.position = menuOpen ? "fixed" : "sticky";  
  document.getElementById("bottom_header").style.display = menuOpen ? "none" : "block";
  document.getElementById("header_nav_top").style.display =  menuOpen ? "block" : "none";
}

  
function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}
