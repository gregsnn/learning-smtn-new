package Fundamentos;

public class NotacaoPonto {

    public static void main(String[] args) {

        String s = "H e l l o W o r l d !"; // nao eh tipo primitivo e tambem nao eh uma palavra reservada
        s = s.toUpperCase();
        s = s.replaceAll("(\\s)", "_");
        s = s.concat(": Ola Mundo!");

        System.out.println(s);
        System.out.println("Leo".toUpperCase());

        String y = "Bom Dia X"
                .replace("X", "Loez")
                .toUpperCase()
                .concat("!!!");

        System.out.println(y);

        // Tipos primitivos nao tem o operador "ponto" -> "."
    }
}
