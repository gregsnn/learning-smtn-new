function biggerOrEqual(num1, num2) {

    if(typeof num1 != typeof num2) {
        return false
    }

    return num1 >= num2
}

console.log(biggerOrEqual(10, "10"))
console.log(biggerOrEqual(5, 1))
console.log(biggerOrEqual(0, 0))
