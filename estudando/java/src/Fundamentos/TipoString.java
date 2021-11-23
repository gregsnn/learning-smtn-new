package Fundamentos;

import java.util.Locale;

public class TipoString {

  public static void main(String[] args) {

    System.out.println("Ola pessoal!".charAt(1));

    String s = "Boa Tarde";
    s = s.toUpperCase();
//    s = "Bom dia"; // string eh imutavel,apenas eh atribuido um novo valor
    System.out.println(s.concat("!!!"));
    System.out.println(s + "!!!");
    System.out.println(s.startsWith("BOA"));
    System.out.println(s.toLowerCase().startsWith("boa"));
    System.out.println(s.endsWith("TARDE"));
    System.out.println(s.length());
    System.out.println(s.equals("boa tarde"));
    System.out.println(s.equalsIgnoreCase("boa tarde"));

    var nome = "Pedro";
    var sobrenome = "Santos";
    var idade = 32;
    var salario = 1234.56;

    System.out.printf("O senhor %s %s tem %d anos, e ganha R$%.2f por mes.", nome, sobrenome, idade, salario);

    String frase = String.format("\nO senhor %s %s tem %d anos, e ganha R$%.2f por mes.", nome, sobrenome, idade, salario);
    System.out.println(frase);
  }
}
