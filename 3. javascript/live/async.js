function sumAsync(val1, val2) {
    setTimeout(() => console.log(val1 + val2), 1000);
}

sumAsync(1, 5);