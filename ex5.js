async function minhaFuncaoAsync() {
  console.log("A");

  await null;
  console.log("B");
}

console.log("C");

minhaFuncaoAsync();

console.log("D");

  // O 'await' suspende a execução desta função e agenda o restante dela
  // na fila de microtasks (como se fosse um Promise.resolve(null).then(...)).
  // Enquanto ela fica pausada, o motor do JavaScript devolve o controle
  // para o fluxo principal, executando o código síncrono externo primeiro.