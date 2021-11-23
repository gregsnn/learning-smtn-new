package Fundamentos;

public class Inferencia {

    public static void main(String[] args) {
        // 1 BYTE === 8 BITS
        // |T|0|1|0|1|0|1|1|

        // BYTE === 1 BYTE -> -128 ate +127
        // SHORT === 2 BYTE -> +- 32.767
        // INT === 4 BYTE
        // LONG === 8 BYTE

        // FLOAT === 4 BYTE
        // DOUBLE === 8 BYTE

        // CHAR -> 'a' || ' ' || '?' || '1'
        // BOOLEAN -> false or true

        double a = 4.5;
        System.out.println(a);

        var b = 7.5;
        System.out.println(b);

        var c = "text";
        System.out.println(c);
        c = "Outro Texto";
        System.out.println(c);

        // c = 4.5; // o valor da variavel nao pode mudar seu tipo apos sua declaracao
        // valor inteiro dentro de uma variavel double eh convertido para double EXEMPLO:"12 = 12.0"
        // se o valor inicialmente for Int entao a atribuicao nao podera ocorrer

        double d; // declaracao
        d = 123.65; // atribuicao de valor
        System.out.println(d);

        // var e; // var so aceita inicializacao com atribuicao de valor (ASSIM COMO UMA CONST EM JS)
    }
}
