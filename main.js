$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("¡Feliz cumpleaños, Alita! 🎉🎂 Que este día tan especial te traiga toda la felicidad, amor y éxito que mereces. Eres una chica increíble y te deseo lo mejor en cada paso de tu camino. ¡Un abrazo enorme!").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});