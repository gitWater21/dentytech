let downbtn = document.querySelector(".down-btn");
let title = document.querySelector(".title");
let clientimgbox = document.querySelector(".client-img-box");

downbtn.addEventListener("click", ()=>{
    console.log(title.classList.toggle("click-title"));
    console.log(clientimgbox.classList.toggle("click-client-img-box"))

    downbtn.textContent === "Revele"? downbtn.textContent="Hide": downbtn.textContent === "Hide"? downbtn.textContent = "Revele" : "";
});
