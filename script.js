//Created one div and styled it
/*let div= document.createElement("div");
document.getElementById("mini").append(div);

div.style.width="50px";
div.style.height="50px";
div.style.color= "green";
div.style.background="red";
div.innerHTML = "Testing";
*/

/*
function divBlock(grid){
for (let i=0; i<grid ;i++){
    let row= document.getElementById("mini").append(div);
    container.appendChild(row);
        row.style.width="50px";
        row.style.height="50px";
        row.style.color= "green";
        row.style.background="red";
        row.innerHTML = "Testing";

}
}

divBlock(100);
*/


function divBlock() {
    for (let i=0; i<3;i++){
        let row= document.createElement('div');
        row.className = "row";
     for (let j=0; j<3 ;j++){
        let box = document.createElement('div');
               box.className = "box";
               row.appendChild(box);
    }
        document.getElementById('container').appendChild(row);
    
    }
    }
    divBlock();
    
    
    
    
    
