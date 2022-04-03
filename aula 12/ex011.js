var idade = 70
if (idade < 16) {
    console.log('Você tem menos de 16 anos, portanto NÃO vota.')
} else if (idade < 18 || idade > 65) {
    console.log(`Você tem ${idade} anos, seu voto é OPCIONAL.`)
} else {
    console.log(`Você tem ${idade} anos, seu voto é OBRIGATÓRIO`)
}
