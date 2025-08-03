//////////// question no 1

var first_Name = "Owais"
var last_Name = " Rehman"
var message = first_Name + last_Name

alert(message) //result will be "Owais Rehman"

/////////// question 2

{
    var a = "5"
    var b = 2
    var result = a + b

    console.log(result) } // result is 52

// Explanation : the result will be 52 because the value of a which is in inverted commas so it'll be recognized as a string value so instead of directly adding b value to a it'll combine both values and give 52 output

/////////// question 3

{
    var a = 10
    var b = 5
    var c = ++a + b-- + --b
    
    console.log(c) // result will be 19
}

// Explanation : here firstly, by pre-increament in the value of A it'll be 11 and after post-decreament in the value of b it'll be same in the first step and in the other step it'll be deducted so it'll be 5, 11 + 5 = 16 . Now, pre-decreament in b here the value of b will be 4 due to the recently deducted b value and after deducting one more it'll be 3 now so 16 + 3 = 19.


/////////// question 4

{
    var a = "20"
    var b = 3
    var result = +a * b

    console.log(result) // result will be 60 
}

/////////// question 5

{
    var a = 4
    var result = a % 3

    console.log(result) // result will be 1 reminder
}

/////////// question 6

{
    var student = "hassan"
    var score = 88

    console.log (student,"got",score,"marks in javascript")
}

/////////// question 7

{
    var x = 5
    var y = x++ + ++x - --x

    console.log(y) // result will be 6
}

// Explanation : here first the value of x is 5 and it's pre-increament so the 1 will be added in the next step. Second, the value of x will be 6 because it's second step so 6+1=7 and 5+7=12. Third, it's pre-decreament in the third step so current value of x is 7 after pre-incr and after pre-decr it'll be 6 and 12-6=6.



/////////// question 8

// {
//     var name legal
//     varname illegal

//     var 123owais illegal
//     var owais123 legal

//     var owais-rehman illegal
//     var owais_rehman legal

//     var 3rdNumber illegal
//     var _3rd_Number or _3rdNumber legal

//     var promptName illegal
//     var prompt("write you name") legal

// }



/////////// question 9

{
    var perfume_price = 2500
    var perfume_quantity = 4
    var bill = perfume_price * perfume_quantity

    console.log(bill) //result will be 10k
}

/////////// question 10

{
    var a = 4 % 3 + 2

    console.log(a) //result will be 3
}

/////////// bonus question

{
    let msg = "total:" + (5 + 5) * 2

    console.log(msg) //result will be "total:20"
}


// Explanation : the string will be directly combined with the numbers after calculation


