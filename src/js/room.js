const bookingViaRoom = document.querySelectorAll(".room_booking_content");

bookingViaRoom.forEach(el => {
    el.addEventListener('click', (ev) => {
        window.location.href = "./booking.html";
    });
});

// const roomFeatureIcons = document.querySelectorAll(".features_icon");
// roomFeatureIcons.forEach(icon => {
//     icon.addEventListener("click", (ev) => {
//         console.log(icon.getAttribute("data-active"))
//         ev.stopPropagation();
//         if (icon.getAttribute("data-active") === false) {
//             icon.classList.add('star_color');
//             icon.setAttribute("data-active", "true");
//         } else {
//             icon.classList.remove('star_color');
//             icon.setAttribute("data-active", "false");
//         }
//     });
// });