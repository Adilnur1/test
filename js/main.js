//! ------------- События клавиатуры ---------------
//? keydown; возникает при нажатии клавиатуры и длится, пока нажата клавиатура.
// todo
// window.addEventListener("keydown", (event) => {
//     console.log(event);
// })

// ? keyup возникает при отпускании клавиши клавиатуры.
// todo
// window.addEventListener("keyup", (event) =>{
//     console.log(event);
// })

// ? Submit
// todo
let form = document.querySelector("form");
let inpForm = document.querySelectorAll("form input");
let btn1 = document.querySelector("#btn1");
let img = document.querySelector("img");

btn1.addEventListener("click", () => {
  form.style.display = "block";
});

img.addEventListener("click", () => {
  form.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  inpForm.forEach((elem) => {
    elem.value = "";
  });
  form.style.display = "none";
});
