const $addRed=document.querySelector(".add-red");
const $addBtn=document.querySelector(".add-btn");
const $deleteBtn=document.querySelector(".delete-btn");
const $textBtn=document.querySelector(".text-btn");
const $text=document.querySelector(".txt");
const $resetBtn=document.querySelector(".reset-btn");
const $toggleBtn=document.querySelector(".toggle-btn");
const $imageBtn=document.querySelector(".image-btn");

const img='<img src= https://i.imgur.com/69NjYBH.png>';
var isOpacity=false;

$addRed.addEventListener("click",event=>{
    boxs=document.querySelectorAll(".box");
    for(var i=0; i<boxs.length;i++){
        boxs[i].className="box red";
    }
    console.log($box.className);
})

$addBtn.addEventListener("click",event=>{
    child=document.createElement('div');
    child.className="box";
    document.body.appendChild(child);
})
$deleteBtn.addEventListener("click",event=>{
    document.querySelector(".box").remove();
})

$textBtn.addEventListener("click",event=>{
    var boxs=document.querySelectorAll(".box");
    for(var i=0; i<boxs.length;i++){
        boxs[i].innerHTML=$text.value;
    }
})

$resetBtn.addEventListener("click",event=>{
    var boxs=document.querySelectorAll(".box");
    console.log(event.target);
    for(var i=0; i<boxs.length;i++){
        boxs[i].remove();
    }
})

$toggleBtn.addEventListener("click",event=>{
    const $boxs=document.querySelectorAll(".box");
    var opacity=isOpacity ? 100:0
    isOpacity=!isOpacity;
    for(var i=0; i<$boxs.length;i++){
        $boxs[i].style.opacity=opacity;
    }
})

$imageBtn.addEventListener("click",event=>{
    $box=document.querySelector(".box");
    if($box==null){
        child=document.createElement('div');
        child.className="box";
        document.body.appendChild(child);  
        $box=child;
    }
    $box.innerHTML=img;
})
