// Datos centrales del sitio. Todo lo editable vive acá.
//
// ⚠️ PENDIENTE ANTES DE PUBLICAR (no hay que inventar estos datos):
//   - whatsapp: el brief pide botón flotante de WhatsApp, pero no hay número
//     de contacto. Falta pedírselo a Yamila.
//   - linkedin: hoy apunta a linkedin.com (home). Falta la URL real del perfil.
//   - email: 'info@nutricionyat.com' — confirmar que el dominio y el buzón existan.
//   - matricula: el brief pide matrícula nacional/provincial. No se incluyó ninguna.
//   - instagram/docturno: URLs verificables, tomadas del proyecto original.

export const site = {
  name: 'Lic. Yamila Titonel',
  tagline: 'Nutricionyat • Nutrición Integral & Hábitos',
  email: 'info@nutricionyat.com',
  instagram: 'https://www.instagram.com/nutricionyat/',
  linkedin: 'https://www.linkedin.com/', // TODO(CONTENIDO): URL real del perfil
  docturno: 'https://6aac69026fc205a9.cartilla.drapp.com.ar/',
};

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Mi Enfoque', to: '/enfoque' },
  { label: 'Planes y Consultas', to: '/planes' },
  { label: 'Blog & Artículos', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

export const pillars = [
  {
    num: '01',
    icon: 'menu_book',
    title: 'Educación y Flexibilidad',
    description: 'Desmitificar dietas de moda; aprender a armar platos completos y variados sin pasar hambre ni prohibirse alimentos.',
    tags: ['Sin Prohibiciones', 'Aprender a Comer'],
  },
  {
    num: '02',
    icon: 'vital_signs',
    title: 'Salud Digestiva & Bienestar',
    description: 'Hábitos que mejoran tu digestión, energía cotidiana y relación con los alimentos para sentirte liviana y vital.',
    tags: ['Salud Intestinal', 'Energía Plena'],
  },
  {
    num: '03',
    icon: 'tune',
    title: 'Plan a tu Medida',
    description: 'Opciones adaptadas a tus tiempos, tus gustos, tu economía y estilo de vida laboral o familiar. Nutrición aplicable a tu realidad.',
    tags: ['100% Adaptable', 'Vida Real'],
  },
  {
    num: '04',
    icon: 'fitness_center',
    title: 'Composición Corporal & Metas',
    description: 'Enfoque saludable para optimizar energía, rendimiento físico o cambio en la composición corporal de forma progresiva y sin efecto rebote.',
    tags: ['Rendimiento', 'Sin Rebote'],
  },
];

export const plans = [
  {
    id: 'initial',
    tag: 'Punto de Inicio',
    icon: 'assignment',
    title: 'Consulta Nutricional Inicial',
    description: 'Evaluación completa de hábitos actuales, objetivos de salud, gustos, rutinas y armado de tu guía alimentaria personalizada.',
    features: [
      'Anamnesis nutricional y valoración de hábitos y estilo de vida.',
      'Plan de alimentación inicial personalizado con ideas de menú y recetario práctico.',
      'Pautas de compras, organización semanal y herramientas sostenibles.',
    ],
    cta: 'Solicitar Turno en Docturno',
    highlighted: false,
  },
  {
    id: 'continuous',
    tag: 'Seguimiento Activo',
    icon: 'all_inclusive',
    title: 'Plan Integral & Seguimiento Continuo',
    description: 'Acompañamiento paso a paso, revisiones periódicas, ajustes continuos del plan y soporte para que nunca te sientas sola en el proceso.',
    features: [
      'Consultas de seguimiento y reevaluación de metas de salud y bienestar.',
      'Ajuste de porciones, recetas de temporada y optimización de digestión.',
      'Canal directo para despejar dudas cotidianas entre consultas.',
      'Educación nutricional continua: aprendé a comer en eventos, viajes y salidas.',
    ],
    cta: 'Solicitar Turno en Docturno',
    highlighted: true,
    badge: 'Acompañamiento Recomendado',
  },
  {
    id: 'flexible',
    tag: 'Modalidad Flexible',
    icon: 'videocam',
    title: 'Atención Online & Presencial',
    description: 'Consultas cómodas por videollamada para todo el país y el exterior, o turnos presenciales con gestión fácil y ágil.',
    features: [
      'Turnos online mediante videollamada personalizada estés donde estés.',
      'Atención presencial en consultorio agendando en simples clics.',
      'Fácil reserva online inmediata a través de la cartilla DrApp / Docturno.',
    ],
    cta: 'Elegir Turno Online o Presencial',
    highlighted: false,
  },
];

// ⚠️ CONTENIDO DE MUESTRA (este repo es un mock para una propuesta comercial).
// Estos tres testimonios no son pacientes reales: están puestos para que la
// propuesta se vea completa. Al contratar, reemplazar por testimonios reales con
// autorización de la paciente, o quitar la sección.
export const testimonials = [
  {
    name: 'Mariana S.',
    detail: '32 años · Paciente Seguimiento Nutricionyat',
    quote: 'Llegué a Yamila cansada de hacer dietas restrictivas que abandonaba al mes. Con ella aprendí a comer de todo, regular las porciones y no sentir culpa cuando como afuera. Mejoró mi digestión y mi energía al 100%.',
    initials: 'MS',
  },
  {
    name: 'Lucas G.',
    detail: '41 años · Composición Corporal y Hábitos',
    quote: 'El cambio de composición corporal fue progresivo y sin pasar hambre. Los recetarios que comparte y sus ideas en Instagram (@nutricionyat) son súper fáciles y ricos para el día a día. Totalmente recomendable.',
    initials: 'LG',
  },
  {
    name: 'Dra. Valeria P.',
    detail: '38 años · Consulta Online',
    quote: 'Súper profesional, cálida y comprensiva. La modalidad de sacar turno por Docturno fue súper rápida y la consulta online muy completa. Me envió pautas claras y adaptadas a mi rutina laboral con guardias.',
    initials: 'VP',
  },
];

// Las respuestas describen la operatoria del consultorio (duración, plazos, facturación).
// Son afirmaciones verificables sobre su práctica: Yamila tiene que confirmarlas o
// reescribirlas con sus palabras antes de publicar.
export const faqs = [
  {
    q: '¿Cómo es la dinámica de una consulta online?',
    a: 'Las consultas online se realizan a través de una videollamada privada en alta definición de 50 a 60 minutos. Antes de la sesión completás un formulario exhaustivo de historial clínico, hábitos y síntomas. Durante el encuentro profundizamos en tus objetivos, interpretamos análisis y co-diseñamos el plan alimentario que recibirás digitalmente dentro de las 48 hs.',
  },
  {
    q: '¿Trabajás con obras sociales o sistema de reintegro?',
    a: 'La atención se realiza de forma particular para poder brindar el tiempo, la dedicación y el seguimiento minucioso que requiere la nutrición clínica funcional. Emitimos factura médica oficial con firma y matrícula profesional para que puedas presentar en tu medicina prepaga u obra social y solicitar el reintegro correspondiente según tu plan.',
  },
  {
    q: '¿Qué incluye exactamente el plan nutricional entregado?',
    a: 'Recibirás un documento digital completo y exclusivo para vos que contiene: estructuración de comidas diarias flexibles, combinaciones sugeridas, recetario antiinflamatorio con ingredientes accesibles, lista de compras organizada por grupos biológicos, pautas de manejo del estrés digestivo y, si correspondiera, protocolo de suplementación natural validada por estudios clínicos.',
  },
  {
    q: '¿Tengo que pesar la comida o contar calorías?',
    a: 'Rotundamente no. Salvo en objetivos de alta competencia deportiva específica, nuestro trabajo se enfoca en la densidad nutricional, el orden visual del plato, la variedad de fitonutrientes y la sincronización con tus señales corporales de hambre y saciedad. Buscamos liberarte de la calculadora mental.',
  },
];
