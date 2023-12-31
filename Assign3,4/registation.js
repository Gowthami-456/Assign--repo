function submitForm() {
    // Gather form data
    const firstName = document.getElementById("Name").value;
    const lastName = document.getElementById("E mail").value;
    
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (gender.length === 0) {
        alert("Please select a gender.");
        return;
    }

    
    document.getElementById("popupFirstName").textContent = firstName;
    
    
    
    document.getElementById("popupGender").textContent = Array.from(gender, g => g.value).join(", ");
    
    document.getElementById("popupEmail").textContent = email;
    

    
    document.getElementById("popup").style.display = "block";

    
    resetForm();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}