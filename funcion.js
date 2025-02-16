let questions = [
    { question: "2/2+3/2", options: ["2/3", "4", "2", "2/2"], correctAnswer: "2/2" },
    { question: "¿Cuál es el siguiente número en la serie? 2, 5, 10, 17, 26, ¿?", options: ["35", "37", "38", "40"], correctAnswer: "37" },
    { question: "¿Cuál es el siguiente número en la serie? 81, 27, 9, 3, ¿?", options: ["1", "2", "0", "6"], correctAnswer: "1" },
    { question: "Completa la serie: 1, 4, 9, 16, 25, ¿?", options: ["30", "35", "36", "49"], correctAnswer: "36" },
    { question: "¿Que número falta en la serie? 3, 6, 12, 24, ¿?", options: ["36", "48", "50", "60"], correctAnswer: "48" },
    { question: "¿Cuál es el siguiente número en la secuencia? 100, 90, 81, 73, ¿?", options: ["65", "66", "64", "62"], correctAnswer: "65" },

    { question: "Pájaro es a volar como pez es a...", options: ["Respirar", "Comer", "Nadar", "Saltar"], correctAnswer: "Nadar" },
    { question: "Libro es a leer como guitarra es a...", options: ["Escuchar", "Tocar", "Ver", "Construir"], correctAnswer: "Tocar" },
    { question: "Tierra esw a planeta como Sol es a...", options: ["Estrella", "Luna", "Sistema", "Universo"], correctAnswer: "Estrella" },
    { question: "Corazón es a sangre  como pulmones son a...", options: ["Respiración", "Aire", "Oxigeno", "Músculo"], correctAnswer: "Oxigeno" },
    { question: "Profesor es a enseñar como médico es a...", options: ["Curar", "Estudiar", "Hospital", "Diagnosticar"], correctAnswer: "Curar" },

    { question: "Si Pedro es mayor que Juan y Juan es mayor que Luis, entonces:", options: ["Pedro es menor que Luis", "Luis es mayor que Pedro", "Pedro es mayor que Luis", "No se puede determinar"], correctAnswer: "Pedro es mayor que Luis" },
    { question: "Un tren tarda 2 horas en recorrer 180 km, ¿Cuál es su velocidad promedio?", options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"], correctAnswer: "90 km/h" },
    { question: "Si hoy es viernes, ¿qué dia será en 10 días?", options: ["Domingo", "Lunes", "Martes", "Miércoles"], correctAnswer: "Martes" },
    { question: "Un padre tiene 40 años y su hijo 10. ¿Cuántos años deben pasar para que el padre tenga el triple de la edad del hijo?", options: ["5", "10", "15", "20"], correctAnswer: "10" },
    { question: "En un cuarto hay 4 esquinas. En cada esquina hay un gato. Delante de cada gato hay 3 gatos. ¿Cuántos gatos hay en total?", options: ["4", "8", "12", "16"], correctAnswer: "4" },

    { question: "¿Cuántos meses tienen 28 dias?", options: ["1", "2", "6", "12"], correctAnswer: "12" },
    { question: "Un hombre mira un retrato y dice: 'No tengo hermanos ni hermanas, pero el padre de este hombre es el hijo de mi padre'. ¿Quién está en el retrato?",  options: ["Su hijo", "Su primo", "Su padre", "Él mismo"], correctAnswer: "Su hijo" },
    { question: "Si 5 máquinas hacen 5 productos en 5 minutos, ¿cuánto tardarán 100 máquinas en hacer 100 productos?", options: ["5 min", "10 min", "20 min", "50 min"], correctAnswer: "5 min" },
    { question: "Una familia tiene 6 hijas. Cada hija tiene un hermano. ¿Cuántos hijos en total hay en la familia?", options: ["6", "7", "12", "13"], correctAnswer: "7" },
    { question: "En una competencia de natación, si adelantas al segundo lugar, ¿en qué posición quedas?", options: ["Primero", "Segundo", "Tercero", "Último"], correctAnswer: "Segundo" },

    { question: "Una persona tiene 3 camisas, 2 pantalones y 2 sacos. ¿De cuántas maneras distintas puede vestirse?", options: ["6", "7", "12", "18", "36"], correctAnswer: "37" },
    { question: "En una bolsa hay bolas, tres de ellas son rojas, y dos son blancas. Al sacar tres bolas una esw blanca. ¿Cuántas bolas quedan en la bolsa y de que color?", options: ["2 blancas", "2 rojas", "1 roja", "No puede ser", "1 roja y blanca"], correctAnswer: "37" },
    { question: "Un granjero tiene gallinas y conejos en su granja. Si en total hay 30 cabezas y 80 patas, ¿cuántos conejos hay?", options: ["10", "20", "15", "25"], correctAnswer: "20" },
    { question: "Un número sumado con su doble da 36. ¿Cuál es la ecuación correcta?", options: ["x + 2 = 36", "x + 2x = 36", "2x + 3 = 36", "x + x2 = 36"], correctAnswer: "x + 2x = 36" },
    { question: "Dos números suman 25, y el doble de uno de ellos es igual a 14. Determine los valores de esos dos números.", options: ["x = 7 ; y = 18", "x = 10 ; y = 15", "x = 8 ; y = 17", "x = 6 ; y = 19"], correctAnswer: "x = 7 ; y = 18" },

    { question: "¿Cuánto es 7 × 6?", options: ["36", "42", "48", "54"], correctAnswer: "42" },


];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startTest() {
    document.getElementById("intro-container").classList.add("hidden");
    document.getElementById("test-container").classList.remove("hidden");
    startTimer();
    displayQuestion();
}

function startTimer() {
    let time = 50 * 60;
    let timerDisplay = document.getElementById("timer");

    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        if (time <= 0) {
            clearInterval(timer);
            finishTest();
        }
        time--;
    }, 1000);
}

function displayQuestion() {
    let questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach(option => {
        let div = document.createElement("div");
        div.className = "option";
        div.textContent = option;
        div.onclick = () => checkAnswer(option, questionObj.correctAnswer);
        optionsContainer.appendChild(div);
    });

    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score += 20;
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    clearInterval(timer);
    document.getElementById("test-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").textContent = `Tu puntaje final es: ${score}/1000`;
}

function restartTest() {
    location.reload();
}