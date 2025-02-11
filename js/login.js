
let login_btn=document.getElementById('submit');
let singUpGoogle=document.getElementsByClassName('s_u_google')[0];

// login

login_btn.addEventListener('submit',async function(event){
    event.preventDefault();
    let email=document.getElementById('Email');
    let passward=document.getElementById('pass');
   


    try{
        let response=await fetch('https://orientonline.info/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email.value,
                password:passward.value
            })
        });

        const data=await response.json();

        if(response.ok){
            alert(`Login successful ${data.message}`);

            localStorage.setItem("auth_token",data.token);
        }else {
            alert(`Login failed ${data.message}`);
        }


    }
    catch(error){
        console.error(error);
        alert("Network Error : Could not connect to the server. ");
    }
   
});