//page preloading js
jQuery(window).load(function(){
    jQuery(".hameid-loader-overlay").fadeOut(500);
});

//include facebook chat
w3.includeHTML();

// Used to toggle the menu on small screens when clicking on the menu button
function mobileNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// home page water treatment click 
function clickHomeWater() {
    window.location.assign("water.html")
}

// home page hero slider
heroSlider = w3.slideshow(".hero-slide", 0);
            