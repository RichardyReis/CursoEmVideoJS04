var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá ${nome}! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome maiúsculo fica <strong>${nome.toUpperCase()}</strong>.<br>`)
document.write(`Seu nome minúsculo fica <strong>${nome.toLowerCase()}</strong>.`)

//var n1 = 1545.5
//n1.toFixed(3)                              variável.toFixed() Determina quantas casas decimais devem aparecer
//'1545.500'
//n1.toFixed(2).replace('.', ',')            variável.replace('', '') Troca as caracteres
//'1545,50'
//> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  Apresentar o valor em R$ ou no padrão definido
//'R$ 1.545,50'