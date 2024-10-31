document.getElementById('breeds-quiz').onsubmit = function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const progress = document.getElementById('progress-bar');
        let ancho = 0;

        const updatedProgress = (percent) => {
            progress.style.width = percent + '%';
        }

        let scoreA = 0;
        let scoreB = 0;
        let scoreC = 0;

        // bucle
        const totalQuestions = 10;

        for (let i = 1; i <= totalQuestions; i++) {
            const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (userAnswer) {
                if (userAnswer.value === 'a') scoreA++;
                if (userAnswer.value === 'b') scoreB++;
                if (userAnswer.value === 'c') scoreC++;
            }

            ancho = (i/ totalQuestions) * 100;
            updatedProgress(ancho);
        }
    
        // resultados
        let breedsType;
        if (scoreA > scoreB && scoreA > scoreC) {
            breedsType = "Eres una persona enérgica y analítica.";
        } else if (scoreB > scoreA && scoreB > scoreC) {
            breedsType = "Eres una persona intuitiva y sensible.";
        } else if (scoreC > scoreA && scoreC > scoreB) {
            breedsType = "Eres una persona equilibrada y considerada.";
        } else {
            breedsType = "Tienes una mezcla de rasgos de personalidad.";
        }

        // Mostrar resultados
        document.getElementById('score').innerText = breedsType;
        document.getElementById('result').style.display = 'block';

        updatedProgress(100);
    };