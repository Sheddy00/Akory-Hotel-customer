const c1 = document.getElementById('choose1');
const c2 = document.getElementById('choose2');
const c3 = document.getElementById('choose3');
const ch1 = document.getElementById('1');
const ch2 = document.getElementById('2');
const ch3 = document.getElementById('3');
const ch4 = document.getElementById('4');
const ch5 = document.getElementById('5');
const ch6 = document.getElementById('6');
const ch7 = document.getElementById('7');
const ch8 = document.getElementById('8');
const ch9 = document.getElementById('9');
const ch10 = document.getElementById('10');

ch1.addEventListener('click', (e) => {
    e.preventDefault();
    c1.innerHTML = `
    <li>
        <input type="Checkbox" name="type_room" value="See view">
        <label for="type_room">See view</label>
    </li>
    <li>
        <input type="checkbox" name="type_room" value="Hot water">
        <label for="type_room">Hot water</label>
    </li>
    <li>
        <input type="checkbox" name="type_room" value="Wifi">
        <label for="type_room">Wifi</label>
    </li>
    <li>
        <input type="checkbox" name="type_room" value="Mini bar">
        <label for="type_room">Mini bar</label>
    </li>
    <li>
        <input type="checkbox" name="type_room" value="Room Service">
        <label for="type_room">Room service</label>
    </li>
    <li>
        <input type="checkbox" name="type_room" value="Flat screen">
        <label for="type_room">Flat screen</label>
    </li>
    `
})
