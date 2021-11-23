package ex;

import java.util.Scanner;

public class ConversaoEX {

  public static void main(String[] args) {

    // pegar 3 strings -> receber ultimos 3 salarios -> calcular media -> entrada pode ser com "," out "."

    double salario1, salario2, salario3, media;

    var entrada = new Scanner(System.in);

    System.out.print("Digite o primeiro salario: ");
    String entrada1 = entrada.next().replace(",", ".");

    System.out.print("Digite o segundo salario: ");
    String entrada2 = entrada.next().replace(",", ".");

    System.out.print("Digite o terceiro salario: ");
    String entrada3 = entrada.next().replace(",", ".");

    salario1 = Double.parseDouble(entrada1);
    salario2 = Double.parseDouble(entrada2);
    salario3 = Double.parseDouble(entrada3);

    media = (salario1 + salario2 + salario3) / 3;

    System.out.printf("A Media do Salario desse funcionario eh de: %.2f", media);

    entrada.close();
  }
}
