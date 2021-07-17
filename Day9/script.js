"use strict";
const seatsRemaining = document.querySelector(".seats-remaining");
const seatsOccupied = document.querySelector(".seats-occupied");
const seatContainer = document.querySelector(".container");
let seatsOccupiedCount = 0;
let seatsRemainingCount = 50;

seatContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    if (e.target.classList.contains("booked")) {
      alert("Seat Already Booked");
    } else {
      const confirmation = confirm("Are sure about booking this seat?");
      if (confirmation == true) {
        e.target.classList.add("booked");
        seatsOccupiedCount++;
        seatsRemainingCount--;
        console.log(seatsOccupiedCount);
        console.log(seatsRemainingCount);
        seatsOccupied.innerHTML = seatsOccupiedCount;
        seatsRemaining.innerHTML = seatsRemainingCount;
      }
    }
  }
});