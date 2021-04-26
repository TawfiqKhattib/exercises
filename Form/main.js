const vlidate = function() {
    document.getElementById("msg").textContent = ""
    if (document.getElementById("name").value.length <= 2) {
        console.log("name less than 2 char or name missing");
        document.getElementById("msg").textContent += " name less than 2 char or name missing, ";
    }
    if (parseInt(document.getElementById("salary").value) < 10000 || parseInt(document.getElementById("salary").value) > 16000 || document.getElementById("salary").value == "") {
        console.log("salary have to be between 10000-16000");
        document.getElementById("msg").textContent += " salary have to be between 10000-16000, ";
    }
    if (document.getElementById("phone").value.length != 10) {
        console.log("phon have to be 10 digits");
        document.getElementById("msg").textContent += " phon have to be 10 digits";
    }
    if (document.getElementById("msg").textContent === "") {
        const hide = document.createElement("h4");
        hide.textContent = "welcome to form";
        document.getElementById("container").style.display = "none"
        document.body.appendChild(hide)
    }
}