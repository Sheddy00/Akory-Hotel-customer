const filterByType = () => {
    const roomTypeSelect = document.querySelector("#room_type_select");
    const selectedTypeValue = roomTypeSelect.value;
    return selectedTypeValue;
}

const filterByProvince = () => {
    const roomTypeSelect = document.querySelector("#povince_items");
    const selectedTypeValue = roomTypeSelect.value;
    return selectedTypeValue;
}

const filterByPromotion = () => {
    const roomPromotionSelect = document.querySelector("#promotion");
    const selectedPromotionValue = roomPromotionSelect.checked;
    return selectedPromotionValue;
}

function afficherDonnees(data) {
    const roomListDiv = document.querySelector(".room_conainer");
    roomListDiv.innerHTML = ''; // Clear previous data

    if (data.length === 0) {
        const emptyMessageDiv = document.createElement("div");
        emptyMessageDiv.classList.add("empty_message");
        emptyMessageDiv.textContent = "Aucune chambre disponible pour le moment.";
        roomListDiv.appendChild(emptyMessageDiv);
    } else {
        data.forEach(room => {
            const imagePath = room.images_paths ?
                `./../../../../../../../../..${room.images_paths.replace(/\s/g, '\\ ')}` :
                "../../public/assets/images/alt_image.png";

            const promotionsDayValue = room.promotions_day
                ? parseFloat(room.promotions_day).toFixed(2) : null;

            const roomDiv = document.createElement("div");
            roomDiv.innerHTML = `
                <div class="room_items">
                    <div class="room_image_content"  "
                    style="background-image: url(${imagePath});"> 
                    ${room.number}
                </div>
    
                <div class="room_details_content">
                    <div class="name_rate">
                        <p id="room_type_name">${room.room_type}</p>
                        <div class="room_rate">
                        ${room.room_type === "solo"
                    ? `<i class="fa-solid fa-star star_color"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>`
                    : room.room_type === "twin" || room.room_type === "family"
                        ? `<i class="fa-solid fa-star star_color"></i>
                                   <i class="fa-solid fa-star star_color"></i>
                                   <i class="fa-solid fa-star"></i>`
                        : room.room_type === "VIP"
                            ? `<i class="fa-solid fa-star star_color"></i>
                                   <i class="fa-solid fa-star star_color"></i>
                                   <i class="fa-solid fa-star star_color"></i>`
                            : ''
                }
                        </div>
                    </div>
    
                    <p id="room_hotel">
                    <div id="room_location">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${room.hotel} </span> <span id="location"> ${room.province_name} - ${room.code_province}</span>
                    </div>
                    </p>
                    ${room.percent ?
                    ` <div class="room_description_with_prommotion">
                            This is your chance to take advantage, as the price is reduced by
                            <span id="netPrice"> ${promotionsDayValue}Ar/nigth</span>
                            until the end of promotion
                            <span id="promotion_name"><a href="../../index.html"> Sarika</a></span> on
                            <span id="promotion_end"> 06 janvier 2024</span> .
                            While the net price is:
                            <span id="net_price"> ${room.price}/night</span>
                        </div> `
                    :
                    ` <div class="room_description_without_prommotion">
                            Even if there are no promotions during this
                            period, the price remains affordable:
                            <span id="net_price"> ${room.price}/night</span>
                    </div>`
                }
                </div>
                <div class="room_booking_content">
                    <p id="booking_now">BOOKING NOW: </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="room_features_price">
                    <div class="features_contain">
                    ${room.sea_view ? `<i id="sea_view" class="fa-solid fa-water"></i>` : ''}
                    ${room.vip_category ? `<span id="vip_category">VIP</span>` : ''}
                    ${room.hot_water ? `<i id="hot_water" class="fa-solid fa-hot-tub-person"></i>` : ''}
                    ${room.wifi_available ? `<i id="wifi_available" class="fa-solid fa-wifi"></i>` : ''}
                    ${room.room_service ? `<i id="room_service" class="fa-solid fa-bell-concierge"></i>` : ''}
                    ${room.mini_bar ? `  <i id="mini_bar" class="fa-solid fa-champagne-glasses"></i>` : ''}
                    ${room.flat_screen ? `<i id="flat_screen" class="fa-solid fa-tv"></i>` : ''}
                    </div>
                </div>
        </div>
        `
            roomListDiv.appendChild(roomDiv);
        });

    }
}

function handleError(error) {
    const errorDiv = document.querySelector(".error_message");
    errorDiv.textContent = "Une erreur s'est produite : " + error;
}

function getRoomsListNetAndGrosPrice() {
    fetch("http://localhost:8000/RoomsListNetAndGrosPrice")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data && Array.isArray(data)) {
                const selectedType = filterByType();
                const selectedProvince = filterByProvince();
                const selectedPromotion = filterByPromotion();
                let filteredData = data.filter(room => room.room_type === selectedType)
                    .filter(room => room.province_name === selectedProvince)
                    .filter(room => selectedPromotion ? room.percent !== null : true);

                afficherDonnees(filteredData);

                const ascByPrice = document.querySelector("#asc_by_price");
                ascByPrice.addEventListener('click', () => {
                    filteredData.sort((a, b) => a.promotions_day - b.promotions_day);
                    afficherDonnees(filteredData);
                });

                const descByPrice = document.querySelector("#desc_by_price");
                descByPrice.addEventListener('click', () => {
                    filteredData.sort((a, b) => b.promotions_day - a.promotions_day);
                    afficherDonnees(filteredData);
                });

                // Filter actualise by type:
                const roomTypeSelect = document.querySelector("#room_type_select");
                roomTypeSelect.addEventListener('change', () => {
                    const newSelectedType = filterByType();
                    filteredData = data.filter(room => room.room_type === newSelectedType)
                        .filter(room => room.province_name === selectedProvince)
                        .filter(room => selectedPromotion ? room.percent !== null : room);

                    afficherDonnees(filteredData);
                });

                // Filter actualise by province:
                const provinceSelect = document.querySelector("#povince_items");
                provinceSelect.addEventListener('change', () => {
                    const newSelectedProvince = filterByProvince();
                    filteredData = data.filter(room => room.room_type === selectedType)
                        .filter(room => room.province_name === newSelectedProvince)
                        .filter(room => selectedPromotion ? room.percent !== null : room);

                    afficherDonnees(filteredData);
                });


                // Filter actualise by promotion:
                const promotionSelect = document.querySelector("#promotion");
                promotionSelect.addEventListener('change', () => {
                    const newSelectedPromotion = filterByPromotion();
                    filteredData = data.filter(room => room.room_type === selectedType)
                        .filter(room => room.province_name === selectedProvince)
                        .filter(room => newSelectedPromotion ? room.percent !== null : true);

                    afficherDonnees(filteredData);
                });
            } else {
                const errorMessageDiv = document.querySelector(".error_message");
                errorMessageDiv.textContent = "Une erreur s'est produite : Données invalides.";
            }
        })
        .catch(error => {
            console.error("Une erreur s'est produite :", error);
            handleError(error);
        });
}

// Call the function to get data and handle sorting
getRoomsListNetAndGrosPrice();
