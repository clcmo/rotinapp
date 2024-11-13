const tasks = [
    "Pratique 10 minutos de meditação.",
    "Faça uma caminhada curta ao ar livre.",
    "Liste três coisas pelas quais você é grato.",
    "Beba um copo de água.",
    "Escreva uma meta para o dia.",
    "Faça algo que você gosta por 5 minutos."
];

const motivationMessages = [
    "Você está fazendo um ótimo trabalho!",
    "Cada pequeno passo conta!",
    "Lembre-se, o importante é continuar!",
    "Cuide de si mesmo, você merece.",
    "A consistência é a chave para o sucesso!",
    "Aproveite cada momento do seu progresso."
];

let currentTask = "";

document.getElementById("new-task-btn").addEventListener("click", () => {
    currentTask = tasks[Math.floor(Math.random() * tasks.length)];
    document.getElementById("task").textContent = `Tarefa: ${currentTask}`;
});

document.getElementById("mark-complete-btn").addEventListener("click", () => {
    if (currentTask) {
        const message = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
        document.getElementById("motivation-message").textContent = message;
        currentTask = "";
        document.getElementById("task").textContent = "";
    } else {
        document.getElementById("motivation-message").textContent = "Por favor, escolha uma tarefa primeiro!";
    }
});
