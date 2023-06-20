var hora = 19
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18 && hora > 12) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}