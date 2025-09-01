const chistes = [
  "—¿Cuál es el colmo de Aladdín? Tener mal genio.",
  "—¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "—¿Qué le dice una pared a otra? Nos vemos en la esquina.",
  "—¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
  "—Mamá, en el colegio me llaman distraído —Juanito, tú vives en la casa de enfrente.",
];

document.getElementById("chisteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * chistes.length);
  document.getElementById("chisteTexto").innerText = chistes[randomIndex];
});
