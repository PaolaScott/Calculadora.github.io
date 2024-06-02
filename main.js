<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById("valor-actual");
    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonApretado = boton.value;

            if (boton.id === "c") {
                limpiarPantalla();
                return;
            }

            if (boton.id === "borrar") {
                borrarUltimoCaracter();
                return;
            }

            if (boton.id === "igual") {
                calcularResultado();
                return;
            }

            actualizarPantalla(botonApretado);
        });
    });

    function limpiarPantalla() {
        pantalla.textContent = "0";
    }

    function borrarUltimoCaracter() {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
    }

    function calcularResultado() {
        try {
            pantalla.textContent = eval(pantalla.textContent.replace('÷', '/').replace('X', '*'));
        } catch {
            pantalla.textContent = "Error!";
        }
    }

    function actualizarPantalla(botonApretado) {
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    }
});
=======
document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById("valor-actual");
    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonApretado = boton.value;

            if (boton.id === "c") {
                limpiarPantalla();
                return;
            }

            if (boton.id === "borrar") {
                borrarUltimoCaracter();
                return;
            }

            if (boton.id === "igual") {
                calcularResultado();
                return;
            }

            actualizarPantalla(botonApretado);
        });
    });

    function limpiarPantalla() {
        pantalla.textContent = "0";
    }

    function borrarUltimoCaracter() {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
    }

    function calcularResultado() {
        try {
            pantalla.textContent = eval(pantalla.textContent.replace('÷', '/').replace('X', '*'));
        } catch {
            pantalla.textContent = "Error!";
        }
    }

    function actualizarPantalla(botonApretado) {
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    }
});
>>>>>>> dd046dd (Cambios en index)
