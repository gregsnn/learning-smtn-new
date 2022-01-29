import ValidaCPF from "./ValidaCPF";

export default class GeraCpf {
    rand( min = 100000000, max = 999999999 ) {
        return String( Math.floor( Math.random() * ( max - min ) + min ) );
    }

    format(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    generateNewCpf() {
        const cpfSemDigitos = this.rand();
        const digit1 = ValidaCPF.generateDigit(cpfSemDigitos);
        const digit2 = ValidaCPF.generateDigit(cpfSemDigitos + digit1);
        const newCpf = cpfSemDigitos + digit1 + digit2;
        return this.format(newCpf);
    }
}
