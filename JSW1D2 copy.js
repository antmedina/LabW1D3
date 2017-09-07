var friends = ["Rick","Kenneth","Sebastian","Razvan","Matt"]
var a=3

for (var i=0; i<friends.length; i++ ) {
while(a>=3){  
     console.log(a+" lines of code in the file, "+a+" lines of code; "+friends[i]+ " strikes one out, clears it all out, "+(a-1)+" lines of code in the file!");
    a--;
}
do{
console.log(a+ " lines of code in the file, "+a+ " lines of code; "+friends[i]+" strikes one out, clears it all out, " +(a-1)+" line of code in the file!");
a--;
}while(a===2);
do{
   console.log (a+ " line of code in the file, "+a+ " line of code; "+friends[i]+" strikes one out, clears it all out, no more lines of code in the file!");
a--;    
}
    while(a===1);
    console.log("");   
    a=99;
}
