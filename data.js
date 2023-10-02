let navbar = document.getElementById("navContent")


function toogleNav(){
  if(navbar.classList.contains("hidden")){
    navbar.classList.add("block")
    navbar.classList.remove("hidden")
  }else{
    navbar.classList.add("hidden")
    navbar.classList.remove("block")
  }
}