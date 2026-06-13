/* ===========================================================================
   Lightweight, dependency-free i18n.
   A typed dictionary keyed by locale. The page reads `dict[locale]` and the
   structure is identical across languages so the UI never branches on locale.
   ======================================================================== */

export type Locale = "pt" | "en" | "es";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

/** Stable identifiers for the four navigable slides (plus the hero). */
export type SlideId = "hero" | "funcao" | "linha" | "vantagens" | "specs";

export interface SpecRow {
  label: string;
  value: string;
}

export interface Advantage {
  /** key into the icon registry in components/icons.tsx */
  icon:
    | "valve"
    | "shield"
    | "torque"
    | "flow"
    | "sphere"
    | "seal";
  text: string;
}

export interface Dictionary {
  nav: { valvula: string; funcao: string; linha: string; vantagens: string; specs: string };
  social: { youtube: string; linkedin: string; whatsapp: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    quote: string;
    datasheet: string;
  };
  funcao: { title: string; body: string };
  linha: {
    title: string;
    body: string;
    applicationsTitle: string;
    applications: string[];
    footnote: string;
  };
  vantagens: { title: string; items: Advantage[] };
  specs: { title: string; rows: SpecRow[] };
}

export const dictionary: Record<Locale, Dictionary> = {
  /* ------------------------------- Português ----------------------------- */
  pt: {
    nav: {
      valvula: "Válvula Esfera",
      funcao: "Função",
      linha: "Linha S6800",
      vantagens: "Vantagens",
      specs: "Especificações",
    },
    social: { youtube: "YouTube", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Válvula Esfera • Linha S6800",
      titleLead: "Válvulas Esfera",
      titleAccent: "Linha S6800",
      subtitle:
        "Qualidade, confiabilidade e desempenho superior para controle absoluto.",
      quote: "Solicitar Orçamento",
      datasheet: "Baixar Datasheet",
    },
    funcao: {
      title: "Função",
      body: "As válvulas esfera da Skid Power são amplamente usadas em várias indústrias devido à sua qualidade e desempenho superiores. Projetadas para atender aos mais altos padrões, essas válvulas são ideais para bloqueio nas mais diversas aplicações. A linha Skid Power evoluiu para oferecer soluções padrão, atendendo às necessidades diversas dos clientes.",
    },
    linha: {
      title: "Linha S6800",
      body: "Reconhecidas pela alta qualidade, confiabilidade e desempenho superior, são amplamente aplicadas em diversos segmentos industriais. Projetadas para atender aos mais rigorosos padrões de segurança, oferecem acionamento preciso.",
      applicationsTitle: "Aplicações",
      applications: [
        "Gases especiais",
        "Produtos químicos abrasivos",
        "Combustíveis e fluidos industriais",
      ],
      footnote:
        "A linha S6800 combina durabilidade, vedação eficiente e operação segura para aplicações críticas.",
    },
    vantagens: {
      title: "Vantagens",
      items: [
        { icon: "valve", text: "Modelos ON-OFF de 2 vias (ângulo) ou 3 vias" },
        { icon: "shield", text: "Haste à prova de explosão (carregada por mola)" },
        { icon: "torque", text: "Baixo torque de operação (cabo de nylon e inserção de latão)" },
        { icon: "flow", text: "Passagem total ou reduzida" },
        { icon: "sphere", text: "Esfera flutuante (assentamento positivo)" },
        { icon: "seal", text: "Vedação eficiente e operação segura" },
      ],
    },
    specs: {
      title: "Especificações",
      rows: [
        { label: "Pressão de trabalho", value: "1000 PSI a 6000 PSI" },
        { label: "Tamanhos", value: '1/8", 1/4", 3/8", 1/2", 3/4", 1" e outros' },
        { label: "Materiais", value: "Aço inox (316L, 316), duplex, super duplex e outros" },
        { label: "Assento", value: "PTFE / POM / DELRIN" },
        { label: "Conexão", value: "Dupla Anilha, Rosca Macho, Rosca Fêmea" },
        { label: "Padrão do Corpo", value: "Quadrado, Hexagonal, Redondo" },
        { label: "Aplicação", value: "Controle de processos, Instrumentação" },
      ],
    },
  },

  /* -------------------------------- English ------------------------------ */
  en: {
    nav: {
      valvula: "Ball Valve",
      funcao: "Function",
      linha: "S6800 Series",
      vantagens: "Advantages",
      specs: "Specifications",
    },
    social: { youtube: "YouTube", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Ball Valve • S6800 Series",
      titleLead: "Ball Valves",
      titleAccent: "S6800 Series",
      subtitle:
        "Quality, reliability and superior performance for absolute control.",
      quote: "Request a Quote",
      datasheet: "Download Datasheet",
    },
    funcao: {
      title: "Function",
      body: "Skid Power ball valves are widely used across many industries thanks to their superior quality and performance. Engineered to meet the highest standards, they are ideal for shut-off duty in the most varied applications. The Skid Power line has evolved to deliver standard solutions that meet the diverse needs of our customers.",
    },
    linha: {
      title: "S6800 Series",
      body: "Renowned for high quality, reliability and superior performance, they are widely applied across many industrial segments. Designed to meet the most demanding safety standards, they deliver precise actuation.",
      applicationsTitle: "Applications",
      applications: [
        "Special gases",
        "Abrasive chemicals",
        "Fuels and industrial fluids",
      ],
      footnote:
        "The S6800 series combines durability, efficient sealing and safe operation for critical applications.",
    },
    vantagens: {
      title: "Advantages",
      items: [
        { icon: "valve", text: "2-way (angle) or 3-way ON-OFF models" },
        { icon: "shield", text: "Blow-out proof stem (spring loaded)" },
        { icon: "torque", text: "Low operating torque (nylon handle, brass insert)" },
        { icon: "flow", text: "Full or reduced bore" },
        { icon: "sphere", text: "Floating ball (positive seating)" },
        { icon: "seal", text: "Efficient sealing and safe operation" },
      ],
    },
    specs: {
      title: "Specifications",
      rows: [
        { label: "Working pressure", value: "1000 PSI to 6000 PSI" },
        { label: "Sizes", value: '1/8", 1/4", 3/8", 1/2", 3/4", 1" and others' },
        { label: "Materials", value: "Stainless steel (316L, 316), duplex, super duplex and others" },
        { label: "Seat", value: "PTFE / POM / DELRIN" },
        { label: "Connection", value: "Double Ferrule, Male Thread, Female Thread" },
        { label: "Body shape", value: "Square, Hexagonal, Round" },
        { label: "Application", value: "Process control, Instrumentation" },
      ],
    },
  },

  /* -------------------------------- Español ------------------------------ */
  es: {
    nav: {
      valvula: "Válvula de Bola",
      funcao: "Función",
      linha: "Línea S6800",
      vantagens: "Ventajas",
      specs: "Especificaciones",
    },
    social: { youtube: "YouTube", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Válvula de Bola • Línea S6800",
      titleLead: "Válvulas de Bola",
      titleAccent: "Línea S6800",
      subtitle:
        "Calidad, confiabilidad y rendimiento superior para un control absoluto.",
      quote: "Solicitar Cotización",
      datasheet: "Descargar Datasheet",
    },
    funcao: {
      title: "Función",
      body: "Las válvulas de bola de Skid Power se utilizan ampliamente en diversas industrias por su calidad y rendimiento superiores. Diseñadas para cumplir con los más altos estándares, son ideales para bloqueo en las más variadas aplicaciones. La línea Skid Power ha evolucionado para ofrecer soluciones estándar que atienden las diversas necesidades de los clientes.",
    },
    linha: {
      title: "Línea S6800",
      body: "Reconocidas por su alta calidad, confiabilidad y rendimiento superior, se aplican ampliamente en diversos segmentos industriales. Diseñadas para cumplir con los más rigurosos estándares de seguridad, ofrecen un accionamiento preciso.",
      applicationsTitle: "Aplicaciones",
      applications: [
        "Gases especiales",
        "Productos químicos abrasivos",
        "Combustibles y fluidos industriales",
      ],
      footnote:
        "La línea S6800 combina durabilidad, sellado eficiente y operación segura para aplicaciones críticas.",
    },
    vantagens: {
      title: "Ventajas",
      items: [
        { icon: "valve", text: "Modelos ON-OFF de 2 vías (ángulo) o 3 vías" },
        { icon: "shield", text: "Vástago a prueba de explosión (cargado por resorte)" },
        { icon: "torque", text: "Bajo torque de operación (mango de nylon e inserción de latón)" },
        { icon: "flow", text: "Paso total o reducido" },
        { icon: "sphere", text: "Bola flotante (asentamiento positivo)" },
        { icon: "seal", text: "Sellado eficiente y operación segura" },
      ],
    },
    specs: {
      title: "Especificaciones",
      rows: [
        { label: "Presión de trabajo", value: "1000 PSI a 6000 PSI" },
        { label: "Tamaños", value: '1/8", 1/4", 3/8", 1/2", 3/4", 1" y otros' },
        { label: "Materiales", value: "Acero inox (316L, 316), duplex, super duplex y otros" },
        { label: "Asiento", value: "PTFE / POM / DELRIN" },
        { label: "Conexión", value: "Doble Férula, Rosca Macho, Rosca Hembra" },
        { label: "Forma del cuerpo", value: "Cuadrado, Hexagonal, Redondo" },
        { label: "Aplicación", value: "Control de procesos, Instrumentación" },
      ],
    },
  },
};
