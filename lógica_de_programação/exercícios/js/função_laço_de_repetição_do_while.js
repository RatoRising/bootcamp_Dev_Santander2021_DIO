// função para gerar tabuadas
var tabDo = 8
var limite = 10
function tabuada() {
    let cont = 1
    do {
        let resultado = `9 x ${cont} = ${cont * tabDo}`
        console.log(resultado)
        cont++
    } while (cont <= limite) {
    }
}
console.log(tabuada())


/*
var cont = 1
var tabDo = 8
var limite = 10
do {
    let resultado = `9 x ${cont} = ${cont * tabDo}`
    console.log(resultado)
    cont++
} while (cont <= limite) {
}
*/
