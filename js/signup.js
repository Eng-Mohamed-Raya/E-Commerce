let signup=document.getElementById("sign_btn");


signup.addEventListener("submit",async function(event) {

    event.preventDefault();
    let fname=document.getElementById("furname").value;
    let sname=document.getElementById("Surname").value;
    let email=document.getElementById("Email").value;
    let password=document.getElementById("pass").value;
    let confirm_password=document.getElementById("confiarm_pass").value;
    let gender=document.getElementById("gender").value;
    
    if(password!=confirm_password){
        alert("Passwords do not match");
        return;
    }
    console.log("sending data :",{fname,sname,email,password,confirm_password});

    try{
        let response=await fetch("https://orientonline.info/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({fname,sname,email,password,confirm_password,gender})
        });

        const data=await response.json();
        if(response.ok){
            console.log("regestraction successful : ",data);
            alert("Registration successful ",data.message);
            
        }else{
            console.log("error in registration : ",data);
            alert("Error in registration ",data.message);
        }

    } 
    catch(error){
        console.error("Error in registration : ",error);
        alert("Error in registration ",error.message);
    }



});

