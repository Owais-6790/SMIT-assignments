// let score = prompt("enter your score ( 1-100 ) ");
// let grade;


// if ( score >=90 && score <=100) {
//     grade = "excellent you got A"
// } else if ( score >=70 && score <=89) {
//     grade = "great effort you got B"
// } else if ( score >=60 && score <=69) {
//     grade = "good you got C"
// } else if ( score >=50 && score <=59) {
//     grade = "you got D"
// } else if ( score >=0 && score <=49) {
//     grade = "unfortunately you Failed"
// }

// console.log (grade)

cities = ["karachi","lahore","faislabad","islamabad","gujrawala","bhawalpur"]
cityToCheck = prompt("Enter your city")

for (let a = 0; a < cities.length; a++) {
   if (cityToCheck === cities[a]) {
        alert("yes it is the cleanest city")
   } else {
    alert("it's not the cleanest city")
   }
   break
}