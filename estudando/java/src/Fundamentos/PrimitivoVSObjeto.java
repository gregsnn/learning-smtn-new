package Fundamentos;

public class PrimitivoVSObjeto {

  public static void main(String[] args) {

    String s = new String("texto"); // -> objeto string
    s = s.toUpperCase();

    // wrapper -> aquilo que envolve (versao objeto dos tipo primitivos)
    int a = 123;
    System.out.println(a);

    // tudo em Java eh objeto, menos os tipos primitivos.
  }
}
