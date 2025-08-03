// src/layout/PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';

/**
 * Layout para páginas públicas como Home, Quienes Somos, etc.
 * Incluye header y footer, además del contenido dinámico mediante <Outlet />
 */
function PublicLayout() {
  return (
    <div className="layout-public">
      <Header />
            
      {/* Contenido principal que representa las páginas públicas */}
      <main className="public-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PublicLayout;
