window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header").style.padding = "1px 1px"
            document.getElementById("logo").style.transform = "scale(.8)";
    } 
    else {
            document.getElementById("header").style.padding = "10px 1px"
            document.getElementById("logo").style.transform = "scale(1)";
    }
}