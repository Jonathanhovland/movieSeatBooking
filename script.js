const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.ocupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

container.addEventListener('click', (e) => {
    console.log()
}