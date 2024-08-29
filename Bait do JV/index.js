const btnBait = document.getElementById("btn-bait");
const btnReal = document.getElementById("btn-clickavel");
const img = document.getElementById("rogerioceni")

function mudarBotaoDeLugar() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Tamanho do botão
    const buttonWidth = btnBait.offsetWidth;
    const buttonHeight = btnBait.offsetHeight;

    // Calcula a nova posição
    const x = Math.random() * (windowWidth - buttonWidth);
    const y = Math.random() * (windowHeight - buttonHeight);

    return { x, y };
}

btnBait.addEventListener("mouseover", function(){
    const newPosition = mudarBotaoDeLugar();
    btnBait.style.left = `${newPosition.x}px`
    btnBait.style.top = `${newPosition.y}px`

})


const initialPosition = mudarBotaoDeLugar();
btnBait.style.left = `638px`;
btnBait.style.top = `317px`;
;

btnReal.addEventListener("click", function(){
    img.style.visibility = "visible"
    img.src = "./rogerioceni.png"
    btnBait.style.visibility = "hidden";
})



