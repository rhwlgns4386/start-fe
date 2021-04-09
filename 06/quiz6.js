const bnt=document.getElementById("btn");
const num=document.getElementById("num");
const result=document.getElementById("result");
function mul(){
    result.innerHTML=""
    var input=parseInt(num.value);
    if(isNaN(input)){
        alert("숫자를 입력해주세요");
        return;
    }
    for(var i=input;i<input+1;i++){

        for(var j=1;j<10;j++) result.innerHTML+=`${i}*${j}=${i*j}<br>`
    
    }
}

bnt.addEventListener("click",mul);