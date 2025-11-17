function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const err = document.getElementById("err");



    if (name === "" || email === "" || age === "" || (!male && !female)) {
        err.innerHTML = "Please fill all the fields!";
        return false;
    }

    if (!email.includes("@")) {
        err.innerHTML = "Please enter a valid email!";
        return false;
    }

    if (isNaN(age)) {
        err.innerHTML = "Please enter a valid age!";
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}