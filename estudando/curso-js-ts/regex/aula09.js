// encontra todas as palavras (mesmo acentuadas)
const palavrasRegExp = /([\wà-ù]+)/gm;

// elimina os "nao numeros"
const naoNumRegExp = /\D/g;

// valida IP
const ipValidRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// valida o formato de um CPF
const cpfValidRegExp = /(?:\d{3}\.?){3}-\d{2}/g;

// valida numeros (telefone)
const cellRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// valida senha forte
const strongPassRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,}$)/g

// valida email
// permissiva == /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
1