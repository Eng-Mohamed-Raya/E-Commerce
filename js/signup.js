
document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let signupButton = document.getElementById("sign_btn");
    signupButton.disabled = true; 
    signupButton.textContent = "⏳ Processing...";

    let firstName = document.getElementById("furname").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confirm_pass").value;
    let phone = document.getElementById("phone").value.trim();
    let address = "Egypt";  

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        signupButton.textContent = "Sign Up";
        signupButton.disabled = false;
        return;
    }

    let userData = {
        name: `${firstName} ${surname}`,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        phone: phone,
        address: address,
    };

    console.log("Sending data:", userData);

    try {
        let response = await fetch("https://orientonline.info/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });

        let data = await response.json();

        if (response.ok) {
            signupButton.textContent = "Sign Up Is Successful";
            firstName="";
            surname="";
            email="";
            password="";
            confirmPassword="";
            phone="";
            alert(` Registration successful! 🎉\nMessage: ${data.message || "You have registered successfully!"}`);

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1000); 

        } else {
            console.error("Error in registration:", data);
            alert(` Registration failed!\nError: ${data.message || JSON.stringify(data)}`);
            signupButton.textContent = "Sign Up";
            signupButton.disabled = false;
        }

    } catch (error) {
        console.error(" Network or Server Error:", error);
        alert(" Error in registration: " + error.message);
        signupButton.textContent = "Sign Up";
        signupButton.disabled = false;
    }
});

