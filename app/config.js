// Edite aqui os dados da célula. A página inteira usa este arquivo.
export const celula = {
  nome: "Aviv",
  igreja: "Igreja Vide",
  slogan: "Família que vive a graça.",
  significado: {
    hebraico: "אביב",
    traducao: "primavera",
    // Texto explicando o significado. Deixe vazio para não exibir.
    texto:
      "Para nós, a primavera marca o fim do inverno. As sementes que ficaram congeladas começam a germinar.\n\nVivemos um tempo de muita germinação e colheita. Vivemos a primavera. Vivemos Aviv!",
  },
  sobre: [
    "Jovens que vivem a vida de célula como uma verdadeira família!",
    "Compartilhando a respeito de Jesus e de sua graça!",
  ],
  encontro: {
    dia: "Sábado",
    horario: "14h",
    local: "Mooca - SP (entre em contato para mais informações)",
    mapa: "https://maps.google.com/?q=Mooca+S%C3%A3o+Paulo",
  },
  // Formato: DDI + DDD + número, sem espaços. Ex.: 5511999999999
  whatsapp: "5511967496276",
  mensagemWhatsapp: "Oi! Quero conhecer a célula.",
  // Para usar fotos reais: coloque em /public e informe o caminho, ex.: "/fotos/1.jpg"
  fotos: [1, 2, 3, 4, 5, 6].map((n) => `/fotos/IMG_${n}.JPEG`),
};
