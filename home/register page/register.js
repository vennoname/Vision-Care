let btnSubmit = document.getElementById("submit");


   // Add a click event listener
   btnSubmit.addEventListener("click", function() {
    let firstName = document.getElementById("first").value;

    console.log("Button clicked! First Name:", firstName);

    document.getElementById("first").value = '';

    

});

btnSubmit.addEventListener("click", function() {
    let lastName = document.getElementById("last").value;

    console.log("Button clicked! Last Name:", lastName);

    document.getElementById("last").value = '';})


    btnSubmit.addEventListener("click", function() {
        let emailaddress = document.getElementById("email").value;
    
        console.log("Button clicked!  Email address:", emailaddress);
    
        document.getElementById("email").value = '';})

        btnSubmit.addEventListener("click", function() {
            let password = document.getElementById("password").value;
        
            console.log("Button clicked!  Password:", password);
        
            document.getElementById("password").value = '';})

            btnSubmit.addEventListener("click", function() {
                let phone = document.getElementById("phone").value;
            
                console.log("Button clicked!  Phone:", phone);
            
                document.getElementById("phone").value = '';})

                btnSubmit.addEventListener("click", function() {
                    let select = document.getElementById("select").value;
                
                    console.log("Button clicked!  Gender:", select);
                
                    document.getElementById("select").value = '';})