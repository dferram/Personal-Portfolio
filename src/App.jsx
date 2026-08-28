import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PortfolioHome from '@/pages/HomePortfolio';
import CertificatesPage from '@/pages/CertificatesPage';
import ExperiencesPage from '@/pages/ExperiencesPage';
import ViewExperience from '@/pages/ViewExperience';
import JourneyPage from '@/pages/JourneyPage';
import ThemeAdminPanel from '@/pages/ThemeAdminPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-foreground">
      
      <Navbar /> 

      <main>
        <Routes>
        
          <Route path="/" element={<PortfolioHome />} />
        
          <Route path="/certificados" element={<CertificatesPage />} />
          <Route path="/experiencias" element={<ExperiencesPage />} />
          <Route path="/experiencia/:id" element={<ViewExperience />} />
          <Route path="/recorrido" element={<JourneyPage />} />
          <Route path="/estilos" element={<ThemeAdminPanel />} />
          <Route path="*" element={<PortfolioHome />} />

        </Routes>
      </main>
    </div>
  );
}