package Fundamentos;

public class TiposPrimitivos {

    public static void main(String[] args) {
        // info funcionario

        // numericos inteiros
        byte anosDeEmpresa = 23;
        short numeroDeVoos = 542;
        int id = 57213;
        long pontosAcumulados = 2_500_000L;

        // numericos reais
        float salario = 10_200.40F;
        double vendasAcumuladas = 5_500.44;

        // boolean
        boolean estaDeFerias = false; // ou true

        // char
        char status = 'A'; // char so aceita um unico caractere

        // Dias de Empresa
        System.out.println(anosDeEmpresa * 365);
        // Numero de Viagens
        System.out.println(numeroDeVoos / 2);
        // Pontos por Real
        System.out.println(pontosAcumulados / vendasAcumuladas);

        System.out.printf("ID %d: ganha -> R$%.2f%n", id, salario);
        System.out.printf("ID %d: Esta de ferias? %b, STATUS: %c%n", id, estaDeFerias, status);
    }
}
