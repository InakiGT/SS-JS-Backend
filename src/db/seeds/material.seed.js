import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Material } from '../schemas/material.schema.js'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || ''

const seedMaterial = [
    {
      img: 'Curso1.png',
      title: 'Auto Aprendizaje de Aplicaciones Web y Android',
      content: [
        { title: 'Aprende React', content: 'Aprender a construir una aplicación web con React por primera vez es desafiante debido a la necesidad de integrar conocimientos previos y adquirir nuevos conocimientos relacionados con React y su entorno de programación. Los videos educativos y los manuales son opciones populares, pero este curso ofrece una alternativa autocontenido con enlaces para profundizar en temas específicos.', link: 'https://aprendereactapp.web.app/' },
        { title: 'SAAndroid ST', content: 'Este curso te llevará a través de un viaje de aprendizaje paso a paso para dominar el desarrollo de aplicaciones Android utilizando Android Studio de manera fácil y efectiva. Desde los conceptos básicos hasta técnicas avanzadas, explorarás cómo crear aplicaciones móviles impresionantes con una curva de aprendizaje suave y un enfoque práctico.', link: 'http://148.206.168.145:8080/SAAndroit_JSF/' },
        { title: 'SEAWeb 1', content: 'Bienvenido al curso de desarrollo web donde aprenderás los fundamentos de aplicaciones web, desde HTML básico hasta el manejo de servidores Java con Servlets y JSP, incluyendo el acceso a bases de datos.', link: 'http://148.206.168.124:8080/seaweb/' },
        { title: 'SEAWeb 2', content: 'JavaServer Faces (JSF) es un marco de desarrollo de aplicaciones web en Java que simplifica el proceso de creación de interfaces de usuario al separar la presentación de la lógica de la aplicación. Utiliza páginas Facelets que contienen componentes de alto nivel para interactuar con el servidor de manera independiente.', link: 'http://148.206.168.124:8080/seaweb/' },
      ]
    },
    {
      img: 'VAEP.png',
      title: 'Sistema de Videojuegos de Apoyo a la Enseñanza para Profesores (VAEP)',
      content: [
        { title: 'Sistema de Videojuegos de Apoyo a la Enseñanza para Profesores (VAEP)', content: '', link: 'https://vaep-uamc.web.app/' }
      ],
    },
    {
      img: 'Curso6.png',
      title: 'Página de los Diagramas de Transición entre Interfaces de Usuario (DTIU)',
      content: [
        { title: 'DTIU', content: 'Los Diagramas de Transición entre Interfaces de Usuario (DTIU) son una herramienta que sirve para modelar el flujo entre las diferentes interfaces que se le presentan al usuario en un sistema de software. En la Página del DTIU (UITD en inglés) encontrarás explicaciones, ejemplos, un editor especializado y más.', link: 'https://uitd-portal.firebaseapp.com/' },
      ]
    },
    {
      img: 'Curso2.png',
      title: 'Sistema de apoyo a “Calidad y Pruebas” (QualiTeam)',
      content: [
        { title: 'Qualiteam', content: 'QualiTeam es una aplicación web que ayuda al control de la documentación asociada a proyectos de desarrollo de software siguiendo los principios y procedimientos del aseguramiento de la calidad de la Ingeniería del Software.', link: 'http://qualiteam.cua.uam.mx:8080/QualiTeam/' },
        { title: 'Libro de Texto', content: 'En el libro Calidad y Pruebas en el Desarrollo de Software, hay prácticas diseñadas para que con QualiTeam reafirmes los conceptos aprendidos en la teoría.', link: 'http://ilitia.cua.uam.mx:8080/jspui/' }
      ]
    },
    {
      img: 'Curso3.png',
      title: 'Sistema Interactivo de Metodos Númericos (SIMetNum)',
      content: [
        { title: 'SIMetNum', content: 'SIMetNum es una herramienta didáctica que permite obtener rápidamente resultados, parciales y finales de los métodos numéricos que contiene. Su propósito es que los usuarios puedan ejecutar fácilmente diversos métodos numéricos y estudiar sus propiedades.', link: 'http://148.206.168.145:8080/SiMetNum/' },
        { title: 'Libro de Texto', content: 'El libro Practicas con SIMetNum: Material de apoyo para la impartición de métodos numéricos, contiene una breve explicación de los métodos y prácticas diseñadas para ilustrar con SIMetNum propiedades clave de cada uno.', link: 'http://ilitia.cua.uam.mx:8080/jspui/' },
      ]
    },
    {
      img: 'Curso4.png',
      title: 'Proyectos de Impacto Social',
      content: [
        { content: 'En este apartado hay diferentes tipos de proyectos destinados a contribuir a la sociedad.', link: '/ProyectoImpactoSocialJSF/' },
      ]
    },
]

async function seed() {
      try {
          console.log('INTENTANTO CONECTAR A LA DB: ', MONGO_URI)
          mongoose.connect(MONGO_URI)
          console.log('DB CONECTADA')
  
          await Material.deleteMany()
  
          await Material.insertMany(seedMaterial)
  
          console.log('Semilla insertada con exito en la DB')
          process.exit()
      } catch ( err ) {
          console.error('Error attemping to execute the seed' + err)
      }
  }
  
  seed()