function afficherDonnees(data) {
    const roomListDiv = document.querySelector(".room_conainer");
    // Parcourir les données JSON et les ajouter à l'interface
    data.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.innerHTML = `
        <div class="room_items">
            <div class="room_image_content"
                style="background-image: url(../../public/assets/images/room/room-1.jpg);">
                ${room.number}
            </div>
            <div class="room_details_content">
                <div class="name_rate">
                    <p id="room_type_name">${room.room_type}</p>
                    <div class="room_rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>

                <p id="room_hotel">
                <div id="room_location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${room.hotel} </span> <span id="location"> Antananarivo</span>
                </div>
                </p>
                <div class="room_description_with_prommotion">
                    This is your chance to take advantage, as the price is reduced by
                    <span id="netPrice"> ${room.promotions_day}Ar/nigth</span>
                    until the end of promotion
                    <span id="promotion_name"><a href="../../index.html"> Sarika</a></span> on
                    <span id="promotion_end"> 06 janvier 2024</span> .
                    While the net price is:
                    <span id="net_price"> ${room.price}/night</span>
                </div>
                <div class="room_description_without_prommotion">
                    Even if there are no promotions during this
                    period, the price remains affordable:
                    <span id="net_price"> 2500Ar/night</span>
                </div>
            </div>
            <div class="room_booking_content">
                <p id="booking_now">BOOKING NOW: </p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="room_features_price">
                <div class="features_contain">
                ${room.sea_view ? `<i id="sea_view" class="fa-solid fa-water"></i>`:''}
                ${room.vip_category ? `<span id="vip_category">VIP</span>`:''}
                ${room.hot_water ? `<i id="hot_water" class="fa-solid fa-hot-tub-person"></i>`:''}
                ${room.wifi_available ? `<i id="wifi_available" class="fa-solid fa-wifi"></i>`:''}
                ${room.room_service ? `<i id="room_service" class="fa-solid fa-bell-concierge"></i>`:''}
                ${room.mini_bar ? `  <i id="mini_bar" class="fa-solid fa-champagne-glasses"></i>`:''}
                ${room.flat_screen ? `<i id="flat_screen" class="fa-solid fa-tv"></i>`:''}
                </div>
            </div>
    </div>
    `
        roomListDiv.appendChild(roomDiv);
    });

}


function getRoomsListNetAndGrosPrice(){
    fetch("http://localhost:8000/RoomsListNetAndGrosPrice")
    .then(response => response.json())
    .then(data => afficherDonnees(data))
    .catch(error => console.error("Une erreur s'est produite :", error));
}

getRoomsListNetAndGrosPrice();