// Changer la couleur de fond
const changeColorBtn = document.getElementById("changeColor");
changeColorBtn.addEventListener("click", () => {
    const colors = ["#f4f4f9", "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Gestion du compteur
let counter = 0;
const counterDiv = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
    counter++;
    counterDiv.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
    counter--;
    counterDiv.textContent = counter;
});

// Formulaire
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Bonjour ${name}, votre formulaire a été soumis avec succès!`);
    form.reset();
});
