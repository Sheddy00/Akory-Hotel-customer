// Ajoutez un gestionnaire d'événement pour le bouton "Book now"
document.getElementById("booknow").addEventListener("click", () => {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const checkInDate = document.getElementById("Check-in-date").value;
    const checkOutDate = document.getElementById("Check-out-date").value;
    const quantity = document.getElementById("quantity").value;
    const roomId = document.getElementById("res-room-id").innerText; 

    const reservationData = {
        date_arrived: checkInDate,
        leaving_date: checkOutDate,
        number_of_person: quantity,
        is_cancelled: false,
        id_customer: null, // À déterminer en fonction de votre logique d'authentification
        id_room: roomId
    };

    fetch("http://localhost:8000/reservation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationData)
    })
    .then(response => response.json())
    .then(data => {
        // Gérer la réponse du serveur (par exemple, afficher un message de succès)
    })
    .catch(error => {
        // Gérer les erreurs (par exemple, afficher un message d'erreur)
        console.error("Error:", error);
    });
});
