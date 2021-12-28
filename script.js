//Created one div and styled it
let div= document.createElement("div");
let div2= document.createElement("div");
let div3= document.createElement("div");
document.getElementById("mini").append(div);
document.getElementById("div").appendChild(div2)
div.style.width="50px";
div.style.height="50px";
div.style.color= "green";
div.style.background="red";
div.innerHTML = "Testing";


let array= [];
function divBlock(){
for (let i=0; i<257 ;i++){
    array[i]= div;
    document.getElementById("container").append(array[i]);
}
}

divBlock();

