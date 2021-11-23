package Fundamentos;

import javax.swing.*;
import java.math.BigDecimal;

public class ConversaoStringNumero {

  public static void main(String[] args) {

    String valor1 = JOptionPane.showInputDialog("Digite o primeiro numero: ");
    String valor2 = JOptionPane.showInputDialog("Digite o segundo numero: ");

    double numero1 = Double.parseDouble(valor1);
    double numero2 = Double.parseDouble(valor2);

    double soma = numero1 + numero2;

    System.out.printf("A Soma eh: %.2f%n", soma);
    System.out.printf("A Media eh: %.2f", soma/2);

//    BigDecimal -> + preciso / + lento
  }
}
