function atualizarContador() {
    const inicio = new Date("2025-05-09T00:00:00");
    const agora = new Date();

    // CALCULO DE MESES COMPLETOS
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let totalMeses = anos * 12 + meses;

    // Se ainda não chegou o dia 9 deste mês → não completou mês
    if (agora.getDate() < inicio.getDate()) {
        totalMeses--;
    }

    if (totalMeses < 0) totalMeses = 0;

    // Calcula a data do "último mês completo"
    let dataUltimoMes = new Date(inicio);
    dataUltimoMes.setMonth(inicio.getMonth() + totalMeses);

    // DIFERENÇA entre agora e o último mês completo
    const diferenca = agora - dataUltimoMes;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo_de_namoro").textContent =
        totalMeses + " meses, " +
        dias + " dias, " +
        horas + "h, " +
        minutos + "m, " +
        segundos + "s";
}

setInterval(atualizarContador, 1000);
atualizarContador();