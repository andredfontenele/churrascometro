let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  console.log('Espere, está calculando...')

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qtdTotalCarne =
    carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2) * criancas
  console.log(qtdTotalCarne)
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}
