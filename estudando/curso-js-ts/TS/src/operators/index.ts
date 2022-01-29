// Encadeamento opcional e Operador de coalescência NULA
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Documento',
  texto: '[...] Texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString()); // encadeamento opcional
console.log(documento.data?.toDateString() ?? 'Data nao informada'); // coalescência nula // aplica apenas para null e undefined
console.log(undefined ?? `nao existe`);
console.log(null ?? `nao existe`);
console.log(false ?? `nao existe`);
console.log('' ?? `nao existe`);
console.log(0 ?? `nao existe`);
