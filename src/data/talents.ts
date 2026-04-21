const baseTalents = [
  {
    id: 1,
    name: "Weightlifting",
    namePtBr: "Levantamento de peso",
    description: "Actions involving lifting or carrying heavy loads.",
    descriptionPtBr: "Ações envolvendo levantar ou carregar cargas pesadas."
  },
  {
    id: 2,
    name: "Pushing",
    namePtBr: "Empurrões",
    description: "Actions involving pushing objects or opponents.",
    descriptionPtBr: "Ações envolvendo empurrar objetos ou oponentes."
  },
  {
    id: 3,
    name: "Hand-to-hand combat",
    namePtBr: "Luta corporal",
    description: "Close combat without weapons.",
    descriptionPtBr: "Combate corpo a corpo sem armas."
  },
  {
    id: 4,
    name: "Throwing",
    namePtBr: "Arremessos",
    description: "Throwing objects with precision or strength.",
    descriptionPtBr: "Arremessar objetos com precisão ou força."
  },
  {
    id: 5,
    name: "Lockbreaking",
    namePtBr: "Arrombamentos",
    description: "Breaking locks or forced entry.",
    descriptionPtBr: "Quebrar fechaduras ou entrada forçada."
  },
  {
    id: 6,
    name: "Weapon proficiency (one specific)",
    namePtBr: "Perícia com arma (uma específica)",
    description: "Skill with a specific type of weapon.",
    descriptionPtBr: "Habilidade com um tipo específico de arma."
  },
  {
    id: 7,
    name: "Climbing",
    namePtBr: "Escaladas",
    description: "Climbing surfaces and obstacles.",
    descriptionPtBr: "Escalar superfícies e obstáculos."
  },
  {
    id: 8,
    name: "Dodging",
    namePtBr: "Esquivas",
    description: "Avoiding attacks or hazards.",
    descriptionPtBr: "Evitar ataques ou perigos."
  },
  {
    id: 9,
    name: "Acrobatics",
    namePtBr: "Acrobacias",
    description: "Performing agile and complex movements.",
    descriptionPtBr: "Executar movimentos ágeis e complexos."
  },
  {
    id: 10,
    name: "Delicate handling",
    namePtBr: "Manuseio delicado",
    description: "Handling fragile or sensitive objects.",
    descriptionPtBr: "Manusear objetos frágeis ou sensíveis."
  },
  {
    id: 11,
    name: "Stealth",
    namePtBr: "Furtividade",
    description: "Actions that require being quiet and unseen.",
    descriptionPtBr: "Ações em que o personagem precisa ficar quieto e não visível."
  },
  {
    id: 12,
    name: "Balance",
    namePtBr: "Equilíbrio",
    description: "Maintaining stability in difficult situations.",
    descriptionPtBr: "Manter estabilidade em situações difíceis."
  },
  {
    id: 13,
    name: "Pickpocket",
    namePtBr: "Roubo de bolso",
    description: "Stealing items without being noticed.",
    descriptionPtBr: "Roubar itens sem ser notado."
  },
  {
    id: 14,
    name: "Running",
    namePtBr: "Corridas",
    description: "Speed and endurance while running.",
    descriptionPtBr: "Velocidade e resistência ao correr."
  },
  {
    id: 15,
    name: "Riding",
    namePtBr: "Cavalgadas",
    description: "Riding animals or mounts.",
    descriptionPtBr: "Montar animais ou montarias."
  },
  {
    id: 16,
    name: "Swimming",
    namePtBr: "Natação",
    description: "Moving efficiently in water.",
    descriptionPtBr: "Mover-se com eficiência na água."
  },
  {
    id: 17,
    name: "Aiming",
    namePtBr: "Pontaria",
    description: "Accuracy when aiming attacks.",
    descriptionPtBr: "Precisão ao mirar ataques."
  },
  {
    id: 18,
    name: "Disarm",
    namePtBr: "Desarme",
    description: "Removing weapons from opponents.",
    descriptionPtBr: "Remover armas de oponentes."
  },
  {
    id: 19,
    name: "Riddles",
    namePtBr: "Enigmas",
    description: "Solving puzzles and riddles.",
    descriptionPtBr: "Resolver enigmas e quebra-cabeças."
  },
  {
    id: 20,
    name: "Strategic planning",
    namePtBr: "Planejamento estratégico",
    description: "Planning ahead with tactical thinking.",
    descriptionPtBr: "Planejar com pensamento tático."
  },
  {
    id: 21,
    name: "Traps",
    namePtBr: "Armadilhas",
    description: "Setting or detecting traps.",
    descriptionPtBr: "Criar ou detectar armadilhas."
  },
  {
    id: 22,
    name: "History",
    namePtBr: "História",
    description: "Knowledge about past events.",
    descriptionPtBr: "Conhecimento sobre eventos passados."
  },
  {
    id: 23,
    name: "Medicine",
    namePtBr: "Medicina",
    description: "Treating wounds and illnesses.",
    descriptionPtBr: "Tratar ferimentos e doenças."
  },
  {
    id: 24,
    name: "Biology",
    namePtBr: "Biologia",
    description: "Understanding living organisms.",
    descriptionPtBr: "Entender organismos vivos."
  },
  {
    id: 25,
    name: "Chemistry",
    namePtBr: "Química",
    description: "Knowledge of substances and reactions.",
    descriptionPtBr: "Conhecimento de substâncias e reações."
  },
  {
    id: 26,
    name: "Mechanics",
    namePtBr: "Mecânica",
    description: "Working with machines and devices.",
    descriptionPtBr: "Trabalhar com máquinas e dispositivos."
  },
  {
    id: 27,
    name: "Art",
    namePtBr: "Arte",
    description: "Creating or understanding artistic expressions.",
    descriptionPtBr: "Criar ou entender expressões artísticas."
  },
  {
    id: 28,
    name: "Cartography",
    namePtBr: "Cartografia",
    description: "Reading and creating maps.",
    descriptionPtBr: "Ler e criar mapas."
  },
  {
    id: 29,
    name: "Religion",
    namePtBr: "Religião",
    description: "Knowledge of beliefs and rituals.",
    descriptionPtBr: "Conhecimento de crenças e rituais."
  },
  {
    id: 30,
    name: "Driving",
    namePtBr: "Pilotagem",
    description: "Operating vehicles or mounts.",
    descriptionPtBr: "Operar veículos ou montarias."
  },
  {
    id: 31,
    name: "Orientation",
    namePtBr: "Orientação",
    description: "Navigating and finding directions.",
    descriptionPtBr: "Navegar e encontrar direções."
  },
  {
    id: 32,
    name: "Expression analysis",
    namePtBr: "Análise de expressão",
    description: "Reading facial and body expressions.",
    descriptionPtBr: "Ler expressões faciais e corporais."
  },
  {
    id: 33,
    name: "Enhanced hearing",
    namePtBr: "Audição apurada",
    description: "Heightened sense of hearing.",
    descriptionPtBr: "Sentido auditivo aprimorado."
  },
  {
    id: 34,
    name: "Enhanced vision",
    namePtBr: "Visão apurada",
    description: "Heightened sense of sight.",
    descriptionPtBr: "Sentido visual aprimorado."
  },
  {
    id: 35,
    name: "Empathy",
    namePtBr: "Empatia",
    description: "Understanding others' emotions.",
    descriptionPtBr: "Entender emoções alheias."
  },
  {
    id: 36,
    name: "Poisons",
    namePtBr: "Venenos",
    description: "Using or recognizing poisons.",
    descriptionPtBr: "Usar ou reconhecer venenos."
  },
  {
    id: 37,
    name: "Diseases",
    namePtBr: "Doenças",
    description: "Knowledge about illnesses.",
    descriptionPtBr: "Conhecimento sobre doenças."
  },
  {
    id: 38,
    name: "Physical fatigue",
    namePtBr: "Fadiga física",
    description: "Resistance to physical exhaustion.",
    descriptionPtBr: "Resistência ao cansaço físico."
  },
  {
    id: 39,
    name: "Pain resistance",
    namePtBr: "Resistência à dor",
    description: "Tolerance to pain.",
    descriptionPtBr: "Tolerância à dor."
  },
  {
    id: 40,
    name: "Extreme survival",
    namePtBr: "Sobrevivência em extremos",
    description: "Surviving harsh environments.",
    descriptionPtBr: "Sobreviver em ambientes extremos."
  },
  {
    id: 41,
    name: "Mental fatigue",
    namePtBr: "Fadiga mental",
    description: "Resistance to mental exhaustion.",
    descriptionPtBr: "Resistência ao cansaço mental."
  },
  {
    id: 42,
    name: "Persuasion",
    namePtBr: "Persuasão",
    description: "Convincing others through argument.",
    descriptionPtBr: "Convencer outros através de argumentos."
  },
  {
    id: 43,
    name: "Bluff",
    namePtBr: "Blefe",
    description: "Deceiving others intentionally.",
    descriptionPtBr: "Enganar outros intencionalmente."
  },
  {
    id: 44,
    name: "Negotiation",
    namePtBr: "Negociação comercial",
    description: "Reaching agreements between parties.",
    descriptionPtBr: "Chegar a acordos entre partes."
  },
  {
    id: 45,
    name: "Intimidation",
    namePtBr: "Intimidação",
    description: "Forcing others through fear.",
    descriptionPtBr: "Forçar outros através do medo."
  },
  {
    id: 46,
    name: "Inspiration",
    namePtBr: "Inspiração",
    description: "Motivating others positively.",
    descriptionPtBr: "Motivar outros positivamente."
  },
  {
    id: 47,
    name: "Leadership",
    namePtBr: "Liderança",
    description: "Guiding and commanding others.",
    descriptionPtBr: "Guiar e comandar outros."
  },
  {
    id: 48,
    name: "Performance",
    namePtBr: "Performance",
    description: "Entertaining or performing publicly.",
    descriptionPtBr: "Entreter ou se apresentar em público."
  },
  {
    id: 49,
    name: "Seduction",
    namePtBr: "Sedução",
    description: "Attracting others romantically or socially.",
    descriptionPtBr: "Atrair outros romanticamente ou socialmente."
  }
];