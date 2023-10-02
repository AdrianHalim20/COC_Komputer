let navbar = document.getElementById("navContent")
let brand = document.getElementById("brand")
let socket = document.getElementById("socket")
let mobo = document.getElementById("mobo")
let ram = document.getElementById("ram")
let channel = document.getElementById("channel")
let storage = document.getElementById("storage")
let vga = document.getElementById("vga")
let psu = document.getElementById("psu")
let saveButton = document.getElementById("saveButton")


function toogleNav(){
  if(navbar.classList.contains("hidden")){
    navbar.classList.add("block")
    navbar.classList.remove("hidden")
  }else{
    navbar.classList.add("hidden")
    navbar.classList.remove("block")
  }
}

function saving() {
saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Brand: ${brand.value} \nSocket: ${socket.value} \nMotherboard: ${mobo.value} \nRam: ${ram.value} Dengan Configurasi ${channel.value} \nStorage: ${storage.value} \nVGA: ${vga.value} \nPower Supply: ${psu.value}`))
saveButton.setAttribute('download','RakitanPcSaya.txt');
setTimeout(() => {
  alert("Berhasil Disimpan");
}, 1000);
}

function load() {
}