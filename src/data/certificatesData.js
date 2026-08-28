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
    id: 'AWS-Cloud-Foundations',
    title: {
      es: 'AWS Academy Cloud Foundations',
      en: 'AWS Academy Cloud Foundations',
    },
    issuer: {
      es: 'Amazon Web Services (AWS)',
      en: 'Amazon Web Services (AWS)',
    },
    date: {
      es: 'Mayo 2026',
      en: 'May 2026',
    },
    imageUrl: `/images/${CERTIFICATE_IMAGES.awsCloudFoundations}`,
  },
  {
    id: 'Google-Build-With-AI',
    title: {
      es: 'Google Build with AI',
      en: 'Google Build with AI',
    },
    issuer: {
      es: 'Google',
      en: 'Google',
    },
    date: {
      es: 'Abril 2026',
      en: 'April 2026',
    },
    imageUrl: `/images/${CERTIFICATE_IMAGES.googleBuildWithAI}`,
  },
  {
    id: 'google-cloud-developer',
    title: {
      es: 'Google Cloud Developer',
      en: 'Google Cloud Developer',
    },
    issuer: {
      es: 'Google Cloud',
      en: 'Google Cloud',
    },
    date: {
      es: 'Agosto 2026',
      en: 'August 2026',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
  },
];

export const CERTIFICATES_DATA = processImagePaths(certificatesDataRaw);
