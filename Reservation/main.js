const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservation = function() {
    let name = document.getElementById("nameIn").value
    if (name in reservations) {
        if (reservations[name].claimed) {
            document.getElementById("msg").textContent = "you already climed"
        } else {
            document.getElementById("msg").textContent = "welcome " + name
        }
    } else {
        document.getElementById("msg").textContent = "there is nothing under their name"
    }
}