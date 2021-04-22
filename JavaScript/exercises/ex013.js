 function weekDays(week) {
    dias = week % 7

    switch (dias) {
        case 0: case 6: {
            console.log("fim de semana")
            break
        }
        case 1: case 2: case 3: case 4: case 5: {
            console.log("dia util")
            break
        }
        default:
            console.log("Inválido")
    }
 }

weekDays(1)
weekDays(2)
weekDays(3)
weekDays(4)
weekDays(5)
weekDays(6)
weekDays(7)
weekDays("a")

// (y)