
// let login_btn=document.getElementById('submit');
// let singUpGoogle=document.getElementsByClassName('s_u_google')[0];

// // login

// login_btn.addEventListener('submit',async function(event){
//     event.preventDefault();
//     let email=document.getElementById('Email');
//     let passward=document.getElementById('pass');
   


//     try{
//         let response=await fetch('https://orientonline.info/api/login',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 email:email.value,
//                 password:passward.value
//             })
      
//         });

//         const data=await response.json();
//         console.log(data);
//         if(response.ok){
//             alert(`Login successful ${data.message}`);

//             localStorage.setItem("auth_token",data.token);
//         }else {
//             alert(`Login failed ${data.message}`);
//         }


//     }
//     catch(error){
//         console.error(error);
//         alert("Network Error : Could not connect to the server. ");
//     }
   
// });


// let login_form = document.getElementById('login-form'); // تأكد أن لديك <form id="login-form">

// login_form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     let email = document.getElementById('Email');
//     let password = document.getElementById('pass');

//     if (!email || !password) {
//         alert("عناصر الإدخال غير موجودة في الصفحة!");
//         return;
//     }

//     try {
//         let response = await fetch('https://orientonline.info/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         });

//         const data = await response.json();
//         console.log(data);

//         if (response.ok && data.token) {
            
//             localStorage.setItem("auth_token", data.token);
//             alert(`Login successful`).setInterval(()=>{
//                 window.location.href = 'index2.html';
//             })
//         } else {
//             alert(`Login failed: ${data.message || "Invalid credentials"}`);
//         }

//     } catch (error) {
//         console.error("Error:", error);
//         alert("Network Error: Could not connect to the server.");
//     }
// });


// let login_form = document.getElementById('login-form');

// login_form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     let email = document.getElementById('Email');
//     let password = document.getElementById('pass');

//     if (!email || !password) {
//         alert("عناصر الإدخال غير موجودة في الصفحة!");
//         return;
//     }

//     try {
//         let response = await fetch('https://orientonline.info/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         });

//         console.log("Raw Response:", response);
//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//             alert(`Login failed: ${response.status} ${response.statusText}`);
//             return;
//         }

//         let data;
//         try {
//             data = await response.json();
//         } catch (jsonError) {
//             console.error("Invalid JSON response", jsonError);
//             alert("Invalid server response. Please try again later.");
//             return;
//         }

//         console.log("Parsed Data:", data);

//         if (data?.token) {
//             alert(`Login successful: ${data?.message || "Success"}`);
//             localStorage.setItem("auth_token", data.token);
//         } else {
//             alert(`Login failed: ${data?.message || "Invalid credentials"}`);
//         }

//     } catch (error) {
//         console.error("Network Error:", error);
//         alert("Network Error: Could not connect to the server.");
//     }
// });









// let login_form = document.getElementById('login-form');

// login_form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     let email = document.getElementById('Email');
//     let password = document.getElementById('pass');

//     if (!email || !password) {
//         alert("عناصر الإدخال غير موجودة في الصفحة!");
//         return;
//     }

//     try {
//         let response = await fetch('https://orientonline.info/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         });

//         console.log("Raw Response:", response);
//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//             alert(`Login failed: ${response.status} ${response.statusText}`);
//             return;
//         }

//         let data;
//         try {
//             data = await response.json();
//         } catch (jsonError) {
//             console.error("Invalid JSON response", jsonError);
//             alert("Invalid server response. Please try again later.");
//             return;
//         }

//         console.log("Parsed Data:", data);

//         if (data?.token) {
//             alert(`Login successful! Welcome, ${data?.user?.name || "User"}`);
//             localStorage.setItem("auth_token", data.token);
//             window.location.href = '../index2.html';
//         } else {
//             alert(`Login failed: Invalid credentials`);
//         }

//     } catch (error) {
//         console.error("Network Error:", error);
//         alert("Network Error: Could not connect to the server.");
//     }
// });





// let login_form = document.getElementById('login-form');
// let login_btn = document.getElementById('submit'); // Login button
// let email = document.getElementById('Email');
// let password = document.getElementById('pass');

// // Create error message containers
// let emailError = document.createElement('p');
// emailError.style.color = 'red';
// emailError.style.fontSize = '14px';
// emailError.style.marginTop = '5px';
// email.insertAdjacentElement('afterend', emailError);

// let passwordError = document.createElement('p');
// passwordError.style.color = 'red';
// passwordError.style.fontSize = '14px';
// passwordError.style.marginTop = '5px';
// password.insertAdjacentElement('afterend', passwordError);

// login_form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     // Reset error messages
//     emailError.textContent = '';
//     passwordError.textContent = '';

//     let isValid = true;

//     // 🔹 Check if email is not empty
//     if (email.value.trim() === "") {
//         emailError.textContent = "Email field cannot be empty!";
//         isValid = false;
//     }

//     // 🔹 Check if password is at least 6 characters
//     if (password.value.length < 6) {
//         passwordError.textContent = "Password must be at least 6 characters long!";
//         isValid = false;
//     }

//     if (!isValid) return; // Stop if there are validation errors

//     // 🔹 Disable button while submitting
//     login_btn.disabled = true;
//     login_btn.textContent = "Logging in...";

//     try {
//         let response = await fetch('https://orientonline.info/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         });

//         console.log("Raw Response:", response);
//         console.log("Response Status:", response.status);

//         if (!response.ok) {
//             passwordError.textContent = `Login failed: ${response.status} ${response.statusText}`;
//             return;
//         }

//         let data;
//         try {
//             data = await response.json();
//         } catch (jsonError) {
//             console.error("Invalid JSON response", jsonError);
//             passwordError.textContent = "Invalid server response. Please try again later.";
//             return;
//         }

//         console.log("Parsed Data:", data);

//         if (data?.token) {
//             // Redirect or handle login success
//             localStorage.setItem("auth_token", data.token);
//             window.location.href = "../index2.html"; // Change this to your redirect page
//             email.value="";
        
//         } else {
//             passwordError.textContent = "Invalid credentials. Please check your email and password.";
//         }

//     } catch (error) {
//         console.error("Network Error:", error);
//         passwordError.textContent = "Network Error: Could not connect to the server.";
//     } finally {
//         // 🔹 Re-enable the button after submission
//         login_btn.disabled = false;
//         login_btn.textContent = "Log in";
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    let login_form = document.getElementById("login-form");
    let login_btn = document.getElementById("submit");
    let email = document.getElementById("Email");
    let password = document.getElementById("pass");
    let rememberDevice = document.getElementById("cb");
    let togglePassword = document.querySelector(".icon-eye");

    // Create error message containers
    let emailError = document.createElement("p");
    emailError.style.color = "red";
    emailError.style.fontSize = "14px";
    emailError.style.marginTop = "5px";
    email.insertAdjacentElement("afterend", emailError);

    let passwordError = document.createElement("p");
    passwordError.style.color = "red";
    passwordError.style.fontSize = "14px";
    passwordError.style.marginTop = "5px";
    password.insertAdjacentElement("afterend", passwordError);

    // Load saved email if "Remember this device" was checked before
    if (localStorage.getItem("rememberedEmail")) {
        email.value = localStorage.getItem("rememberedEmail");
        rememberDevice.checked = true;
    }

    // Toggle Password Visibility
    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePassword.src = "../images/eye-solid.svg"; // Change icon to open eye
        } else {
            password.type = "password";
            togglePassword.src = "../images/eye-slash.png"; // Change icon to closed eye
        }
    });

    login_form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Reset error messages
        emailError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

        // 🔹 Check if email is not empty
        if (email.value.trim() === "") {
            emailError.textContent = "Email field cannot be empty!";
            isValid = false;
        }

        // 🔹 Check if password is at least 6 characters
        if (password.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long!";
            isValid = false;
        }

        if (!isValid) return; // Stop if there are validation errors

        // 🔹 Save email if "Remember this device" is checked
        if (rememberDevice.checked) {
            localStorage.setItem("rememberedEmail", email.value);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        // 🔹 Disable button while submitting
        login_btn.disabled = true;
        login_btn.textContent = "Logging in...";

        try {
            let response = await fetch("https://orientonline.info/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });

            console.log("Raw Response:", response);
            console.log("Response Status:", response.status);

            if (!response.ok) {
                passwordError.textContent = `Login failed: ${response.status} ${response.statusText}`;
                return;
            }

            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                console.error("Invalid JSON response", jsonError);
                passwordError.textContent = "Invalid server response. Please try again later.";
                return;
            }

            console.log("Parsed Data:", data);

            if (data?.token) {
                // Save auth token
                localStorage.setItem("auth_token", data.token);
                window.location.href = "./index2.html"; // Redirect after login
            } else {
                passwordError.textContent = "Invalid credentials. Please check your email and password.";
            }
        } catch (error) {
            console.error("Network Error:", error);
            passwordError.textContent = "Network Error: Could not connect to the server.";
        } finally {
            // 🔹 Re-enable the button after submission
            login_btn.disabled = false;
            login_btn.textContent = "Log in";
        }
    });
});





