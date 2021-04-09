function main(){
    let isDown=false;
    var offset={x:0,y:0}
    var target;
    document.addEventListener("mousedown",event=>{
        if(event.target.tagName=="DIV"){
            isDown=true;
            target=event.target;
            offset[0]=target.offsetLeft-event.clientX ;
            offset[1]=target.offsetTop-event.clientY;
        } 
    });
    
    document.addEventListener("mousemove",event=>{
        if(isDown){
            target.style.left=`${event.clientX+offset[0]}px`;
            target.style.top = `${event.clientY +offset[1]}px`;
        }
    });
    
    addEventListener("mouseup",event=>{
        isDown=false;
    });
}
main();




