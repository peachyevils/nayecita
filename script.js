document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-btn');
    const lyrics = [
        { time: 18, spanish: "¿Recuerdas?" },
        { time: 21, spanish: "Cuando nos enamoramos" },
        { time: 22, spanish: "Éramos jóvenes e inocentes entonces" },
        { time: 27, spanish: "¿Recuerdas?" },
        { time: 29, spanish: "Cómo comenzó todo" },
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
        { time: 138, spanish: "Cuando nos enamoramos" },
        { time: 142, spanish: "¿Recuerdas el tiempo?" },
        { time: 146, spanish: "Cuando nos conocimos, chica" },
        { time: 150, spanish: "¿Recuerdas el tiempo? (Oh, yo)" },
        { time: 154, spanish: "Cuando nos enamoramos" },
        { time: 158, spanish: "¿Recuerdas el tiempo?" },
    
        { time: 162, spanish: "Esos dulces recuerdos" },
        { time: 166, spanish: "Siempre serán queridos para mí" },
        { time: 170, spanish: "Y chica, sin importar lo que se haya dicho" },
        { time: 174, spanish: "Nunca olvidaré lo que tuvimos" },
        { time: 178, spanish: "Ahora, nena" },
    
        { time: 182, spanish: "¿Recuerdas el tiempo? (¿Recuerdas?)" },
        { time: 186, spanish: "Cuando nos enamoramos" },
        { time: 190, spanish: "¿Recuerdas el tiempo?" },
        { time: 194, spanish: "Cuando nos conocimos, chica" },
        { time: 198, spanish: "¿Recuerdas el tiempo? (Oh, yo)" },
        { time: 202, spanish: "Cuando nos enamoramos" },
        { time: 206, spanish: "¿Recuerdas el tiempo? (Recuerda, mi amor)" },
    
        { time: 210, spanish: "¿Recuerdas el tiempo?" },
        { time: 214, spanish: "Cuando nos enamoramos" },
        { time: 218, spanish: "¿Recuerdas el tiempo? (Todo en mi mente, chica)" },
        { time: 222, spanish: "¿Recuerdas el tiempo? (Oh, yo)" },
        { time: 226, spanish: "Cuando nos enamoramos" },
        { time: 230, spanish: "¿Recuerdas el tiempo?" },
    
        { time: 234, spanish: "Recuerda el tiempo (¡Ooh!)" },
        { time: 238, spanish: "Recuerda el tiempo" },
        { time: 242, spanish: "¿Recuerdas, chica?" },
        { time: 246, spanish: "Recuerda el tiempo" },
        { time: 250, spanish: "En el teléfono, tú y yo" },
        { time: 254, spanish: "Recuerda el tiempo" },
        { time: 258, spanish: "Hasta el amanecer, dos o tres" },
        { time: 262, spanish: "¿Qué hay de nosotras, chica?" },
    
        { time: 266, spanish: "Recuerda el tiempo" },
        { time: 270, spanish: "¿Recuerdas, recuerdas, recuerdas?" },
        { time: 274, spanish: "Recuerda el tiempo (¿Recuerdas?)" },
        { time: 278, spanish: "En el parque, en la playa" },
        { time: 282, spanish: "Recuerda el tiempo" },
        { time: 286, spanish: "Tú y yo, nena" },
    ];


    let currentIndex = 0;
    let currentTime = 0;

    audio.volume = 0.5;

    // Función para iniciar la reproducción del audio cuando se haga clic en el botón
    playButton.addEventListener('click', function () {
        audio.play(); // Reproducir el audio
        playButton.style.display = 'none'; // Ocultar el botón de play después de hacer clic
    });

    // Reproducir la primera frase desde el principio
    audio.ontimeupdate = function () {
        currentTime = audio.currentTime;

        // Verificar si la letra actual debe mostrarse
        if (currentIndex < lyrics.length) {
            const lyric = lyrics[currentIndex];
            const lyricElement = document.getElementById('lyrics-spanish');

            if (currentTime >= lyric.time) {
                // Mostrar la frase con la transición de opacidad
                lyricElement.textContent = lyric.spanish;
                lyricElement.classList.add('visible');
                // Avanzar al siguiente índice solo cuando se haya mostrado la letra
                if (currentTime >= lyrics[currentIndex + 1]?.time || currentIndex === lyrics.length - 1) {
                    currentIndex++;
                }
            }
        }
    };
});
