import { getImagePath } from '@/utils/paths';

export const JOURNEY_DATA = [
  {
    id: 'colgate-palmolive',
    title: {
      es: 'Colgate-Palmolive',
      en: 'Colgate-Palmolive',
    },
    role: {
      es: 'Intern Data Analyst Procurement',
      en: 'Intern Data Analyst Procurement',
    },
    date: {
      es: 'Junio 2026 - Presente',
      en: 'June 2026 - Present',
    },
    description: {
      es: 'Internship en desarrollo de software y tecnología.',
      en: 'Internship in software development and technology.',
    },
    imageUrl: getImagePath('/work/colgate-palmolive.png'), // Work images are in public/work
  },
  {
    id: 'razo-connect',
    title: {
      es: 'Razo Connect',
      en: 'Razo Connect',
    },
    role: {
      es: 'Full-Stack Developer & Data Architect',
      en: 'Full-Stack Developer & Data Architect',
    },
    date: {
      es: 'Diciembre 2025 - En desarrollo',
      en: 'December 2025 - In development',
    },
    description: {
      es: 'Ecosistema ERP y E-commerce para Centro Mayorista. Desarrollo Full-Stack para centralizar la operación B2B/B2C.',
      en: 'ERP Ecosystem and E-commerce for Wholesale Center. Full-Stack development to centralize B2B/B2C operations.',
    },
    imageUrl: getImagePath('/work/Logo_Razo.png'),
  },
];
