import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

(function () {
    const cpf = new GeraCpf();

    const cpfGerado = document.querySelector('.cpf_gerado');

    cpfGerado.innerHTML = cpf.generateNewCpf();
})();