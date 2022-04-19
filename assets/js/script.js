function calculaCarne(numeroDeAdultos, numeroDeCriancas, duracaoDoChurrasco) {
    let resultado;

    if(duracaoDoChurrasco >= 6) {
        resultado = numeroDeAdultos * 650;
        resultado += numeroDeCriancas * (650 / 2);
    }else {
        resultado = numeroDeAdultos * 400;
        resultado += numeroDeCriancas * (400 / 2);
    }

    return (resultado / 1000);
}

function calculaCerveja(numeroDeAdultos, duracaoDoChurrasco) {
    let resultado;
    
    if(duracaoDoChurrasco >= 6) {
        resultado = numeroDeAdultos * 2000;
    }else {
        resultado = numeroDeAdultos * 1200;
    }

    return Math.ceil(resultado / 350);
}

function calculaBebida(numeroDeAdultos, numeroDeCriancas, duracaoDoChurrasco) {
    let resultado;

    if(duracaoDoChurrasco >= 6) {
        resultado = numeroDeAdultos * 1500;
        resultado += numeroDeCriancas * (1500 / 2);
    } else {
        resultado = numeroDeAdultos * 1000;
        resultado += numeroDeCriancas * (1000 / 2);
    }

    return Math.ceil(resultado / 1000);
}

function calculoGeral() {
    const numeroDeAdultos =  document.querySelector('#inp-adultos');
    const numeroDeCriancas = document.querySelector('#inp-criancas');
    const duracaoDoChurrasco = document.querySelector('#inp-duracao');
    const espacoDoResultado = document.querySelector('.resultado');

    let quantidadeDeCarne = calculaCarne(numeroDeAdultos.value, numeroDeCriancas.value, duracaoDoChurrasco.value);
    let quantidadeDeCerveja = calculaCerveja(numeroDeAdultos.value, duracaoDoChurrasco.value);
    let quantidadeDeBebida = calculaBebida(numeroDeAdultos.value, numeroDeCriancas.value, duracaoDoChurrasco.value);

    espacoDoResultado.innerHTML = `<p>${quantidadeDeCarne} Kg de carne</p>`
    espacoDoResultado.innerHTML += `<p>${quantidadeDeCerveja} Latas de cerveja com 350ml</p>`
    espacoDoResultado.innerHTML += `<p>${quantidadeDeBebida} Garrafas de 1L - Refrigerante / Água</p>`
}
