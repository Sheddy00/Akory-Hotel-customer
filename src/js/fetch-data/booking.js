document.getElementById("booknow").addEventListener("click", async () => {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const checkInDate = document.getElementById("Check-in-date").value;
    const checkOutDate = document.getElementById("Check-out-date").value;
    const numberOfPersons = document.getElementById("quantity").value;

    // Vérifier si les informations du client sont valides
    if (firstName && lastName && mobile && email) {
        // Effectuer la requête pour récupérer les informations du client
        const customerIdResponse = await fetch(`/customer/${id_customer}`);
        const customerData = await customerIdResponse.json();
        
        if (customerIdResponse.ok) {
            // Utiliser les données du client pour l'ID de réservation
            const customerId = customerData.id; // Assurez-vous que le nom de la clé est correct
            
            // Effectuer la requête d'insertion de réservation
            const reservationData = {
                date_arrived: checkInDate,
                leaving_date: checkOutDate,
                number_of_person: numberOfPersons,
                is_cancelled: false, // Mettez la valeur appropriée pour l'annulation
                id_customer: customerId,
                id_room: 1, // Mettez l'ID de la chambre appropriée
            };

            try {
                const response = await fetch("/reservation", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(reservationData),
                });

                if (response.ok) {
                    const reservationResult = await response.json();
                    console.log("Réservation effectuée avec succès:", reservationResult);
                } else {
                    console.error("Erreur lors de la réservation:", response.statusText);
                }

                alert("Réservation effectuée avec succès!");
            } catch (error) {
                console.error("Erreur lors de la requête d'insertion:", error);
            }
        } else {
            console.error("Erreur lors de la récupération des informations du client");
        }
    } else {
        console.error("Veuillez remplir toutes les informations du client");
        alert("Veuillez remplir toutes les informations du client");
    }
});
