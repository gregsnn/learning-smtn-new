package ex;

public class TemperaturaEX {

    public static void main(String[] args) {
        // (F - 32) * 5/9 = C

        double fuhrer, celso;
        final double MINOR, LAST;

        MINOR = 32;
        LAST = 1.8; // dividindo por "1.8" ou multiplicando por "5.0/9"
        fuhrer = 92;
        celso = (fuhrer - MINOR) / LAST;

        System.out.printf("Temperatura atual de: %.2f°C%n", celso);

        fuhrer = 76;
        celso = (fuhrer - MINOR) / LAST;

        System.out.printf("Temperatura atual de: %.2f°C%n", celso);
    }
}
