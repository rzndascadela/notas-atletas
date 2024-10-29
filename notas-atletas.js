let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        const atleta = atletas[i];
        const notas = atleta.notas;

        // Ordena as notas
        const notasOrdenadas = notas.sort((a, b) => a - b);
        
        // Elimina a maior e a menor nota
        const notasComputadas = notasOrdenadas.slice(1, 4);
        
        // Calcula a média
        const soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notasComputadas.length;

        // Exibe os resultados
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notas.join(', ')}`);
        console.log(`Média Válida: ${media.toFixed(6)}`); // Formata para 6 casas decimais
        console.log(''); // Linha em branco para melhor visualização
    }
}

// Chama a função para calcular a média
calcularMedia(atletas);
