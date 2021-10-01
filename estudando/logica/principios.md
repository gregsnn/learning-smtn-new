# LOGICA DE PROGRAMACAO

## Algoritmo == Rotina Funcional :
1. **ALGORITMOS COMPUTACIONAIS** = Sao passos a serem seguidos por um **MODULO PROCESSADOR** e seus respectivos **USUARIOS** que quando executados na ordem correta, conseguem **realizar** determinada **tarefa**;
    - **MODULO PROCESSADOR** = Tudo aquilo que pode efetuar processamento.
    - **USUARIOS** = Aquele quem utiliza os programas.
    - **REALIZAR / TAREFA** = Resolver alguma necessidade do usuario que pode requerir o _modulo processador_.

1. **CONSTRUIR BOA LOGICA**;

1. **ESCOLHER LINGUAGEM DE PROGRAMACAO**;

1. **CRIACAO DO SISTEMA**;
***

## VARIAVEIS
1. **ETIQUETAS** que possuem __*nome*__ e __*tipo*__
***


## IDENTIFICADORES
1. **REGRAS**
    1. Deve comecar com letra/string
    1. Os subsequentes podem ser numeros
    1. Nao pode ser utilizado nenhum simbolo alem do "**_**(underline)"
    1. Nao pode haver espaco em branco
    1. Nao pode haver letra com acentuacao
    1. Nao pode ser uma palavras reservada

        - EXEMPLO: **var nota1** (valido)
        - EXEMPLO: **var média** (fere a regra 5.)
        - EXEMPLO: **var salário bruto** (fere a regra 4 e 5.)
        - EXEMPLO: **var 9dade** (fere a regra 1.)
        - EXEMPLO: **var Algoritmo** (fere a regra 6.)
        - EXEMPLO: **var Inicio_Algoritmo** (valido)
***

## TIPOS PRIMITIVOS
1. INTEIRO = INT (1, 2, 6, 5, -123, 543)
    - Numero que nao possuem parte fracionaria/ponto flutuante
1. REAL = Double / Float (1.2, 9.5, 5.0, -66.2, 3.14)
    - Numeros que possuem ponto flutuante
1. CARACTERE = String ("OLA MUNDO", "123", "Gre")
    - Tudo aquilo que esta alocado entre aspas
1. LOGICO = Boolean (TRUE ou FALSE)
***

## OPERADORES ARITIMETICOS (A = 5, B = 2)
1. ADICAO: A **+** B = 7
1. SUBTRACAO: A **-** B = 3
1. MULTIPLICACAO: A __*__ B = 10
1. DIVISAO: A **/** B = 2.5
1. DIVISAO INTEIRA: A \ B = 2
1. RESTO DA DIVISAO(modulo): A **%** B = 1
1. EXPONENCIACAO: A __**__ B = 25 (__^__ tambem pode ser usado)
***

## OPERADORES RELACIONAIS
- **>** = Maior que
- **<** = Menor que
- **>=** = Maior ou igual a 
- **<=** = Menor ou igual a
- **=** = Igual a
- **<>** = Diferente de (**!==**)
    - _Retornam sempre um valor logico (**true** - **false**)_
***

## OPERADORES LOGICOS
- **&&** = p && q (__*ambos verdadeiros == true*__)
- **||** = p || q (__*apenas um verdadeiro == true*__)
- **!** = !p (__*se(!falso) = verdadeiro / se(!verdadeiro) = falso*__)
***

## ORDEM DE PRECEDENCIA
- ARITMETICOS
    1. PARENTESES
    1. EXPONENCIACAO
    1. MULTIPLICACAO / DIVISAO
    1. ADICAO / SUBTRACAO
- RELACIONAIS
- LOGICOS

***

## ESTRUTURA CONDICIONAIS
1. if() || if() - else || if() - else if() - else
1. switch()
    - case $:
***

## ESTRUTURA DE REPETICAO
1. while()
1. do - while()
1. for()
***