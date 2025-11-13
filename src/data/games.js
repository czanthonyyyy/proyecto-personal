// Datos de juegos reales con información completa
export const games = [
  {
    id: 1,
    title: 'Elden Ring',
    studio: 'FromSoftware',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    genre: 'Action RPG',
    rating: 4.9,
    reviews: 45230,
    releaseDate: '2022-02-25',
    featured: true,
    description: 'Un épico RPG de acción en mundo abierto donde exploras las Tierras Intermedias, un vasto reino lleno de misterios y peligros mortales.',
    storyline: 'Juegas como un Sin Luz, exiliado que debe recuperar los fragmentos del Anillo de Elden para convertirte en Señor del Anillo y restaurar el orden en las Tierras Intermedias devastadas.',
    features: [
      'Mundo abierto masivo interconectado',
      'Sistema de combate desafiante y preciso',
      'Más de 100 jefes únicos',
      'Construcción profunda de personajes',
      'Multijugador cooperativo y PvP',
      'Monturas para exploración',
      'Múltiples finales',
      'Arte y diseño de mundo excepcional'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GTX 1060 3GB / AMD RX 580 4GB',
        storage: '60 GB'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1070 8GB / AMD RX Vega 56 8GB',
        storage: '60 GB SSD'
      }
    },
    reviews: [
      { user: 'SoulsMaster', rating: 5, comment: 'La mejor experiencia de mundo abierto que he tenido. FromSoftware ha superado todas las expectativas.' },
      { user: 'RPGEnthusiast', rating: 5, comment: 'Elden Ring combina lo mejor de Dark Souls con un mundo abierto increíble. Absolutamente imprescindible.' },
      { user: 'GamerPro', rating: 5, comment: 'Obra maestra. El combate, la exploración y la narrativa son perfectos.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Call of Duty: Black Ops 6',
    studio: 'Treyarch / Raven Software',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    genre: 'FPS',
    rating: 4.6,
    reviews: 38250,
    releaseDate: '2024-10-25',
    featured: true,
    description: 'La última entrega de la legendaria franquicia Call of Duty que combina campaña cinematográfica, multijugador frenético y modo zombies.',
    storyline: 'Ambientada durante la Guerra del Golfo en los años 90, sigues a un equipo de operaciones negras mientras descubren una conspiración global que amenaza el orden mundial.',
    features: [
      'Campaña para un jugador de 8-10 horas',
      'Multijugador competitivo con 16+ mapas',
      'Modo Zombies cooperativo',
      'Sistema de progresión compartida',
      'Soporte para 120 FPS en consolas',
      'Cross-play entre plataformas',
      'Battle Pass y contenido post-lanzamiento',
      'Gráficos de nueva generación'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600 / AMD Ryzen 5 1400',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 960 / AMD RX 470',
        storage: '149 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700K / AMD Ryzen 7 2700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3060 Ti / AMD RX 6700 XT',
        storage: '149 GB SSD'
      }
    },
    reviews: [
      { user: 'FPSPro', rating: 5, comment: 'El mejor Call of Duty en años. El multijugador es adictivo y la campaña es emocionante.' },
      { user: 'CoDFan', rating: 4, comment: 'Buen juego, aunque el tamaño del archivo es enorme. El modo zombies es genial.' },
      { user: 'Gamer123', rating: 4, comment: 'Multijugador sólido con buenos mapas y armas.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2933620/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Helldivers 2',
    studio: 'Arrowhead Game Studios',
    price: 39.99,
    originalPrice: 39.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5'],
    genre: 'Third-Person Shooter',
    rating: 4.7,
    reviews: 28940,
    releaseDate: '2024-02-08',
    featured: false,
    description: 'Un shooter cooperativo de hasta 4 jugadores donde combates hordas alienígenas en una guerra galáctica por la democracia.',
    storyline: 'Como Helldiver de élite, despliegas en planetas hostiles para completar misiones de alto riesgo contra tres facciones alienígenas que amenazan Super Earth.',
    features: [
      'Cooperativo online para 4 jugadores',
      'Sistema de fuego amigo realista',
      'Estratagemas personalizables',
      'Misiones procedurales',
      'Guerra galáctica en tiempo real',
      'Cross-play PC-PS5',
      'Progresión compartida',
      'Actualizaciones constantes'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-4790K / AMD Ryzen 5 1500X',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti / AMD RX 470',
        storage: '100 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 / AMD RX 6600 XT',
        storage: '100 GB SSD'
      }
    },
    reviews: [
      { user: 'CoopGamer', rating: 5, comment: 'Increíble juego cooperativo. El caos y la diversión están garantizados con amigos.' },
      { user: 'ShooterFan', rating: 4, comment: 'Muy divertido, aunque puede ser frustrante cuando tus compañeros te matan por accidente.' },
      { user: 'TeamPlayer', rating: 5, comment: 'El mejor shooter cooperativo que he jugado. La guerra galáctica es épica.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Baldur\'s Gate 3',
    studio: 'Larian Studios',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'macOS'],
    genre: 'RPG',
    rating: 4.95,
    reviews: 52180,
    releaseDate: '2023-08-03',
    featured: true,
    description: 'Un RPG épico basado en Dungeons & Dragons 5E con narrativa profunda, combate táctico y decisiones que realmente importan.',
    storyline: 'Infectado con un parásito de ilícito mental, debes encontrar una cura mientras exploras los Reinos Olvidados y forjas alianzas con compañeros complejos.',
    features: [
      'Más de 174 horas de contenido',
      'Combate táctico por turnos',
      'Cooperativo online hasta 4 jugadores',
      '12 clases y 46 subclases',
      'Romance y relaciones profundas',
      'Consecuencias reales de las decisiones',
      'Múltiples finales',
      'Narrativa cinematográfica'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-4690 / AMD FX 8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD RX 480',
        storage: '150 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel i7-8700K / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 Super / AMD RX 5700 XT',
        storage: '150 GB SSD'
      }
    },
    reviews: [
      { user: 'RPGMaster', rating: 5, comment: 'El mejor RPG que he jugado en años. La libertad y las consecuencias de tus acciones son increíbles.' },
      { user: 'DnDFan', rating: 5, comment: 'Larian ha capturado perfectamente la esencia de D&D. Una obra maestra absoluta.' },
      { user: 'StoryLover', rating: 5, comment: 'La narrativa es profunda, los personajes son memorables y el combate es táctico y satisfactorio.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'Final Fantasy VII Rebirth',
    studio: 'Square Enix',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    platforms: ['PlayStation 5'],
    genre: 'JRPG',
    rating: 4.8,
    reviews: 32450,
    releaseDate: '2024-02-29',
    featured: true,
    description: 'La segunda parte de la trilogía remake de FF7, expandiendo la historia clásica con gráficos modernos y gameplay evolucionado.',
    storyline: 'Cloud y el grupo AVALANCHE persiguen a Sephiroth a través del mundo, descubriendo secretos sobre el pasado de Cloud y el destino del planeta.',
    features: [
      'Mundo abierto expansivo',
      'Sistema de combate híbrido acción/ATB',
      'Más de 100 horas de juego',
      'Minijuegos variados',
      'Tres personajes jugables simultáneos',
      'Modo foto avanzado',
      'Gráficos de nueva generación',
      'Banda sonora remasterizada'
    ],
    requirements: {
      minimum: {},
      recommended: {}
    },
    reviews: [
      { user: 'FF7Fan', rating: 5, comment: 'Square Enix ha superado todas las expectativas. El mundo abierto es hermoso y el combate es perfecto.' },
      { user: 'JRPGEnthusiast', rating: 5, comment: 'Una experiencia épica que expande magistralmente la historia original.' },
      { user: 'CloudLover', rating: 4, comment: 'Excelente juego, aunque el mundo abierto puede sentirse un poco vacío a veces.' }
    ],
    images: [
      'https://upload.wikimedia.org/wikipedia/en/c/ce/Final_Fantasy_VII_Rebirth_cover_art.png'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'Dragon Ball: Sparking! Zero',
    studio: 'Spike Chunsoft',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    genre: 'Fighting',
    rating: 4.5,
    reviews: 18760,
    releaseDate: '2024-10-11',
    featured: false,
    description: 'El sucesor espiritual de la serie Budokai Tenkaichi con más de 180 personajes jugables de Dragon Ball.',
    storyline: 'Revive las batallas más icónicas de Dragon Ball Z, Super, y GT en el modo historia, o crea tus propios escenarios.',
    features: [
      '180+ personajes jugables',
      'Combate 3D de arena',
      'Destructibilidad ambiental',
      'Multijugador online',
      'Modos historia extensos',
      'Personalización de personajes',
      'Gráficos mejorados',
      'Sistema de habilidades único'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-9600K / AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1660 / AMD RX 5500 XT',
        storage: '100 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 6700',
        storage: '100 GB SSD'
      }
    },
    reviews: [
      { user: 'DBZFan', rating: 5, comment: 'El mejor juego de Dragon Ball que he jugado. Los combates son épicos y fluidos.' },
      { user: 'FightingGamer', rating: 4, comment: 'Muy divertido, aunque la curva de aprendizaje puede ser empinada.' },
      { user: 'AnimeLover', rating: 4, comment: 'Gran cantidad de personajes y contenido. Los fanáticos de DBZ estarán encantados.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    title: 'Tekken 8',
    studio: 'Bandai Namco Entertainment',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    genre: 'Fighting',
    rating: 4.7,
    reviews: 21450,
    releaseDate: '2024-01-26',
    featured: false,
    description: 'La última entrega de la legendaria serie de lucha con gráficos impresionantes y mecánicas evolucionadas.',
    storyline: 'Continúa la saga Mishima mientras Kazuya y Jin Kazama enfrentan su destino en una batalla que decidirá el futuro del mundo.',
    features: [
      '32 luchadores al lanzamiento',
      'Sistema "Heat" revolucionario',
      'Modo historia cinematográfico',
      'Rollback netcode mejorado',
      'Modo arcade completo',
      'Replay takeover',
      'Gráficos de nueva generación',
      'Sistema de combate profundo'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K / AMD Ryzen 5 1600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti / AMD RX 470',
        storage: '100 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-7700K / AMD Ryzen 5 2600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 5700 XT',
        storage: '100 GB SSD'
      }
    },
    reviews: [
      { user: 'FightingPro', rating: 5, comment: 'El mejor Tekken hasta la fecha. El sistema Heat añade una nueva capa de estrategia.' },
      { user: 'TekkenFan', rating: 5, comment: 'Gráficos impresionantes y combate fluido. El netcode es excelente.' },
      { user: 'CompetitiveGamer', rating: 4, comment: 'Gran juego de lucha con mucho contenido y buen soporte competitivo.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    title: 'Hogwarts Legacy',
    studio: 'Avalanche Software',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    genre: 'Action RPG',
    rating: 4.6,
    reviews: 45620,
    releaseDate: '2023-02-10',
    featured: false,
    description: 'Vive tu propia aventura en el mundo mágico de Harry Potter como estudiante de Hogwarts en el siglo XIX.',
    storyline: 'Como estudiante con habilidad para manipular magia antigua, exploras Hogwarts y sus alrededores mientras descubres una rebelión goblin que amenaza el mundo mágico.',
    features: [
      'Mundo abierto masivo',
      'Sistema de hechizos profundo',
      'Personalización de personaje',
      'Clases de Hogwarts',
      'Doma de criaturas mágicas',
      'Misiones secundarias extensas',
      'Sistema de vuelo',
      'Exploración de castillo detallada'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600 / AMD Ryzen 5 1400',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 960 4GB / AMD RX 470 4GB',
        storage: '85 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700 / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 5700',
        storage: '85 GB SSD'
      }
    },
    reviews: [
      { user: 'PotterFan', rating: 5, comment: 'El juego de Harry Potter que siempre soñé. Hogwarts es increíblemente detallado.' },
      { user: 'RPGEnthusiast', rating: 4, comment: 'Buen RPG con un mundo mágico hermoso. La exploración es satisfactoria.' },
      { user: 'MagicLover', rating: 4, comment: 'Muy divertido, aunque la historia podría ser más profunda.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 9,
    title: 'EA Sports FC 25',
    studio: 'EA Sports',
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    genre: 'Sports',
    rating: 4.3,
    reviews: 15230,
    releaseDate: '2024-09-27',
    featured: false,
    description: 'La evolución de FIFA con licencias reales de más de 700 equipos y 19,000+ jugadores auténticos.',
    storyline: 'No aplica (juego deportivo)',
    features: [
      'Ultimate Team mejorado',
      'Modo carrera jugador/manager',
      'RUSH (modo 5v5)',
      'HyperMotionV tecnología',
      'Clubes Pro',
      'Más de 30 ligas oficiales',
      'Física de balón mejorada',
      'Gráficos de nueva generación'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K / AMD Ryzen 5 1600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti / AMD RX 570',
        storage: '100 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700 / AMD Ryzen 7 2700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 / AMD RX 5600 XT',
        storage: '100 GB SSD'
      }
    },
    reviews: [
      { user: 'SoccerFan', rating: 4, comment: 'Buen juego de fútbol con mejoras respecto a FIFA. Ultimate Team sigue siendo adictivo.' },
      { user: 'SportsGamer', rating: 4, comment: 'Gráficos mejorados y gameplay más fluido. El modo carrera es entretenido.' },
      { user: 'FCLover', rating: 3, comment: 'Similar a FIFA, aunque con algunas mejoras menores.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 10,
    title: 'Minecraft',
    studio: 'Mojang Studios',
    price: 26.95,
    originalPrice: 26.95,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    genre: 'Sandbox',
    rating: 4.8,
    reviews: 89250,
    releaseDate: '2011-11-18',
    featured: false,
    description: 'El juego sandbox definitivo donde construyes, exploras y sobrevives en mundos generados proceduralmente hechos de bloques.',
    storyline: 'No tiene historia lineal - creas tu propia aventura en un mundo infinito.',
    features: [
      'Mundos infinitos procedurales',
      'Modo creativo y supervivencia',
      'Multijugador cross-platform',
      'Redstone para circuitos',
      'Mods y marketplace',
      'Actualizaciones constantes',
      'Sistema de logros',
      'Servidores personalizados'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-3210 / AMD A8-7600',
        memory: '4 GB RAM',
        graphics: 'Intel HD Graphics 4000 / AMD Radeon R5',
        storage: '4 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-4690 / AMD A10-7800',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 700 / AMD Radeon Rx 200',
        storage: '4 GB SSD'
      }
    },
    reviews: [
      { user: 'CreativeBuilder', rating: 5, comment: 'El juego más creativo que existe. Las posibilidades son infinitas.' },
      { user: 'MinecraftFan', rating: 5, comment: 'Un clásico atemporal. Siempre hay algo nuevo que hacer.' },
      { user: 'SandboxLover', rating: 5, comment: 'Perfecto para todas las edades. La creatividad no tiene límites.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1794680/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 11,
    title: 'Grand Theft Auto V',
    studio: 'Rockstar North',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    genre: 'Action',
    rating: 4.7,
    reviews: 67890,
    releaseDate: '2013-09-17',
    featured: false,
    description: 'Un mundo abierto masivo en Los Santos donde vives la vida criminal a través de tres protagonistas distintos.',
    storyline: 'Sigue a Michael, Trevor y Franklin mientras planean atracos elaborados y navegan el submundo criminal de Los Santos.',
    features: [
      'Campaña de 30+ horas',
      'GTA Online multijugador masivo',
      'Mundo abierto viviente',
      'Tres protagonistas intercambiables',
      'Actividades variadas',
      'Editor de Rockstar',
      'Modo primera persona',
      'Contenido constante en GTA Online'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-3470 / AMD X8 FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '72 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-3470 / AMD X8 FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '72 GB SSD'
      }
    },
    reviews: [
      { user: 'OpenWorldFan', rating: 5, comment: 'El mejor mundo abierto que he experimentado. Los Santos es increíblemente detallado.' },
      { user: 'GTALover', rating: 5, comment: 'Una experiencia épica con tres protagonistas memorables. GTA Online es adictivo.' },
      { user: 'ActionGamer', rating: 4, comment: 'Gran juego aunque ya tiene sus años. Sigue siendo divertido.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 12,
    title: 'The Witcher 3: Wild Hunt',
    studio: 'CD Projekt Red',
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    genre: 'RPG',
    rating: 4.9,
    reviews: 72340,
    releaseDate: '2015-05-19',
    featured: false,
    description: 'Un RPG de mundo abierto narrativo donde juegas como Geralt de Rivia, un cazador de monstruos buscando a su hija adoptiva.',
    storyline: 'Geralt busca a Ciri mientras enfrenta la invasión de Nilfgaard y la amenaza de la Cacería Salvaje, seres sobrenaturales del otro mundo.',
    features: [
      '100+ horas de contenido',
      '36 finales posibles',
      'Sistema de combate profundo',
      'Gwent (juego de cartas interno)',
      'Dos DLCs masivos incluidos',
      'Decisiones morales complejas',
      'Mundo abierto detallado',
      'Narrativa excepcional'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-2500K / AMD Phenom II X4 940',
        memory: '6 GB RAM',
        graphics: 'NVIDIA GTX 660 / AMD Radeon HD 7870',
        storage: '50 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-3770 / AMD FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 770 / AMD Radeon R9 290',
        storage: '50 GB SSD'
      }
    },
    reviews: [
      { user: 'RPGMaster', rating: 5, comment: 'El mejor RPG de mundo abierto que he jugado. La narrativa y los personajes son excepcionales.' },
      { user: 'WitcherFan', rating: 5, comment: 'Obra maestra absoluta. Cada misión secundaria es una historia completa.' },
      { user: 'StoryLover', rating: 5, comment: 'Geralt es uno de los mejores protagonistas en videojuegos. El mundo es increíble.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 13,
    title: 'Cyberpunk 2077',
    studio: 'CD Projekt Red',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    genre: 'Action RPG',
    rating: 4.5,
    reviews: 56420,
    releaseDate: '2020-12-10',
    featured: true,
    description: 'Un RPG de mundo abierto en primera persona ambientado en Night City, una megalópolis obsesionada con el poder, la modificación corporal y el glamour.',
    storyline: 'Juegas como V, un mercenario buscando un implante único que es la clave de la inmortalidad, con la personalidad digital de Johnny Silverhand en tu cabeza.',
    features: [
      'Mundo abierto Night City',
      'Sistema de combate versátil',
      'Modificaciones cibernéticas',
      'Múltiples finales',
      'Expansión Phantom Liberty',
      'Ray tracing completo',
      'Narrativa profunda',
      'Personalización extensa'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-6700 / AMD Ryzen 5 1600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '70 GB SSD'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-12700 / AMD Ryzen 7 7800X3D',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 Super / AMD RX 5700 XT',
        storage: '70 GB SSD'
      }
    },
    reviews: [
      { user: 'CyberpunkFan', rating: 5, comment: 'Después de las actualizaciones, este juego es increíble. Night City es hermoso.' },
      { user: 'RPGEnthusiast', rating: 4, comment: 'Buen RPG con una historia interesante. Los gráficos son impresionantes.' },
      { user: 'OpenWorldLover', rating: 4, comment: 'Night City es un personaje en sí mismo. La atmósfera es perfecta.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 14,
    title: 'Red Dead Redemption 2',
    studio: 'Rockstar Games',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 4', 'Xbox One'],
    genre: 'Action',
    rating: 4.8,
    reviews: 61230,
    releaseDate: '2018-10-26',
    featured: false,
    description: 'Una épica historia del Viejo Oeste sobre forajidos y el ocaso de la era de los pistoleros en América.',
    storyline: 'Juegas como Arthur Morgan, un forajido tratando de sobrevivir mientras la banda Van der Linde enfrenta el colapso y la persecución del gobierno.',
    features: [
      'Campaña de 60+ horas',
      'Mundo abierto increíblemente detallado',
      'Sistema de honor dinámico',
      'Red Dead Online',
      'Caza y pesca profundas',
      'Gráficos fotorrealistas',
      'Narrativa cinematográfica',
      'Sistema de supervivencia'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GTX 1060 6GB / AMD RX 480 4GB',
        storage: '150 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-6700K / AMD Ryzen 7 3700X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GTX 1060 6GB / AMD RX 480 4GB',
        storage: '150 GB SSD'
      }
    },
    reviews: [
      { user: 'WesternFan', rating: 5, comment: 'La mejor historia en un videojuego. Arthur Morgan es un personaje inolvidable.' },
      { user: 'OpenWorldLover', rating: 5, comment: 'El mundo más detallado que he visto. Cada detalle está cuidado.' },
      { user: 'StoryEnthusiast', rating: 5, comment: 'Una experiencia emocional profunda. Rockstar en su mejor momento.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 15,
    title: 'Valorant',
    studio: 'Riot Games',
    price: 0,
    originalPrice: 0,
    discount: 0,
    platforms: ['PC'],
    genre: 'Tactical FPS',
    rating: 4.6,
    reviews: 89340,
    releaseDate: '2020-06-02',
    featured: false,
    description: 'Un shooter táctico 5v5 donde equipos de agentes únicos con habilidades especiales compiten en rondas de eliminación.',
    storyline: 'Los agentes de VALORANT Protocol protegen la Tierra de una versión especular amenazante, usando habilidades especiales y armas tácticas.',
    features: [
      'Free-to-play',
      '25+ agentes únicos',
      'Netcode de 128 tick',
      'Competitivo ranked',
      'Actualizaciones de temporada',
      'Sistema anti-cheat Vanguard',
      'Modo no clasificado',
      'Eventos y pases de batalla'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core 2 Duo E8400',
        memory: '4 GB RAM',
        graphics: 'Intel HD 4000',
        storage: '30 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-9400F',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti',
        storage: '30 GB SSD'
      }
    },
    reviews: [
      { user: 'FPSPro', rating: 5, comment: 'El mejor shooter táctico competitivo. El netcode es perfecto y los agentes son únicos.' },
      { user: 'CompetitiveGamer', rating: 5, comment: 'Adictivo y competitivo. Riot ha creado algo especial.' },
      { user: 'TacticalFan', rating: 4, comment: 'Excelente juego aunque requiere mucha práctica para dominar.' }
    ],
    images: [
      'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-794a4b57dccdac36088d49c1e88e4a7c'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 16,
    title: 'Fortnite',
    studio: 'Epic Games',
    price: 0,
    originalPrice: 0,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    genre: 'Battle Royale',
    rating: 4.4,
    reviews: 125680,
    releaseDate: '2017-07-25',
    featured: false,
    description: 'El battle royale más popular donde 100 jugadores compiten mientras construyen estructuras y luchan por ser el último en pie.',
    storyline: 'Múltiples temporadas con eventos narrativos en vivo que transforman el mapa constantemente.',
    features: [
      'Free-to-play',
      'Battle Royale 100 jugadores',
      'Sistema de construcción único',
      'Colaboraciones con marcas famosas',
      'Modos de juego variados',
      'Cross-platform completo',
      'Pases de temporada',
      'Eventos en vivo'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-3225',
        memory: '8 GB RAM',
        graphics: 'Intel HD 4000',
        storage: '30 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-7300U',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 960 / AMD R9 280',
        storage: '30 GB SSD'
      }
    },
    reviews: [
      { user: 'BRPlayer', rating: 4, comment: 'Divertido y adictivo. El sistema de construcción es único.' },
      { user: 'FortniteFan', rating: 4, comment: 'Perfecto para jugar con amigos. Las temporadas mantienen el juego fresco.' },
      { user: 'CasualGamer', rating: 4, comment: 'Gran juego gratuito con mucho contenido y eventos constantes.' }
    ],
    images: [
      'https://cdn2.unrealengine.com/26br-s3-egs-launcher-blade-2560x1440-2560x1440-6b1789b23c79.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 17,
    title: 'League of Legends',
    studio: 'Riot Games',
    price: 0,
    originalPrice: 0,
    discount: 0,
    platforms: ['PC', 'macOS'],
    genre: 'MOBA',
    rating: 4.5,
    reviews: 156780,
    releaseDate: '2009-10-27',
    featured: false,
    description: 'El MOBA más jugado del mundo donde equipos de 5 campeones únicos luchan para destruir el Nexo enemigo.',
    storyline: 'Campeones de Runeterra son invocados para luchar en la Grieta del Invocador en batallas estratégicas.',
    features: [
      'Free-to-play',
      '165+ campeones',
      'Competitivo ranked',
      'Esports mundial',
      'Actualizaciones cada 2 semanas',
      'Eventos de temporada',
      'Sistema de runas',
      'Múltiples modos de juego'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-530',
        memory: '2 GB RAM',
        graphics: 'NVIDIA GeForce 9600GT',
        storage: '16 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-3300',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce 560',
        storage: '16 GB SSD'
      }
    },
    reviews: [
      { user: 'MOBAFan', rating: 5, comment: 'El mejor MOBA que existe. La profundidad estratégica es increíble.' },
      { user: 'CompetitivePlayer', rating: 4, comment: 'Muy adictivo aunque puede ser tóxico a veces. El ranked es desafiante.' },
      { user: 'LoLPlayer', rating: 5, comment: 'Juego que ha definido el género MOBA. Siempre hay algo nuevo que aprender.' }
    ],
    images: [
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 18,
    title: 'Counter-Strike 2',
    studio: 'Valve Corporation',
    price: 0,
    originalPrice: 0,
    discount: 0,
    platforms: ['PC'],
    genre: 'Tactical FPS',
    rating: 4.7,
    reviews: 234560,
    releaseDate: '2023-09-27',
    featured: false,
    description: 'La evolución de CS:GO construida en Source 2, el shooter táctico competitivo por excelencia.',
    storyline: 'Terroristas vs. Contraterroristas en objetivos de bomba o rescate de rehenes.',
    features: [
      'Free-to-play',
      'Engine Source 2',
      'Sistema de sub-ticks',
      'Skins y mercado',
      'Competitivo Premier',
      'Mapas remasterizados',
      'Mejoras visuales',
      'Sistema de ranking mejorado'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-2500K',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 960 / AMD R9 280',
        storage: '85 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-9700K',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 5700',
        storage: '85 GB SSD'
      }
    },
    reviews: [
      { user: 'CSPro', rating: 5, comment: 'La mejor actualización de CS:GO. Source 2 mejora todo significativamente.' },
      { user: 'FPSMaster', rating: 5, comment: 'El shooter competitivo definitivo. El sistema de sub-ticks es revolucionario.' },
      { user: 'CompetitiveGamer', rating: 5, comment: 'CS2 es todo lo que esperaba y más. Gráficos y gameplay mejorados.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 19,
    title: 'Apex Legends',
    studio: 'Respawn Entertainment',
    price: 0,
    originalPrice: 0,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    genre: 'Battle Royale',
    rating: 4.6,
    reviews: 189450,
    releaseDate: '2019-02-04',
    featured: false,
    description: 'Battle royale con leyendas únicas, cada una con habilidades especiales. Combina velocidad, estrategia y acción.',
    storyline: 'Leyendas compiten en los Juegos Apex para fama, fortuna y gloria en la Frontera.',
    features: [
      'Free-to-play',
      '25+ leyendas únicas',
      'Escuadrones de 3 jugadores',
      'Sistema de ping inteligente',
      'Movimiento fluido y parkour',
      'Temporadas con nuevos mapas',
      'Modo ranked',
      'Eventos limitados'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-6300 / AMD FX-4350',
        memory: '6 GB RAM',
        graphics: 'NVIDIA GTX 640 / AMD Radeon HD 7700',
        storage: '56 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i5-3570K / AMD Ryzen 5',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD Radeon R9 290',
        storage: '56 GB SSD'
      }
    },
    reviews: [
      { user: 'BRPlayer', rating: 5, comment: 'El mejor battle royale que he jugado. Las leyendas añaden mucha profundidad.' },
      { user: 'ApexFan', rating: 5, comment: 'Movimiento fluido, combate satisfactorio y constantes actualizaciones. Excelente.' },
      { user: 'CompetitiveGamer', rating: 4, comment: 'Muy divertido aunque el matchmaking puede ser frustrante a veces.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 20,
    title: 'Stardew Valley',
    studio: 'ConcernedApe',
    price: 14.99,
    originalPrice: 14.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    genre: 'Farming Sim',
    rating: 4.9,
    reviews: 45670,
    releaseDate: '2016-02-26',
    featured: false,
    description: 'Un juego de simulación de granja donde escapas de la vida corporativa para restaurar la granja de tu abuelo.',
    storyline: 'Heredas la granja destartalada de tu abuelo en Stardew Valley y trabajas para convertirla en un próspero hogar mientras te integras a la comunidad.',
    features: [
      'Cultivo y cría de animales',
      'Romance con 12 candidatos',
      'Exploración de minas',
      'Pesca y recolección',
      'Multijugador cooperativo hasta 4',
      'Actualizaciones gratuitas constantes',
      'Sistema de temporadas',
      'Misiones y eventos'
    ],
    requirements: {
      minimum: {
        os: 'Windows Vista 64-bit',
        processor: '2 GHz',
        memory: '2 GB RAM',
        graphics: '256 MB VRAM',
        storage: '500 MB'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: '3 GHz',
        memory: '4 GB RAM',
        graphics: '512 MB VRAM',
        storage: '500 MB SSD'
      }
    },
    reviews: [
      { user: 'FarmingFan', rating: 5, comment: 'El juego más relajante y adictivo que he jugado. Perfecto para desconectar.' },
      { user: 'IndieLover', rating: 5, comment: 'Obra maestra indie. ConcernedApe ha creado algo especial.' },
      { user: 'SimulationGamer', rating: 5, comment: 'Increíblemente profundo y satisfactorio. Las horas vuelan jugando.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 21,
    title: 'Resident Evil 4 Remake',
    studio: 'Capcom',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    genre: 'Horror',
    rating: 4.8,
    reviews: 34210,
    releaseDate: '2023-03-24',
    featured: false,
    description: 'Un remake moderno del clásico de terror con gráficos impresionantes, mecánicas actualizadas y terror renovado.',
    storyline: 'Leon S. Kennedy es enviado a rescatar a la hija del presidente en una aldea rural europea infectada por el parásito Las Plagas.',
    features: [
      'Gráficos RE Engine',
      'Combate renovado',
      'Sistema de crafteo expandido',
      'Modo profesional',
      'Contenido adicional DLC',
      'VR compatible',
      'Mejoras de jugabilidad',
      'Narrativa expandida'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'AMD Ryzen 5 3600 / Intel Core i7-8700',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon RX 5700 / NVIDIA GTX 1070',
        storage: '67 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'AMD Ryzen 7 3700X / Intel Core i7-9700',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon RX 6700 XT / NVIDIA RTX 2070',
        storage: '67 GB SSD'
      }
    },
    reviews: [
      { user: 'HorrorFan', rating: 5, comment: 'El mejor remake que he jugado. Capcom ha mejorado el clásico perfectamente.' },
      { user: 'RE4Lover', rating: 5, comment: 'Mantiene la esencia del original mientras añade mejoras modernas. Excelente.' },
      { user: 'SurvivalHorror', rating: 4, comment: 'Terror intenso y combate satisfactorio. Un remake ejemplar.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 22,
    title: 'Hades II',
    studio: 'Supergiant Games',
    price: 29.99,
    originalPrice: 29.99,
    discount: 0,
    platforms: ['PC'],
    genre: 'Roguelike',
    rating: 4.7,
    reviews: 28750,
    releaseDate: '2024-05-06',
    featured: false,
    description: 'La secuela del aclamado roguelike donde juegas como Melinoë, hermana de Zagreus, en una lucha contra el Titán Cronos.',
    storyline: 'Melinoë, princesa del Inframundo entrenada por la bruja Hécate, debe detener al Titán Cronos que ha invadido el Hades.',
    features: [
      'Combate fluido y rápido',
      'Sistema de bendiciones divinas',
      'Narración emergente profunda',
      'Arte dibujado a mano',
      'Banda sonora épica',
      'Rejugabilidad infinita',
      'Nuevas armas y habilidades',
      'Sistema de progresión mejorado'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Dual Core 3.0 GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 750 Ti / AMD R7 260X',
        storage: '15 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Quad Core 3.5 GHz',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '15 GB SSD'
      }
    },
    reviews: [
      { user: 'RoguelikeFan', rating: 5, comment: 'Supergiant ha superado el original. El combate y la narrativa son perfectos.' },
      { user: 'HadesLover', rating: 5, comment: 'Increíble secuela que mejora todo del primer juego. Adictivo y hermoso.' },
      { user: 'IndieGamer', rating: 4, comment: 'Excelente roguelike con arte y música excepcionales.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 23,
    title: 'Palworld',
    studio: 'Pocketpair',
    price: 29.99,
    originalPrice: 29.99,
    discount: 0,
    platforms: ['PC', 'Xbox Series X|S'],
    genre: 'Survival',
    rating: 4.4,
    reviews: 67890,
    releaseDate: '2024-01-19',
    featured: false,
    description: 'Un juego de supervivencia de mundo abierto donde capturas y trabajas con criaturas llamadas "Pals" para construir, pelear y sobrevivir.',
    storyline: 'Sobrevive en las Islas Palpagos capturando Pals, construyendo bases y enfrentando organizaciones criminales y jefes poderosos.',
    features: [
      '100+ Pals capturables',
      'Cooperativo hasta 4 jugadores',
      'Construcción de bases',
      'Combate con armas y Pals',
      'Crafteo profundo',
      'Servidores dedicados hasta 32 jugadores',
      'Sistema de trabajo automatizado',
      'Exploración de mundo abierto'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-3570K / AMD Ryzen 5 2400G',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1050 / AMD Radeon RX 560',
        storage: '40 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i9-9900K / AMD Ryzen 7 3700X',
        memory: '32 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD Radeon RX 5700 XT',
        storage: '40 GB SSD'
      }
    },
    reviews: [
      { user: 'SurvivalFan', rating: 4, comment: 'Pokémon con armas y supervivencia. Muy divertido aunque puede ser repetitivo.' },
      { user: 'PalworldLover', rating: 4, comment: 'Adictivo y entretenido. La combinación de géneros funciona bien.' },
      { user: 'CraftingGamer', rating: 4, comment: 'Buen juego de supervivencia con mecánicas únicas de captura.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 24,
    title: 'Street Fighter 6',
    studio: 'Capcom',
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    genre: 'Fighting',
    rating: 4.8,
    reviews: 32140,
    releaseDate: '2023-06-02',
    featured: false,
    description: 'La última entrega de la legendaria serie de lucha con el revolucionario sistema Drive y World Tour mode.',
    storyline: 'El modo World Tour sigue a tu avatar personalizado explorando Metro City, aprendiendo de luchadores legendarios y descubriendo tu propio estilo.',
    features: [
      '18+ luchadores (en crecimiento)',
      'Sistema Drive revolucionario',
      'Modo World Tour (RPG)',
      'Battle Hub social',
      'Rollback netcode perfecto',
      'Comentaristas reales en tiempo real',
      'Sistema de combate profundo',
      'Personalización de avatar'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-7500 / AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '60 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700 / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2070 / AMD RX 5700 XT',
        storage: '60 GB SSD'
      }
    },
    reviews: [
      { user: 'FightingPro', rating: 5, comment: 'El mejor Street Fighter hasta la fecha. El sistema Drive es genial.' },
      { user: 'SF6Fan', rating: 5, comment: 'Capcom ha creado una experiencia completa. World Tour es sorprendente.' },
      { user: 'CompetitiveGamer', rating: 5, comment: 'Netcode perfecto y combate fluido. El mejor juego de lucha actual.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 25,
    title: 'Hollow Knight',
    studio: 'Team Cherry',
    price: 10.49,
    originalPrice: 14.99,
    discount: 30,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    genre: 'Metroidvania',
    rating: 4.8,
    reviews: 52340,
    releaseDate: '2017-02-24',
    featured: false,
    description: 'Un desafiante metroidvania 2D con arte dibujado a mano donde exploras el reino subterráneo de Hallownest.',
    storyline: 'Un pequeño caballero sin nombre desciende a Hallownest, un antiguo reino en ruinas infectado por una misteriosa plaga, para descubrir sus secretos.',
    features: [
      'Mundo interconectado masivo',
      'Combate desafiante tipo souls',
      '40+ jefes únicos',
      '150+ enemigos',
      'Arte 2D dibujado a mano',
      'Banda sonora orquestada',
      '50+ horas de contenido',
      'Múltiples finales'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 64-bit',
        processor: 'Intel Core 2 Duo E5200',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce 9800 GTX / AMD Radeon HD 5570',
        storage: '9 GB'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 560 / AMD Radeon HD 6950',
        storage: '9 GB SSD'
      }
    },
    reviews: [
      { user: 'MetroidvaniaFan', rating: 5, comment: 'Obra maestra del género. El arte, la música y el gameplay son perfectos.' },
      { user: 'IndieLover', rating: 5, comment: 'El mejor metroidvania que he jugado. Hallownest es increíblemente hermoso.' },
      { user: 'PlatformerGamer', rating: 5, comment: 'Desafiante pero justo. Cada área es única y memorable.' }
    ],
    images: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg'
    ],
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
]
