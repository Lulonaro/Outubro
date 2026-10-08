// Dias restantes de outubro (só aparece em outubro)
const contagem = document.getElementById("contagem");
const hoje = new Date();

if (hoje.getMonth() === 9) {
  const restantes = 31 - hoje.getDate();
  contagem.textContent =
    restantes === 0
      ? "Hoje é o último dia do Outubro Rosa."
      : `Faltam ${restantes} dias para o fim do Outubro Rosa.`;
}

// Contador da lista "O que você pode fazer"
const caixas = document.querySelectorAll("#lista input");
const resultado = document.getElementById("resultado");

function atualizar() {
  const feitos = [...caixas].filter((c) => c.checked).length;
  resultado.textContent = `${feitos} de ${caixas.length} feitos.`;
}

caixas.forEach((c) => c.addEventListener("change", atualizar));