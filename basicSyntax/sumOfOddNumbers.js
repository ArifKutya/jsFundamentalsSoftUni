

function divisibleBy3(n) {
    total = 0;
    number = 1
    for (i = 0; i < n; i++){
console.log(number);
total += number;
number += 2;
     console.log(`Sum: ${total}`)
}
}

divisibleBy3(3);