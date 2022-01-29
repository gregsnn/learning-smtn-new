import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hiddeErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkMail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('Form enviado');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  for (const input of inputs) {
    if (!input.value) showErrorMessage(input, 'Preencha o campo');
  }
}

function checkMail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) showErrorMessage(password2, 'As senhas não são iguais');
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;

  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hiddeErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function shouldSendForm(form: HTMLFormElement): boolean {
  return !form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).length;
}
