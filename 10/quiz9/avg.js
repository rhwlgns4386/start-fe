function avg(...arg){
    var sum=0;
    var count=0
    for(var i=0;i<arg.length;i++){
        console.log()
        if(typeof (arg[i])==='object'){
            arg[i].forEach(element => {
                if(!isNaN(element)){
                    sum+=element;
                    count+=1;
                }
            });
        }
        else{
            if(!isNaN(arg[i])){
                sum+=arg[i];
                count+=1;
            } 
        }
    }
    return sum/count;
}

export default avg;