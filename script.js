function divBlock(boxnum) {
    for (let i=0; i<boxnum;i++){
        let row= document.createElement('div');
        row.className = "row";
        row.addEventListener('mouseover', changeColor);
        function changeColor(){
            row.style.background ="pink";}
     for (let j=0; j<boxnum;j++){
        let box = document.createElement('div');
            box.addEventListener('mouseover', changeColor);
               box.className = "box";
               row.appendChild(box);
               function changeColor(){
                box.style.background ="pink";}
               
    }
        document.getElementById('mini').appendChild(row); 
        
    }
    
}
    divBlock(16);

   




    
/*
    let x=document.getElementsByClassName(".box");

    x.addEventListener("mouseover", function(event){
        event.target.style.color = "orange";
    
    });
*/    
    
//Scrap code
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
