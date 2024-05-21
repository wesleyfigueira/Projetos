
const btninicio = document.querySelector("#send");

btninicio.addEventListener("click", function(e) {
    e.preventDefault();
    
    const name = document.querySelector("#inputName");
    const value = name.value;
    const firstMessage = document.getElementById("inicioJogo");
    
    firstMessage.innerHTML = `Hello ${value}, thank you for playing this little game!`;
});