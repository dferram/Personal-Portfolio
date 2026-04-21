// ============================================================================
// ARCHIVO DE DATOS: CERTIFICADOS Y DIPLOMAS
// ============================================================================
import { processImagePaths } from '@/utils/paths';
import { CERTIFICATE_IMAGES } from '@/data/config';
// Aquí agregas todos los certificados, diplomas y reconocimientos que has obtenido.
// Pueden ser de cursos online, talleres, conferencias, competencias, etc.
//
// CÓMO PERSONALIZAR:
// 1. Elimina el certificado de ejemplo si no lo tienes
// 2. Agrega tus propios certificados siguiendo la misma estructura
// 3. Sube las imágenes de tus certificados a public/images/
//
// CAMPOS:
// - id: Identificador único (usa-guiones-sin-espacios)
// - title: Nombre del certificado o curso
// - issuer: Institución u organización que lo otorgó
// - date: Fecha en que lo obtuviste (Mes Año)
// - imageUrl: Ruta a la imagen del certificado (/images/nombre.png)
//
// SOBRE LAS IMÁGENES:
// - Puedes tomar una captura de pantalla de tu certificado digital
// - O escanear tu certificado físico
// - Formato recomendado: PNG o JPG
// - Asegúrate de que el texto sea legible
// - Tamaño recomendado: No más de 2MB por imagen
//
// IMPORTANTE:
// - Solo incluye certificados REALES que hayas obtenido
// - Verifica que las imágenes estén en public/images/
// - Mantén el formato { es: "texto", en: "text" } para multiidioma
// ============================================================================

const certificatesDataRaw = [
  {
    id: 'Santander-Data-Science',
    title: {
      es: 'Introducción a la Ciencia de Datos',
      en: 'Introduction to Data Science',
    },
    issuer: {
      es: 'Santander',
      en: 'Santander',
    },
    date: {
      es: 'Octubre 2025',
      en: 'October 2025',
    },
    imageUrl: `/images/${CERTIFICATE_IMAGES.santanderDataScience}`,
  },
 
];

export const CERTIFICATES_DATA = processImagePaths(certificatesDataRaw);

// ============================================================================
// PLANTILLA PARA AGREGAR UN NUEVO CERTIFICADO
// ============================================================================
// Copia este bloque, pégalo dentro del array CERTIFICATES_DATA,
// y personalízalo con la información de tu certificado.
//
// RECUERDA: Agrega una coma después del último certificado existente
// ============================================================================
/*
{
  // Identificador único - usa el nombre del curso o certificado
  // Ejemplo: "react-avanzado", "python-basico", "hackathon-2025"
  id: 'nombre-del-certificado',
  
  // Nombre completo del certificado o curso
  title: {
    es: 'Nombre del Certificado en Español',
    en: 'Certificate Name in English',
  },
  
  // Institución, plataforma o empresa que otorgó el certificado
  // Ejemplos: "Coursera", "Udemy", "Google", "Universidad X", "Platzi"
  issuer: {
    es: 'Nombre de la Institución',
    en: 'Institution Name',
  },
  
  // Fecha en que obtuviste el certificado
  // Formato recomendado: "Mes Año" (ej: "Enero 2025", "Diciembre 2024")
  date: {
    es: 'Mes Año',
    en: 'Month Year',
  },
  
  // Ruta a la imagen del certificado
  // 1. Guarda la imagen en: public/images/
  // 2. Usa un nombre descriptivo: certificado-react.png, diploma-python.jpg
  // 3. La ruta debe empezar con /images/
  imageUrl: '/images/nombre-de-tu-certificado.png',
  
  // OPCIONAL: Si el certificado tiene un ID o URL de verificación
  // Descomenta y agrega la información:
  // credentialId: 'ABC123XYZ',
  // credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ABC123',
},
*/

// ============================================================================
// CONSEJOS PARA UNA BUENA SECCIÓN DE CERTIFICADOS:
// ============================================================================
// 1. Calidad sobre cantidad: Es mejor mostrar 3-5 certificados relevantes
//    que 20 certificados de cursos de 1 hora.
//
// 2. Relevancia: Prioriza certificados relacionados con tu área de interés
//    o el tipo de trabajo que buscas.
//
// 3. Actualidad: Los certificados recientes son más valiosos. Si tienes
//    certificados muy antiguos, considera si aún son relevantes.
//
// 4. Instituciones reconocidas: Certificados de Google, Microsoft, AWS,
//    universidades, etc. tienen más peso que cursos desconocidos.
//
// 5. Incluye todo tipo de reconocimientos:
//    - Cursos online (Coursera, Udemy, Platzi, etc.)
//    - Certificaciones oficiales (AWS, Google Cloud, etc.)
//    - Diplomas de talleres o conferencias
//    - Premios en hackathons o competencias
//    - Reconocimientos académicos
//
// 6. Cómo obtener la imagen del certificado:
//    - Cursos online: Descarga el PDF y toma captura o conviértelo a imagen
//    - Certificados físicos: Escanea o toma una foto bien iluminada
//    - Usa herramientas como Canva si quieres mejorar la presentación
//
// 7. Optimiza las imágenes:
//    - Usa https://tinypng.com/ para reducir el tamaño sin perder calidad
//    - Asegúrate de que el texto sea legible
//    - Recorta espacios en blanco innecesarios
// ============================================================================

// ============================================================================
// ¿NO TIENES CERTIFICADOS AÚN?
// ============================================================================
// ¡No te preocupes! Aquí hay recursos donde puedes obtener certificados GRATIS:
//
// Plataformas en Español:
// - Google Actívate: https://learndigital.withgoogle.com/activate
// - Platzi (algunos cursos gratis): https://platzi.com/
// - edX (auditoría gratis): https://www.edx.org/
//
// Plataformas en Inglés:
// - freeCodeCamp: https://www.freecodecamp.org/ (100% gratis)
// - Coursera (auditoría gratis): https://www.coursera.org/
// - Microsoft Learn: https://learn.microsoft.com/
// - Google Cloud Skills Boost: https://www.cloudskillsboost.google/
// - AWS Training: https://aws.amazon.com/training/
// - Cisco Networking Academy: https://www.netacad.com/
//
// Tip: Muchas plataformas ofrecen auditoría gratis (puedes tomar el curso
// sin pagar, solo pagas si quieres el certificado oficial).
// ============================================================================
