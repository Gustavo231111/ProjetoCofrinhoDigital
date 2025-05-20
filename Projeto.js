// Seleciona todos os botões que possuem o atributo 'dinheiro'  
  const moedas = document.querySelectorAll('button[dinheiro]');


  // Objeto para contar quantas moedas de cada valor foram acumuladas
  const moedas2 = { '0.10': 0, '0.25': 0, '0.50': 0, '1.00': 0 };


  let total = 0;
  const total2 = document.getElementById('total');


  // Objeto que mapeia cada valor de moeda ao seu elemento HTML correspondente para exibir quantidade
  const valores = {
    '0.10': document.getElementById('valor0.10'),
    '0.25': document.getElementById('valor0.25'),
    '0.50': document.getElementById('valor0.50'),
    '1.00': document.getElementById('valor1.00'),
  };


  function totalSaida() {
    // Atualiza o elemento do total com o valor formatado em reais (substituindo ponto por vírgula)
    total2.textContent = 'Total: R$' + total.toFixed(2).replace('.', ',');


    // Para cada moeda clicada atualiza a  tabela de quantas vezes foram clicadas
    for (const conta in moedas2) {
      valores[conta].textContent = moedas2[conta];
    }
  }


 // Para cada botão com atributo 'dinheiro', adiciona um evento de clique
moedas.forEach(btn => {
  btn.addEventListener('click', () => {
    // Pega o valor da moeda a partir do atributo 'dinheiro' do botão clicado
    const valor = btn.getAttribute('dinheiro');


    // Incrementa a quantidade da moeda correspondente no objeto moedas2
    moedas2[valor]++;


    // Adiciona o valor da moeda ao total acumulado (convertendo para número)
    total += parseFloat(valor);


    // Atualiza a exibição do total e das quantidades na interface
    totalSaida();
  });
});


// Seleciona o botão de saque e o campo de input para o valor a ser sacado
const bntSacarDinheiro = document.getElementById('sacarDinheiro');
const valor = document.getElementById('valor');


// Adiciona um evento de clique ao botão de saque
bntSacarDinheiro.addEventListener('click', () => {
  // Obtém o valor a ser sacado a partir do campo de input e converte para número
  let numeros = parseFloat(valor.value);
 
  // Verifica se o valor a ser sacado é maior que o total disponível
  if (numeros > total) {
    // Exibe um alerta se não houver saldo suficiente
    alert('Você não tem Saldo para o saque!!');
    // Limpa o campo de input
    valor.value = '';
    return; // Sai da função
  }
 
  // Subtrai o valor sacado do total acumulado
  total -= numeros;
 
  // Atualiza a exibição do total e das quantidades de moedas
  totalSaida(); 
  // Limpa o campo de input
  valor.value = '';
});


// Adiciona um evento de clique ao botão de esvaziar
document.getElementById('esvaziar').addEventListener('click', () => {
  // Reseta o total acumulado para zero
  total = 0;
 
  // Reseta a quantidade de cada tipo de moeda para zero
  for (const conta in moedas2) {
    moedas2[conta] = 0;
  }
 
  // Atualiza a exibição do total e das quantidades de moedas
  totalSaida();
 
  // Limpa o campo de input
  valor.value = '';
});


// Chama a função para inicializar a exibição do total e das quantidades de moedas
totalSaida();


