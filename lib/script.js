const navbarCode = '<div class="navbar"><ul><li><a href="index.html">Home</a></li><li><a href="contact.html">Contact</a></li><li><a href="speakingtime.html">Speaking Time</a></li><div class="dropdown"><button class="dropbtn" onclick="mainprojects()">Projects <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="https://idlefactory.fun">Idle Factory Tycoon</a><a href="newsgen.html">News Gen</a><a href="boxclicker.html">Box Clicker</a></div></div><li><a href="webcomissions.html">Web Commissions</a></li></ul></div>'
var navbarOpen = 0;
var firsttime = 0;
function load(){
    document.getElementById("navbarUpdate").innerHTML = navbarCode;
}

function openNav() {
    if(navbarOpen == 0){
    if(firsttime == 0){
    if(confirm("This is an experimental feature. Continue?")){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBtn").innerHTML = "&times;"
    document.getElementById("openBtn").style.fontSize = "46px"
    document.getElementById("openBtn").style.paddingTop = "7px"
    document.getElementById("openBtn").style.fontWeight = "thin"
    navbarOpen = 1;
    firsttime = 2;
    }else{
    firsttime = 1;
    }
    }else if(firsttime == 2){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBtn").innerHTML = "&times;"
    document.getElementById("openBtn").style.fontSize = "46px"
    document.getElementById("openBtn").style.paddingTop = "7px"
    document.getElementById("openBtn").style.fontWeight = "thin"
    navbarOpen = 1;
    }
    }else{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openBtn").innerHTML = "&#9776;"
    document.getElementById("openBtn").style.fontSize = "30px"
    document.getElementById("openBtn").style.padding = "10px 15px"
    document.getElementById("openBtn").style.fontStyle = "bold"
    navbarOpen = 0;
    }
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */