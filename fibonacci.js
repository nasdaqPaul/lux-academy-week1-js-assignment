// Generator for the fibonacci sequence
function* fibonacciGenerator() {
    let current = 0;
    let next = 0;

    while (true) {
        if (next === 0) {
            yield 0;
            next += 1;
        } else {
            yield next;
            let temp = next;
            next = current + next;
            current = temp;
        }
    }
}

function isFib(num) {
    const generator = fibonacciGenerator();
    for (const numKey of generator) {
        if (numKey === num) {
            return true;
        } else if (numKey < num) {
            continue;
        } else {
            return false;
        }
    }
}

console.log(isFib(7))

isFib(22)