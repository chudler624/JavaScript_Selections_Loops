// Exercise 1 Section

console.log("Exercise 1\n==========\n");

for(let i=0; i<100; i++)
{
if(i%2==1)
{
   console.log(i)
}
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i=0; i<100; i++)
{
if(i%3==0)
{
    console.log("FIZZ")
}
if(i%5==0)
{
    console.log("BUZZ")
}
if(i%3==0 && i%5==0)
{
    console.log("FIZZBUZZ")
}
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


//Exercise 4 Section
console.log("EXERCISE 4: \n=========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let i =0;
for(i=0; i<n; i++)

{
    if(i==value)
    {console.log("Found Value");
    break;}
}

    if(i != value)
    {
     console.log("Did not find value");
    }



//Exercise 5 Section
console.log("EXERCISE 5: \n=========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let x = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);



