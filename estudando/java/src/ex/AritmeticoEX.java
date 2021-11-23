package ex;

public class AritmeticoEX {

  public static void main(String[] args) {

    final int total;
    int resultado1, resultado2;

    JUnit

    // left
    int soma1 = 3 + 2;
    int multiplicador1 = 6 * soma1;
    int divisor1 = 3 * 2;
    int dividendo1 = (int)Math.pow(multiplicador1, 2);

    resultado1 = dividendo1 / divisor1;

    // deft
    int subtracao1 = 1 - 5;
    int subtracao2 = 2 - 7;
    int divisor2 = 2;
    int dividendo2 = subtracao1 * subtracao2;

    int preResultado2 = dividendo2 / divisor2;

    resultado2 = (int)Math.pow(preResultado2, 2);

    // gretzky
    int resultadoTotal = resultado1 - resultado2;

    int resultadoAoCubo = (int)Math.pow(resultadoTotal, 3);
    int divisorAoCubo = (int)Math.pow(10, 3);

    total = (resultadoAoCubo / divisorAoCubo);

    System.out.printf("O resultado total do calculo foi: %d", total);
  }
}
