let inc=document.getElementById("Inc");
let dec=document.getElementById("decrease");
let save=document.getElementById("save");
let reset=document.getElementById("reset");
let load=document.getElementById("load");
let count=document.querySelector('#count');

let counts=0;

function updatecount(){
  count.textContent=counts;

}

inc.addEventListener("click",()=>{
  counts++;
  updatecount();
});

dec.addEventListener("click",()=>{
    counts--;
    updatecount();
});

save.addEventListener("click",()=>{
    localStorage.setItem("count",counts);
});


reset.addEventListener("click",()=>{
    counts=0;
    updatecount();
});

load.addEventListener("click",()=>{
let saved = localStorage.getItem("count");
  if (saved !== null) {
    counts = Number(saved);
  }
  updateCount();
});
