const $addRed=document.querySelector(".add-red");
const $addBtn=document.querySelector(".add-btn");
const $deleteBtn=document.querySelector(".delete-btn");
const $textBtn=document.querySelector(".text-btn");
const $text=document.querySelector(".txt");
const $resetBtn=document.querySelector(".reset-btn");
const $toggleBtn=document.querySelector(".toggle-btn");
const $imageBtn=document.querySelector(".image-btn");

const boxString=".box";
var isOpacity=false;


function addRed(){
    $addRed.addEventListener("click",event=>{
        boxs=document.querySelectorAll(boxString);
        for(var i=0; i<boxs.length;i++){
            boxs[i].className="box red";
        }
    })
    
}

function addClick(){
    $addBtn.addEventListener("click",event=>{
        child=document.createElement('div');
        child.className="box";
        document.body.appendChild(child);
    })
    
}

function deleteClick(){
    $deleteBtn.addEventListener("click",event=>{
        document.querySelector(boxString).remove();
    })
    
}

function textChage(){
    $textBtn.addEventListener("click",event=>{
        var boxs=document.querySelectorAll(boxString);
        for(var i=0; i<boxs.length;i++){
            boxs[i].innerHTML=$text.value;
        }
    })
    
}

function resetClick(){
    $resetBtn.addEventListener("click",event=>{
    var boxs=document.querySelectorAll(boxString);
    for(var i=0; i<boxs.length;i++){
        boxs[i].remove();
    }
})
}
function opacityClick(){
    $toggleBtn.addEventListener("click",event=>{
        const $boxs=document.querySelectorAll(boxString);
        var opacity=null;
        if($boxs[0].style.opacity==''){
            $boxs[0].style.opacity=100;
        }
        opacity=($boxs[0].style.opacity==0) ? 100:0
        console.log(opacity);
        for(var i=0; i<$boxs.length;i++){
            $boxs[i].style.opacity=opacity;
        }
    })
    
}
function imageClick(){
    const img='<img src= https://i.imgur.com/69NjYBH.png>';
    $imageBtn.addEventListener("click",event=>{
        $box=document.querySelector(boxString);
        if($box==null){
            child=document.createElement('div');
            child.className="box";
            document.body.appendChild(child);  
            $box=child;
        }
        $box.innerHTML=img;
    })
}

addRed();
addClick();
deleteClick();
textChage();
resetClick();
opacityClick();
imageClick();