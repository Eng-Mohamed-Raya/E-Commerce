document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let email = document.getElementById("Email").value.trim();
    let submitButton = document.querySelector("button[type='submit']");
    
    if (!email) {
        alert("❌ Please enter your email!");
        return;
    }

    // Change button text while checking
    submitButton.textContent = "⏳ Checking...";
    submitButton.disabled = true; // Disable button during the process

    let userData = {
        email: email,
        password: "dummy_password" // Dummy password since login API requires it
    };

    console.log("📤 Sending data:", userData);

    try {
        let response = await fetch("https://orientonline.info/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });

        let data = await response.json();

        if (response.ok) {
            console.log("✅ Email exists:", data);
            window.location.href = "./passward_reset.html"; // ✅ Redirect only if email exists
        } else {
            console.error("❌ Email not found:", data);
            alert("❌ This email is not registered or incorrect password. Please check your details.");
        }

    } catch (error) {
        console.error("🚨 Network or Server Error:", error);
        alert("❌ An error occurred while checking the email. Please try again later.");
    } finally {
        // Restore button text and enable it after process
        submitButton.textContent = "Reset Password";
        submitButton.disabled = false;
    }
});




