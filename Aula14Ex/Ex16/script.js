function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} - `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} - `
            }
        }

    }   
}