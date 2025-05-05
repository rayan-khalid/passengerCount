let Countel=document.getElementById("count-el");
let count=0;
function increment(){
    count+=1;
    Countel.innerText=count;
}

let Saveel=document.getElementById("save-el");

function save(){
    let countStr = count+" , ";
    Saveel.textContent+=countStr;
    Countel.innerText=0;
    count=0;
}
