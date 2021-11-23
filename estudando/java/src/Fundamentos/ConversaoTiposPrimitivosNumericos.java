package Fundamentos;

public class ConversaoTiposPrimitivosNumericos {

  public static void main(String[] args) {

    double a = 1; // implicita
    System.out.println(a);

    float b = (float) 1.1234567891011; // cast -> conversao explicita
    System.out.println(b);

    int c = 256;
    byte d = (byte) c; // cast -> conversao explicita
    System.out.println(d);

    double e = 1;
    int f = (int) e; // cast -> conversao explicita
    System.out.println(f);
  }
}
