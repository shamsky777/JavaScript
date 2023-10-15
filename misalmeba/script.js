document.getElementById("submitBtn").addEventListener("click", function() {
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let fullName = firstName + ' ' + lastName;
    document.getElementById("fullNameLabel").innerHTML = "მოგესალმებით " + fullName;
});