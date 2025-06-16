import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { ImpactoSocial } from '../schemas/impactoSocial.schema.js'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || ''

const seedPIS = [
    {
        title: 'Viaja Sin Tránsito',
        img: 'http://148.206.168.178/dcni/images/images/1747361333409-ViajaSinTransito.webp',
        subtitle: '',
        content: [
        {
            link: 'http://148.206.168.178/vst/itinerary',
            creator: 'Iñaki Yarim García Tenorio (idea original: Christian Jiménez Vázquez y Alexis Hernández Gómez)',
            content: [
            '🚗 Viajes compartidos entre estudiantes con rutas hacia la UAM-C.\n' +
                '📅 Conductores publican itinerarios, pasajeros reservan lugar fácilmente.\n' +
                '💸 Ahorro en gasolina, se comparten los costos del trayecto.\n' +
                '👥 Mayor seguridad y comodidad para quienes no tienen auto.\n' +
                '🤝 Fomenta comunidad, reduce tráfico y promueve transporte colaborativo.'
            ],
            technologies: '',
            perks: []
        }
        ],
  },
  {
    title: 'Sistema de donativos para alumnos de la UAM-C',
    img: 'http://148.206.168.178/dcni/images/images/1747443079745-DonativosUAMC.webp',
    subtitle: '',
    content: [
      {
        link: 'http://148.206.168.145:8080/JSF2_Prime8/',
        creator: 'César Jovani Rodríguez De Jesús',
        content: [
          '🔄 Reutiliza productos en buen estado dentro de la comunidad UAM-C.\n' +
            '🎁 Publica donaciones fácilmente, desde útiles hasta electrónicos.\n' +
            '🙋‍♀️ Usuarios manifiestan interés, el donador elige al destinatario.\n' +
            '🌱 Reduce el desperdicio, impulsa la economía circular.'
        ],
        technologies: 'JavaServer Faces',
        perks: []
      }
    ],
  },
  {
    title: 'Pequeños Genios',
    img: 'http://148.206.168.178/dcni/images/images/1747443088439-PequenosGenios.webp',
    subtitle: '',
    content: [
      {
        link: '',
        creator: 'Hector Raciel Ledesma Vázquez',
        content: [
          '🎮 Aprendizaje personalizado a través de juegos interactivos adaptados al nivel del niño.\n' +
            '📈 Progresión por niveles de dificultad que se ajustan al ritmo individual.\n' +
            '🏆 Sistema de recompensas con puntos y logros que motivan de forma lúdica.\n' +
            '👨‍👩‍👧 Panel para padres y educadores con indicadores clave y seguimiento en tiempo real.\n' +
            '🔔 Notificaciones y recordatorios para mantener la continuidad educativa.'
        ],
        technologies: 'React y Firebase',
        perks: []
      }
    ],
  },
    {
    title: 'SmartTransport',
    img: 'http://148.206.168.178/dcni/images/images/1747361316179-SmartTransport.webp',
    subtitle: '¿Dónde está mi transporte? ¿Dónde está mi pasaje?',
    content: [
      {
        link: '',
        creator: 'Brenda Abigail Valdez Crisanto',
        content: [
          '📍Ubicación en tiempo real de unidades, paradas cercanas y tiempos estimados de llegada.\n' +
            '🚍 Choferes monitorean la presencia de pasajeros en próximas paradas.\n' +
            '👥 Pasajeros saben exactamente cuándo llegará su transporte.\n' +
            '📲 Requiere app instalada en choferes y pasajeros para su funcionamiento.\n' +
            '⏱️ Evita esperas innecesarias, reduce la incertidumbre en los trayectos.'
        ],
        technologies: '',
        perks: []
      }
    ],
  },
]

async function seed() {
      try {
          console.log('INTENTANTO CONECTAR A LA DB: ', MONGO_URI)
          mongoose.connect(MONGO_URI)
          console.log('DB CONECTADA')
  
          await ImpactoSocial.deleteMany()
  
          await ImpactoSocial.insertMany(seedPIS)
  
          console.log('Semilla insertada con exito en la DB')
          process.exit()
      } catch ( err ) {
          console.error('Error attemping to execute the seed' + err)
      }
  }
  
  seed()