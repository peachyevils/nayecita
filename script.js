document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-btn');
    const canvas = document.getElementById('visualizer');
    const canvasCtx = canvas.getContext('2d');
    const lyrics = [
        { time: 1, spanish: "Hola mi gatita bella, este es mi pequeño presente para ti <3" },
        { time: 3, spanish: "FELIZ 14 MESESITOS  <3 <3 <3" },
        { time: 5, spanish: "en este dian tan especial para nosotros quiero dedicarte esta cancion con nuestras fotos que hemos ido creaando cada dia, recordando todo lo bonito y dejando lo malo de lado" },
        { time: 7, spanish: "quiero que sepas que te amo con todo mi corazón" },
        { time: 9, spanish: "sé que este año nos esperan nuevas cosas y tambien que anhelo el casarme contigo y tener una familia muy linda, espero poder generarte muchas sonrisas y demostrarte lo mucho que te amo en realidad" },
        { time: 14, spanish: "mi Arrietty, sabes que te adoro y asi mismo quiero decirte qe siempre vas a ser mi unica exepcion para todo, espero poder unirme más en ti y me esforzare en hacer las cosas correctas sin lastimar tu corazoncito, te amo un monton, eres una chica genial para mi y sé lo valiosa que eres cuando me lo muestras diariamente, esta cancion es para ti, un besito muy fuerte a la distancia y te mando muchos abrazos, sé que todo mejorara porque esta en nosotros. te amo un mucho más muchismo" },
        { time: 18, spanish: "¿Recuerdas?" },
        { time: 20, spanish: "Cuando nos enamoramos" },
        { time: 22, spanish: "Éramos jóvenes e inocentes entonces" },
        { time: 27, spanish: "¿Recuerdas?" },
        { time: 30, spanish: "Cómo comenzó todo" },
        { time: 31, spanish: "Parecía el cielo, entonces, ¿por qué terminó?" },
        
        { time: 36, spanish: "¿Recuerdas? (Apuesto a que recuerdas)" },
        { time: 38, spanish: "En el otoño (Apuesto a que recuerdas)" },
        { time: 40, spanish: "Estábamos juntos todo el día (Apuesto a que recuerdas)" },
        { time: 44, spanish: "¿Recuerdas? (Apuesto a que recuerdas)" },
        { time: 46, spanish: "Nos tomábamos de las manos (Apuesto a que recuerdas)" },
        { time: 50, spanish: "Nos mirábamos a los ojos (Apuesto a que recuerdas)" },
        { time: 53, spanish: "Dime" },
    
        { time: 54, spanish: "¿Recuerdas el tiempo?" },
        { time: 57, spanish: "Cuando nos enamoramos" },
        { time: 59, spanish: "¿Recuerdas el tiempo?" },
        { time: 61, spanish: "Cuando nos conocimos, chica" },
        { time: 63, spanish: "¿Recuerdas el tiempo? (Oh, yo)" },
        { time: 66, spanish: "Cuando nos enamoramos" },
        { time: 68, spanish: "¿Recuerdas el tiempo?" },
    
        { time: 71, spanish: "¿Recuerdas cómo solíamos hablar?" },
        { time: 76, spanish: "Sabes, permanecíamos en el teléfono hasta el amanecer" },
        { time: 82, spanish: "¿Recuerdas todas las cosas que decíamos?" },
        { time: 84, spanish: "Como: 'Te amo tanto, nunca te dejaré ir'" },
    
        { time: 89, spanish: "¿Recuerdas? (Apuesto a que recuerdas)" },
        { time: 90, spanish: "En la primavera?" },
        { time: 94, spanish: "Cada mañana, los pájaros cantaban" },
        { time: 97, spanish: "¿Recuerdas? (Apuesto a que recuerdas)" },
        { time: 100, spanish: "¿Esos tiempos especiales?" },
        { time: 103, spanish: "Seguirán y seguirán" },
        { time: 104, spanish: "En el fondo de mi mente" },
    
        { time: 107, spanish: "¿Recuerdas el tiempo?" },
        { time: 286, spanish: "Tú y yo, mi señorita, TE EXTRAÑO MUCHO" },
    ];


    let currentIndex = 0;
    let currentTime = 0;

    audio.volume = 0.5;

    // Configuración del contexto de audio para el análisis
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = 150;

    // Función para dibujar el visualizador
    function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);

        analyser.getByteFrequencyData(dataArray);

        // Limpiar el canvas con fondo transparente
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);  // Esta línea limpia el fondo con transparencia

        const barWidth = canvas.width / bufferLength;
        let barHeight;
        let x = 0;

        // Dibujar las barras
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;
            canvasCtx.fillStyle = `rgb(255, ${barHeight + 100}, 50)`; // Color anaranjado
            canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }

    }

    // Reproducción del audio y visualización
    playButton.addEventListener('click', function () {
        audioContext.resume(); // Activa el contexto de audio en algunos navegadores
        audio.play(); // Reproducir el audio
        playButton.style.display = 'none'; // Ocultar el botón de play
        drawVisualizer(); // Iniciar la visualización
    });

    // Actualizar las letras con el tiempo del audio
    audio.ontimeupdate = function () {
        currentTime = audio.currentTime;

        if (currentIndex < lyrics.length) {
            const lyric = lyrics[currentIndex];
            const lyricElement = document.getElementById('lyrics-spanish');

            if (currentTime >= lyric.time) {
                lyricElement.textContent = lyric.spanish;
                lyricElement.classList.add('visible');
                if (currentTime >= lyrics[currentIndex + 1]?.time || currentIndex === lyrics.length - 1) {
                    currentIndex++;
                }
            }
        }
    };
});

// Array con los IDs de los gatitos
const cats = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8','cat9','cat10'];

// Función para mover los gatitos de manera suave
function moveCats() {
    cats.forEach(catId => {
        const cat = document.getElementById(catId);
        
        // Generamos posiciones aleatorias para las coordenadas x (left) y y (top)
        const randomX = Math.random() * (window.innerWidth - 120); // 120 es el ancho de la imagen del gato
        const randomY = Math.random() * (window.innerHeight - 120); // 120 es la altura de la imagen del gato
        
        // Aplicamos las nuevas posiciones a las imágenes
        cat.style.left = `${randomX}px`;
        cat.style.top = `${randomY}px`;
    });
}

// Llamamos a la función para mover los gatitos cada 2 segundos
setInterval(moveCats, 18000);


