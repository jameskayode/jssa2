// Write a program that prints the numbers from 1 to 100. But for multiples of three,
//  print "Fizz" instead of the number, and for the multiples of five, 
//  print "Buzz". For numbers which are multiples of both three and five, 
//  print "FizzBuzz".
let check=true
let num=1
if (check){


while (num<=100){

if (num%3 && num%5==0){
    console.log("FizzBuzz")
}


else if (num%5==0){
    console.log("Buzz")
}
else if (num%3==0)
{
    console.log("Fizz")
}
else{
    console.log(num)
}
num ++
}

}



// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check 
// if the current number is odd or even, and display a message to the screen.
for (let index = 0; index <=15; index++) {

    if (index%2==0){
        console.log(index + " is Even")
    
    }
    else {
        console.log(index + " is Odd")
    }
    }






    //alternatively using a while for loop i praticed this sir..................

let num1=0


    while(num1<=15){
        if (num1%2==0){
            console.log(num1 + "" + " is even")

        }
        else{
            console.log( num1 + "" + " odd")
        }
        num1++
    }

