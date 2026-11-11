for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`${i}`);
  }, 0);
}

console.log("Fim");
 // O 'let' tem escopo de bloco. A cada volta do loop, o JavaScript cria
    // uma nova cópia independente de 'i' exclusiva para aquele callback.
    // Se fosse 'var' (escopo de função/global), todas as funções apontariam
    // para a mesma variável, imprimindo o valor final (3) em todas as linhas.
