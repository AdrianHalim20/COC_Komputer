let nav = document.getElementById("navContent")


function toggleNav() {
    if (nav.value == off ) {
        nav.class = "w-full block md:flex md:items-center justify-between md:w-auto"
    }else{
        nav.class = "w-full hidden md:flex md:items-center justify-between md:w-auto"
    }
}