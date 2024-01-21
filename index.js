function ejecutar() {
    
    for (let num = 1; num <= 20; num++) {
        let lista = document.createElement('li');
        
        if (num % 2 === 0) {
            console.log(num + ' es Par');
            lista.textContent = `${num} es Par`;
            lista.classList = 'colorOne';
        } else {
            console.log(num + ' es Impar');
            lista.textContent = `${num} es Impar`;
            lista.classList = 'colorTwo';
        }
        let caja = document.querySelector('.answer');
        caja.append(lista);
    }
}
