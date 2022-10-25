const selectElement = document.querySelector(".rpg-role");

selectElement.addEventListener("change", (event) => {
    const result = document.querySelector(".result");
    result.textContent = `Congratulations! You may now enter your world as a ${event.target.value}!`;

document.getElementById("click").addEventListener("click", function(){
    alert("Game Starting");
      });
});