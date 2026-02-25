document.getElementById("userForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("genderError").innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Email validation (simple regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // Phone validation (10 digits only)
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerText = "Enter valid 10-digit phone number";
        isValid = false;
    }

    // Gender validation
    if (gender === null) {
        document.getElementById("genderError").innerText = "Please select gender";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("userForm").reset();
    }

});