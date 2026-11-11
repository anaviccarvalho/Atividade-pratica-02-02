console.log("A");

setTimeout(() => 
  console.log("B"), 0);

Promise.resolve().then(() => console.log("C"))
  .then(() =>
    console.log("D")
  );

console.log("E");
// ordem esperada: A,E,C,D,B
