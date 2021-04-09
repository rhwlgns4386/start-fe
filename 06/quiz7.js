const $box=document.querySelector(".box");
const $bug=document.getElementById("bug");
const $point=document.getElementById("point");
const $life=document.getElementById("life");
const max=$box.offsetWidth;
const min=$bug.offsetWidth;
var point=parseInt($point.innerText);
var life=parseInt($life.innerText);
var flag=false;
var speed=2000;
var time;

function randomMake(){
    bug.style.left=`${Math.random() *(max -min) }px`;
    bug.style.top=`${Math.random() *(max - min)}px`;
    flag=false;
}
function bugClick(event){
    if(!flag){
        point+=1
        $point.innerText=point;
        flag=true;
    }
    event.stopPropagation();
}
function boxClick(){
    if(life>0){
        life-=1
        $life.innerText=life;
    }
    if(life===0){
        clearInterval(time);
        alert("게임오버")
        return;
    }
}

time=setInterval(randomMake,speed);
$bug.addEventListener("click",bugClick)
$box.addEventListener("click",boxClick)