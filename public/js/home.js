var boton = $(".boton-login").first(),
    login = $(".login-form").first(),
    flecha = $('.flecha-abajo').first(),
    menu = $('.menu').first();

function showForm() {
    login.slideToggle(300);
    boton.toggleClass("active");
}

function showMenu() {
    menu.fadeToggle(100);
    flecha.toggleClass("rotate");
}

$(boton).click(showForm);
$(flecha).click(showMenu);
