var timer = setInterval(()=>{
    let d = new Date();
    let min = d.getMinutes();
    let hour = d.getHours();
    min = min > 10? min:"0"+min;
    hour = hour > 10? hour: "0"+hour; 
    document.querySelector('.horas').innerHTML = `${hour}:${min}`;
    }, 500);

const event1 = document.querySelector("#send");
event1.addEventListener("click", (e)=>{
    e.preventDefault();
    var nome = document.querySelector("#nome-usu");
    let d = new Date();
    let hour = d.getHours();
    var frase = hour < 12? `Bom dia, ${nome.value}`:`Boa tarde, ${nome.value}`;
    if(hour > 18)frase = `Boa noite, ${nome.value}`;
    
    document.querySelector('.frase').innerHTML = frase;
});

function show() {
    document.getElementById("Tela1").style.display = 'none';
    document.querySelector('.fundo').style.display = 'flex';
}

const envet2 = document.querySelector(".btnvolta");
envet2.addEventListener("click",()=>{
    document.getElementById("Tela1").style.display = 'flex';
    document.querySelector('.fundo').style.display = 'none';

    document.querySelector("#nome-usu").value = "";
});
function print() {
    autoPrint();
    console.log("FOi");
}