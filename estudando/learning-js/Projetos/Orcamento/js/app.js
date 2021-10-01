class Despesa {

  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.tipo = tipo;
    this.descricao = descricao;
    this.valor = valor;
  };

  validarDados() {
    for (let valor in this) {
      if (this[valor] === undefined || this[valor] === '' || this[valor] === null) return false;
    };
    return true;
  };
};

class Db {

  constructor() {
    const id = localStorage.getItem('id');
    id === null ? localStorage.setItem('id', 0) : id;
  };

  getProximoId() {
    const proxId = parseInt(localStorage.getItem('id'));

    return proxId + 1;
  };

  gravar(d) {
    const id = this.getProximoId();

    localStorage.setItem(id, JSON.stringify(d));

    localStorage.setItem('id', id);
  };

  recuperarRegistros() {
    let despesas = []
    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++) {
      let despesa = JSON.parse(localStorage.getItem(i))

      if(despesa === null) continue
      despesa.id = i
      despesas.push(despesa)
    }
    return despesas
  };

  pesquisar(despesa) {

    let despesasFiltradas = []
    despesasFiltradas = this.recuperarRegistros()

    console.log(despesa)

    if(despesa.ano != '') despesasFiltradas = despesasFiltradas.filter(v => v.ano == despesa.ano)
    if(despesa.mes != '') despesasFiltradas = despesasFiltradas.filter(v => v.mes == despesa.mes)
    if(despesa.dia != '') despesasFiltradas = despesasFiltradas.filter(v => v.dia == despesa.dia)
    if(despesa.tipo != '') despesasFiltradas = despesasFiltradas.filter(v => v.tipo == despesa.tipo)
    if(despesa.descricao != '') despesasFiltradas = despesasFiltradas.filter(v => v.descricao == despesa.descricao)
    if(despesa.valor != '') despesasFiltradas = despesasFiltradas.filter(v => v.valor == despesa.valor)

    return despesasFiltradas
  };

  remover(id) {
    localStorage.removeItem(id)
  }
};
let db = new Db();

function cadastrarDespesa() {

  const ano = document.getElementById('ano');
  const mes = document.getElementById('mes');
  const dia = document.getElementById('dia');
  const tipo = document.getElementById('tipo');
  const descricao = document.getElementById('descricao');
  const valor = document.getElementById('valor');
  const despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);

  if (!!(despesa.validarDados())) {
    db.gravar(despesa)

    document.getElementById('modalTitle').innerHTML = `Registro Insidero com Sucesso`
    document.getElementById('modalText').className = 'modal-header text-success'
    document.getElementById('modalContent').innerHTML = 'Despesa foi cadastrada com sucesso'
    document.getElementById('modalButton').innerHTML = 'Voltar'
    document.getElementById('modalButton').className = 'btn btn-success'
    $('#registraDespesaModal').modal('show')

    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''
  } 
  if (!(despesa.validarDados())){
    document.getElementById('modalTitle').innerHTML = `Falha ao Inserir Registro`
    document.getElementById('modalText').className = 'modal-header text-danger'
    document.getElementById('modalContent').innerHTML = 'Erro na gravacao, verifique os campos'
    document.getElementById('modalButton').innerHTML = 'Voltar e corrigir'
    document.getElementById('modalButton').className = 'btn btn-danger'
    $('#registraDespesaModal').modal('show')
  }
};

function carregaDespesaLista(despesas = [], filtro = false) {

  if(despesas.length === 0 && filtro === false) despesas = db.recuperarRegistros();
  let listaDespesas = document.getElementById('listaDespesas'); //tbody
  listaDespesas.innerHTML = ""

  despesas.forEach(v => {
    let row = listaDespesas.insertRow()

    row.insertCell(0).innerHTML = `${v.dia}/${v.mes}/${v.ano}`
    //ajustar tipo
    switch(Number(v.tipo)) {
      case 1: v.tipo = `Alimentacao`
        break;
      case 2: v.tipo = `Educacao`
        break;
      case 3: v.tipo = `Lazer`
        break;
      case 4: v.tipo = `Saude`
        break;
      case 5: v.tipo = `Transporte`
        break;
    }
    row.insertCell(1).innerHTML = v.tipo
    row.insertCell(2).innerHTML = v.descricao
    row.insertCell(3).innerHTML = v.valor.replace(/\./, ',')

    let btn = document.createElement("button")
    btn.className = 'btn btn-danger'
    btn.innerHTML = `<i class="fas fa-times"></i>`
    btn.id = `id_despesa_${v.id}`
    btn.onclick = function() {
      let id = this.id.replace(/\id_despesa_/gi, '')
      db.remover(id)

      window.location.reload()
    }
    row.insertCell(4).append(btn)
  })
};

function pesquisaDespesas() {
  let ano = document.getElementById('ano').value
  let mes = document.getElementById('mes').value
  let dia = document.getElementById('dia').value
  let tipo = document.getElementById('tipo').value
  let descricao = document.getElementById('descricao').value
  let valor = document.getElementById('valor').value

  let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
  let despesas = db.pesquisar(despesa)  

  carregaDespesaLista(despesas, true)
};