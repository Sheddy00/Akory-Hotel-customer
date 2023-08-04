const bookingViaRoom = document.querySelectorAll(".room_booking_content");

bookingViaRoom.forEach(el => {
    el.addEventListener('click', (ev) => {
        window.location.href = "./booking.html";
    });
});