var sum=0

while(1){

var input=window.prompt("숫자를 입력해주세요")

if(input==null){

break

}

sum=sum+Number(input);

}
alert(sum)