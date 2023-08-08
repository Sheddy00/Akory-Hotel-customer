const bookingViaRoom = document.querySelectorAll(".room_booking_content");

bookingViaRoom.forEach(el => {
    el.addEventListener('click', (ev) => {
        window.location.href = "./booking.html";
    });
});

// recuperation features:

// const roomFeatureIcons = document.querySelectorAll(".features_icon");
// const tableValuesFeatures = [];

// roomFeatureIcons.forEach(icon => {
//   icon.addEventListener("click", () => {
//     const isActive = icon.getAttribute("data-active");
//     const index = Array.from(roomFeatureIcons).indexOf(icon);
//     const newValue = isActive === "false" ? "true" : "false";

//     icon.setAttribute("data-active", newValue);
//     tableValuesFeatures[index] = newValue;

//     if (newValue === "true") {
//       icon.classList.add("star_color");
//     } else {
//       icon.classList.remove("star_color");
//     }

//     console.log(tableValuesFeatures);
//   });
// });
