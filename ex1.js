console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C"); 
// ordem esperada: A,C,B