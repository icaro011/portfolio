const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");
const telaPequena = window.matchMedia("(max-width: 500px)");

function definirMenuAberto(aberto) {
    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuPrincipal.hidden = !aberto;
}

function atualizarNavegacao() {
    menuToggle.hidden = !telaPequena.matches;

    if (telaPequena.matches) {
        definirMenuAberto(false);
    } else {
        menuPrincipal.hidden = false;
        menuToggle.setAttribute("aria-expanded", "false")
    }
}

menuToggle.addEventListener("click", () => {
    const aberto = menuToggle.getAttribute("aria-expanded") === "true";
    definirMenuAberto(!aberto);
});

menuPrincipal.addEventListener("click", (evento) => {
    const link = evento.target.closest("a");

    if (link && telaPequena.matches) {
        definirMenuAberto(false);
    }
});

document.addEventListener("keydown", (evento) => {
    const aberto = menuToggle.getAttribute("aria-expanded") === "true";

    if (evento.key === "Escape" && telaPequena.matches && aberto) {
        definirMenuAberto(false);
        menuToggle.focus();
    }
});

telaPequena.addEventListener("change", atualizarNavegacao);

document.documentElement.classList.add("js");
atualizarNavegacao();