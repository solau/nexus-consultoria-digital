export const diagnosticQuestions = [
  {
    id: 1,
    category: "Posicionamento & Autoridade Web",
    question: "Como está a infraestrutura do seu site e presença no Google hoje?",
    options: [
      { text: "Não temos site ou nosso site é antigo, lento e desatualizado", score: 10, leak: 4000 },
      { text: "Temos um site básico, mas não é otimizado para celulares nem para IAs", score: 30, leak: 2500 },
      { text: "Temos um site moderno, mas não sabemos se o ChatGPT ou Google nos recomendam", score: 60, leak: 1500 },
      { text: "Nosso site é ultrarrápido e estruturado para IAs e Google Maps", score: 100, leak: 0 }
    ]
  },
  {
    id: 2,
    category: "Prontidão para Inteligência Artificial (GEO / AIO)",
    question: "Se um cliente em potencial perguntar no ChatGPT ou Perplexity pela sua empresa ou serviço na sua cidade, o que acontece?",
    options: [
      { text: "A IA recomenda meu concorrente ou nem sabe que minha empresa existe", score: 10, leak: 5000 },
      { text: "A IA mostra informações incompletas ou ultrapassadas", score: 35, leak: 3000 },
      { text: "Já aparecemos às vezes, mas não temos dados estruturados (Schema.org)", score: 65, leak: 1200 },
      { text: "Somos a 1ª recomendação oficial de IA com dados calibrados mensalmente", score: 100, leak: 0 }
    ]
  },
  {
    id: 3,
    category: "Conversão & Atendimento no WhatsApp",
    question: "Qual o tempo médio de resposta para um novo lead que envia mensagem no WhatsApp da sua empresa?",
    options: [
      { text: "Demoramos mais de 1 hora (ou às vezes só respondemos no dia seguinte)", score: 10, leak: 6000 },
      { text: "Entre 15 e 45 minutos em horário comercial", score: 40, leak: 3500 },
      { text: "Respondemos em menos de 10 minutos, mas não usamos CRM organizado", score: 70, leak: 1500 },
      { text: "Atendimento imediato (menos de 2 min 24/7) com CRM (Kommo/Pipedrive)", score: 100, leak: 0 }
    ]
  },
  {
    id: 4,
    category: "Atração & Rede de Parceiros",
    question: "Como sua empresa produz fotos/vídeos profissionais e roda anúncios no Google/Instagram?",
    options: [
      { text: "Não rodamos anúncios e não temos fotos profissionais da estrutura e equipe", score: 10, leak: 5000 },
      { text: "Fotos amadoras tiradas de celular e anúncios sem acompanhamento", score: 35, leak: 3000 },
      { text: "Fotos boas e anúncios ativos, mas sem integração com o site e CRM", score: 65, leak: 1500 },
      { text: "Fotógrafo corporativo, videomaker e gestor de tráfego dedicados com metrificação de ROI", score: 100, leak: 0 }
    ]
  }
];
