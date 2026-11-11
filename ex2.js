console.log("A");
setTimeout(() => console.log("B" ), 200)
setTimeout(() => console.log("C"), 0);
console.log("D");
// ordem esperada: A, D, C, B 