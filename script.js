let text =document.getElementById("area");
let btn = document.getElementById("addnote");
let color = document.getElementById("color");
let message = document.getElementById("message");
let notes_con =document.getElementById("notes_con20");

function addnote(){
    if(text.value===""){
        alert("please add a note");
        return ;
    }
    message.innerText ="";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");


    div.appendChild(p,cross_btn);
    div.appendChild(cross_btn);

    cross_btn.innerText ="X";
    p.innerText =text.value;

    div.style.backgroundColor=color.value;

    notes_con.appendChild(div);
    console.log(div);
    
    text.value="";

    cross_btn.addEventListener("click",function() {
        div.style.display ="none";
    });


}
btn.addEventListener("click",addnote);
