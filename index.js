const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const submitBtn = document.querySelector(".submit button");
const rattingBtns = document.querySelectorAll("li");
const error = document.querySelector(".error");
let ratting = 0;
const selectedRatting = document.querySelector(".selected-ratting");




rattingBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
  e.preventDefault()
const li = e.target.textContent
btn.style.backgroundColor='white';
selectedRatting.textContent = `You selected ${li} of 5`
enviar();

})
});


 function enviar(){
    submitBtn.addEventListener('click', ()=> {
      cardOne.classList.add('hidden')
      cardTwo.classList.remove('hidden')
  })
};





// rattingBtns.forEach(rattingBtn => {
//   rattingBtn.addEventListener("click", () => {
//     error.classList.add("hidden");
//     removeActive();
//     rattingBtn.classList.add("active");
//     ratting = rattingBtn.dataset.value;
//   })
// })

// submitBtn.addEventListener("click", () => {
//   if (ratting === 0) {
//     error.classList.remove("hidden");
//   }
//   else {
//     selectedRatting.innerHTML = `You selected ${ratting} out of 5`;
//     cardOne.classList.add("hidden");
//     cardTwo.classList.remove("hidden");
//   }
// })

// function removeActive() {
//   for (const rattingBtn of rattingBtns) {
//     rattingBtn.classList.remove("active");
//   }
// }


