
    
    
    function sideBarOpen() {
        const Sidebar = document.querySelector('.Sidebar')
        Sidebar.style.right = '0vw'
    }

    function sideBarClose() {
        const Sidebar = document.querySelector('.Sidebar')
        Sidebar.style.right = '-60vw'
    }

    // NAVBAR FUNCTIONS

    function restrictFN() {
        let char = document.getElementById('firstName').value
        if ( char.length <= 3 && char.length > 0) {
            alert("first name must be greater than 3 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if (char.length >= 10) {
            alert("first name must be less than 10 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if ( char.length == 0 ) {
            alert("First name required")
            document.getElementById('firstName').style.border = "1px solid Red"
        } else if (char.length > 0) {
            document.getElementById('firstName').style.border = "1px solid rgb(197, 196, 196)"
            console.log(`first Name : ${char}`)
        }
        
    }

        function restrictSN() {
        let char = document.getElementById('Surname').value
        if ( char.length <= 3 && char.length > 0) {
            alert("Surname must be greater than 3 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if (char.length >= 10) {
            alert("Surname must be less than 10 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if ( char.length == 0 ) {
            alert("Surname required")
            document.getElementById('Surname').style.border = "1px solid Red"
        } else if (char.length > 0) {
            document.getElementById('Surname').style.border = "1px solid rgb(197, 196, 196)"
            console.log(`Surname : ${char}`)
        }
        
    }


        function restrictEmail() {
        let char = document.getElementById('Email').value
        if ( char.length <= 3 && char.length > 0) {
            alert("Email must be greater than 3 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if (char.length >= 26) {
            alert("Email must be less than 10")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if ( char.length == 0 ) {
            alert("Email required")
            document.getElementById('Email').style.border = "1px solid Red"
        } else if (char.length > 0) {
            document.getElementById('Email').style.border = "1px solid rgb(197, 196, 196)"
            console.log(`Email/Number : ${char}`)
        }
         
        
    }


        function restrictPassword() {
        let char = document.getElementById('Pass').value
        if ( char.length <= 3 && char.length > 0) {
            alert("Password must be greater than 3 characters")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if (char.length >= 10) {
            alert("Password must be less than 10")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if ( char.length == 0 ) {
            alert("password required")
            document.getElementById('Pass').style.border = "1px solid Red"
        } else if (char.length >= 1) {
            document.getElementById('Pass').style.border = "1px solid rgb(197, 196, 196)"
            console.log(`password : ${char}`)
        }

        
    }
    
        function selectvalue() {
            let a = document.getElementById('Date').value
            let b = document.getElementById('Month').value
            let c = document.getElementById('year').value
            console.log(`Date of birth : ${a}/${b}/${c}`)
        }

        

        function restrictall() {
            restrictPassword()
            restrictEmail()
            restrictSN()
            restrictFN()
            selectvalue()
        }


    