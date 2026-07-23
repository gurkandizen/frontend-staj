for (let sayi = 1; sayi <= 20; sayi++) {
    if(sayi % 3 === 0 && sayi % 5 === 0) {
        console.log("FizzBuzz");
    } else if (sayi % 3 === 0) {
        console.log("Fizz");
    } else if (sayi % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(sayi);
    }
}

for (let days = 1; days <= 20; days++) {
    if (days % 3 === 0 && days % 5 === 0) {
        console.log(`Masa ${days} — Kavurma Günü Masası`)
    } else if (days % 3 === 0) {
        console.log(`Masa ${days} — İkram Masası`)
    } else if (days % 5 === 0) {
        console.log(`Masa ${days} — Sessiz Çalışma Masası`)
    } else {
        console.log(`Masa ${days}`)
    }
}