package Fundamentos;

import java.util.Scanner;

public class Console {

  public static void main(String[] args) {

/*
    System.out.print("Bom");

    System.out.print("Dia"); // nao quebra a linha (precisa adicionar \n quando quiser quebrar a linha)

    System.out.println(); // quebra a linha abaixo. junta-se a linha anterior (caso nao quebradas)

    System.out.printf("a"); // 'template string' alike. (quebra linha com \n ou %n)
 */

    Scanner entrada = new Scanner(System.in);

    System.out.print("Digite o seu nome: ");
    String nome = entrada.nextLine();

    System.out.print("Digite o seu sobrenome: ");
    String sobrenome = entrada.nextLine();

    System.out.print("Digite a sua Idade: ");
    int idade = entrada.nextInt();

    System.out.printf("%s %s tem %d anos%n", nome, sobrenome, idade);

    entrada.close();
  }
}
