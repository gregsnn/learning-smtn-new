package Fundamentos;

public class ConversaoNumeroString {

  public static void main(String[] args) {

    Integer num1 = 10000;
    System.out.println(num1.toString().length());

//    Long.toString()
//    Double.toString()
//    etc...

    int num2 = 1000000;
    System.out.println(Integer.toString(num2).length());
  }
}
