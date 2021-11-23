package Fundamentos;

public class AreaCircunferencia {

    public static void main(String[] args) {
        double raio, area;
        final double PI;

        raio = 3.4;
        PI = 3.14159;

        area = PI * raio * raio;
        System.out.println(area);

        raio = 5;
        area = PI * raio * raio;

        System.out.println("Area: " + area + "m2.");
    }
}
