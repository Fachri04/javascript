console.log("looping for");
for (let i = 0; i < 5; i++){
    console.log(i+1, "Play")
}

console.log("looping while");
let i = 0 
while ( i < 5 ){
    console.log(i+1, "Games")
    i++;
}

console.log("looping do while");
let j = 0;
do{
    console.log(j+1, "With");
    j++;
} while( j < 5 );

console.log("looping for in");
const k = [1,2,3 ];
for (let key of k){
    console.log(key);
}