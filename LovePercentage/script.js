document.querySelector("button").onclick=calculate;

function calculate(){
     const value = Math.floor(Math.random()*100)+1;
     const name1=document.querySelector(".n1").value;
     const name2=document.querySelector(".n2").value;
     if(name1.length===0||name2.length===0){
        document.querySelector(".ans").innerHTML=("Please fill the name");
     }
     else if(name1==="aman" || name2=="aman"|| name1==="hariprasad"
        || name2==="hariprasad"
     )
     {
        document.querySelector(".ans").innerHTML=("100%"+" Love Detected! ");
     }
     else{
        document.querySelector(".ans").innerHTML=(value+"%"+" Love Detected! ");
     }
}