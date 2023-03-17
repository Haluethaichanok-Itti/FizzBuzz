
function fizzbuzz(n) {
    let arr = [];
    let num=0;
   
for(let i = 1; i<=n;i++){

if(i%5===0 && i%3===0){
arr.push('FizzBuzz');
}
else if(i%5===0){
  arr.push('Buzz');

}
else if(i%3===0){
   arr.push('Fizz');
}
else{
   arr.push(i);

}

}
return arr;
};


console.log(fizzbuzz(16));

// Leave this line for testing:
module.exports = fizzbuzz;