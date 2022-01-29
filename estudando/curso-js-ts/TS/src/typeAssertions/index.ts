/* RECOMENDADO */
// Condicional
const BODY = document.querySelector('body');
if (BODY) BODY.style.backgroundColor = 'red';

// TYPE assertion
const BODY3 = document.querySelector('body') as HTMLBodyElement;
BODY3.style.backgroundColor = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* NÃO RECOMENDADO */
// TYPE assertion
// const BODY4 = document.querySelector('body') as unkown as number;

// NON-NULL assertion
const BODY2 = document.querySelector('body')!;
BODY2.style.backgroundColor = 'red';

export default 1;
