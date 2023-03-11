let btnlogin =document.querySelector('.btn-login')
let cross = document.querySelector('.cross')
let cross1 = document.querySelector('.cross1')
let info = document.querySelector('.btn-info')


//  Sir sufiyan waal method
function showmodal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login').classList.add('showlogin')
}
btnlogin.addEventListener('click',showmodal)

// ab me cross k liye kaam karunga  
function removemodal(){
    document.querySelector('.overlay').classList.add('removeoverlay');
    document.querySelector('.login').classList.add('removelogin')
}
cross.addEventListener('click',removemodal)

// more info k liye aik function bana rha hu 

function information(){
    document.querySelector('.information').classList.add('showinformation');
    document.querySelector('.overlay').classList.add('showoverlay');

}
// ab me call kr rha hu button k through
info.addEventListener('click',information)

function removeinfomation(){
    document.querySelector('.overlay').classList.add('removeoverlay');
    document.querySelector('.information').classList.add('removeinformation')
}
cross1.addEventListener('click',  removeinfomation)


