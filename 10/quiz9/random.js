function random(min, max){
    if(max===undefined){
        return min-1;
     }
    if(isNaN(min) ||isNaN(max)){
        return -1;
    }
    return (Math.random() *(max - min))+min;

}

export default random;