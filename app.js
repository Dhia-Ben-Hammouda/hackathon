let button = document.getElementsByClassName("hm")[0];
let tog = document.getElementsByClassName("toggle")[0];

button.addEventListener("click", ()=>{
    button.classList.toggle("rotated");
    tog.classList.toggle("toggle");
})