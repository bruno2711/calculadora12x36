
function verificarTrabalho() {

    const dataTrabalhada = document.getElementById('data-trabalhada');
    const data = document.getElementById('data');
    const resultado = document.getElementById('resultado');
    diferencaDias = Math.abs(new Date(data.value + 'T12:00') - new Date(dataTrabalhada.value + 'T12:00'));
    console.log(diferencaDias);
    diferencaDias = Math.ceil(diferencaDias / (1000 * 60 * 60 * 24));
    console.log(diferencaDias);
    
    if (diferencaDias % 2 === 0) {
        resultado.textContent = 'Trabalha';
    } else {
        resultado.textContent = 'Não trabalha';
    }
}