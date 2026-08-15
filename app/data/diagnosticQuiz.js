export const diagnosticQuestions = [
  {
    id: 1,
    category: "Posicionamento & Autoridade Web",
    question: "Como está a estrutura do seu site e presença no Google hoje?",
    options: [
      { text: "Não temos site ou nosso site é antigo, lento e desatualizado", score: 10, leak: 4000 },
      { text: "Temos um site básico, mas não funciona bem em celulares", score: 30, leak: 2500 },
      { text: "Temos um site moderno, mas não sabemos se o ChatGPT ou Google nos recomendam", score: 60, leak: 1500 },
      { text: "Nosso site é ultrarrápido e recomendado nas buscas por IA", score: 100, leak: 0 }
    ]
  },
  {
    id: 2,
    category: "Presença em Inteligência Artificial",
    question: "Se um potencial cliente pesquisar no ChatGPT ou Gemini por serviços na sua cidade, o que acontece?",
    options: [
      { text: "A IA recomenda meu concorrente ou nem sabe que minha empresa existe", score: 10, leak: 5000 },
      { text: "A IA mostra informações incompletas ou ultrapassadas", score: 35, leak: 3000 },
      { text: "Já aparecemos às vezes, mas sem destaque nas recomendações", score: 65, leak: 1200 },
      { text: "Somos a 1ª recomendação oficial nas respostas da Inteligência Artificial", score: 100, leak: 0 }
    ]
  },
  {
    id: 3,
    category: "Conversão & Atendimento no WhatsApp",
    question: "Qual o tempo médio de resposta para um novo cliente que chama no WhatsApp da sua empresa?",
    options: [
      { text: "Demoramos mais de 1 hora (ou às vezes só respondemos no dia seguinte)", score: 10, leak: 6000 },
      { text: "Entre 15 e 45 minutos em horário comercial", score: 40, leak: 3500 },
      { text: "Respondemos em menos de 10 minutos, mas de forma manual sem organização", score: 70, leak: 1500 },
      { text: "Atendimento imediato e organizado em colunas visuais de vendas", score: 100, leak: 0 }
    ]
  },
  {
    id: 4,
    category: "Atração & Imagem Corporativa",
    question: "Como sua empresa apresenta a imagem profissional e roda anúncios no Google/Instagram?",
    options: [
      { text: "Não rodamos anúncios e não temos fotos profissionais da estrutura", score: 10, leak: 5000 },
      { text: "Fotos amadoras de celular e anúncios sem acompanhamento de resultados", score: 35, leak: 3000 },
      { text: "Fotos boas e anúncios ativos, mas sem integração com o site", score: 65, leak: 1500 },
      { text: "Fotos profissionais, vídeos executivos e anúncios com acompanhamento de ROI", score: 100, leak: 0 }
    ]
  }
];
