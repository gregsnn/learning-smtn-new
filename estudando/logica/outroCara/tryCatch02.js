try { // eh possivel aninhar trycatch
  // executa tentativa
  console.log('abri algo');
  console.log('erro ao manipular arquivo');
  // console.log('arquivo fechado'); // ignorado por conta do erro
} catch (err) {
  // pega erros
  console.log('tratando o erro');
} finally {
  // sempre executado
  console.log('arquivo fechado');
}

console.log('########');

function hour (date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Esperando instancia "Date"');
  }

  if (!date) {
    date = new Date()
  }

  return date.toLocaleString('pt', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}
try {
  const data = new Date('01-01-1970 12:48:12')
  const hora = hour()
  console.log(hora);
} catch (error) {
  // tratar erro
  console.log(error);
} finally {
  console.log('finalizando acao');
}
