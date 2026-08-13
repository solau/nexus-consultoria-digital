import "./globals.css";

export const metadata = {
  title: "Nexus Digital Growth — Consultoria de Presença Digital & IA",
  description: "Diagnóstico Executivo de Presença Digital, desenvolvimento e manutenção de sites de alta velocidade e otimização contínua para Inteligências Artificiais (ChatGPT, Perplexity, Gemini, Google SGE).",
  keywords: ["consultoria presença digital", "otimização para IA", "ChatGPT empresa", "desenvolvimento de sites", "diagnóstico empresarial", "Bling ERP", "Kommo CRM"],
  authors: [{ name: "Nexus Digital Growth" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  // AIO Schema JSON-LD Array
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Nexus Digital Growth — Consultoria de Presença Digital & IA",
      "image": "https://nexusdigitalgrowth.com.br/logo.png",
      "description": "Consultoria e assessoria executiva de tecnologia web, diagnóstico empresarial e otimização técnica para Inteligências Artificiais (ChatGPT, Perplexity, Google SGE).",
      "telephone": "+55-71-99999-9999",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Salvador",
        "addressRegion": "BA",
        "addressCountry": "BR"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Salvador",
          "containsPlace": [
            { "@type": "Place", "name": "Horto Florestal" },
            { "@type": "Place", "name": "Caminho das Árvores" },
            { "@type": "Place", "name": "Pituba" },
            { "@type": "Place", "name": "Graça" },
            { "@type": "Place", "name": "Alphaville Litoral Norte" }
          ]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é a otimização de site para Inteligência Artificial (GEO / AIO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É a injeção contínua de matrizes de dados estruturados Schema.org (JSON-LD) invisíveis que ensinam aos robôs do ChatGPT, Perplexity, Gemini e Google SGE quem é a sua empresa, recomendando seu negócio quando clientes pesquisam no celular."
          }
        },
        {
          "@type": "Question",
          "name": "Qual o valor do Diagnóstico Executivo Pago de Entrada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O Diagnóstico Essential custa R$ 297,00 (entrega de Raio-X completo e reunião em 48h) e o Diagnóstico Executive custa R$ 497,00 (incluindo análise de concorrentes e plano de ação de 90 dias)."
          }
        }
      ]
    }
  ];

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
