function clock() {
    //Creăm un nou obiect Date și îl atribuim unei variabile numite „timp”.
    let time = new Date(),

        // Accesam metoda „getHours” din obiectul Date.
        hours = time.getHours(),

        // Accesam metoda "getMinutes".
        minutes = time.getMinutes(),

        // Acesam metoda "getSeconds".
        seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = digital(hours) + ":" + digital(minutes) + ":" + digital(seconds);

    function digital(ora) {
        if (ora < 10) {
            ora = '0' + ora
        }
        return ora;
    }
}
setInterval(clock, 1000);