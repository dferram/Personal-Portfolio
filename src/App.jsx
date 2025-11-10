import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PortfolioHome from '@/pages/HomePortfolio';
import ViewProject from '@/pages/ViewProject';
import CertificatesPage from '@/pages/CertificatesPage';

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-foreground">
      
      <Navbar /> 

      <main>
        <Routes>
        
          <Route path="/" element={<PortfolioHome />} />
        
          <Route path="/proyecto/:id" element={<ViewProject />} />
          <Route path="/certificados" element={<CertificatesPage />} />
          <Route path="*" element={<PortfolioHome />} />

        </Routes>
      </main>
    </div>
  );
}