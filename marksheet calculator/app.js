function getInfo() {
    return {
        Name: document.getElementById('studentName').value,
        Maths: Number(document.getElementById('Num1').value),
        Computer: Number(document.getElementById('Num2').value),
        English: Number(document.getElementById('Num3').value),
        physics: Number(document.getElementById('Num4').value),
        Urdu: Number(document.getElementById('Num5').value)
    };
}



function getAllMarks() {
    const { Maths,Computer,English,physics,Urdu } = getInfo()
    let totalMarks = Maths+Computer+English+physics+Urdu
    console.log(`TOTAL MARKS : ${totalMarks}`)
}



function percentage() {
    const { Maths,Computer,English,physics,Urdu } = getInfo()
    let totalMarks = Maths+Computer+English+physics+Urdu
    let percent = (totalMarks/500)*100
    console.log(`PERCENTAGE : ${percent.toFixed(2)}`)
}

function grade() {
    const { Maths,Computer,English,physics,Urdu } = getInfo()
    let totalMarks = Maths+Computer+English+physics+Urdu
    let percent = (totalMarks/500)*100
    let grade;
    if ( percent >=90 && percent <=100) {
    grade = "excellent you got A"
    } else if ( percent >=70 && percent <=89) {
    grade = "great effort you got B"
    } else if ( percent >=60 && percent <=69) {
    grade = "good you got C"
    } else if ( percent >=50 && percent <=59) {
    grade = "you got D"
    } else if ( percent >=0 && percent <=49) {
    grade = "Failed"
    }

    console.log(grade)
    
}

function gif() {
    let video = document.querySelector(".video")
    video.style.display = "block"
}

function makeItSubmit() {

    let formId = document.getElementById('form')
    formId.style.display = "none"
    gif()
    console.log(`STUDENT NAME : ${getInfo().Name} out of 100`)
    console.log(`MATHS : ${getInfo().Maths} out of 100`)
    console.log(`COMPUTER : ${getInfo().Computer} out of 100`)
    console.log(`PHYSICS : ${getInfo().physics} out of 100`)
    console.log(`URDU : ${getInfo().Urdu} out of 100`)
    console.log(`ENGLISH : ${getInfo().English} out of 100`)
    getAllMarks()
    percentage()
    grade()
}











































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


