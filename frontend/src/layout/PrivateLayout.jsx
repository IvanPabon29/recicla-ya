// src/layouts/LayoutPrivado.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarPrivado from '../components/SidebarPrivado';
import HeaderPrivado from '../components/HeaderPrivado';
import FooterPrivate from '../components/FooterPrivado';
import '../styles/LayoutPrivado.css';

/**
 * Layout privado para usuarios autenticados.
 * Contiene:
 * - Sidebar (con responsive hamburguesa)
 * - Header superior
 * - Área principal con rutas hijas
 * - Footer con nombre, ícono y año
 */
function LayoutPrivado() {
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const abrirSidebar = () => setSidebarAbierto(true);
  const cerrarSidebar = () => setSidebarAbierto(false);

  return (
    <div className="layout-privado">
      {/* Sidebar lateral */}
      <SidebarPrivado abierto={sidebarAbierto} cerrar={cerrarSidebar} />

      {/* Contenido principal */}
      <div className="contenido-principal">
        {/* Header fijo */}
        <HeaderPrivado abrirSidebar={abrirSidebar} />

        {/* Contenedor con scroll independiente */}
        <main className="main-privado">
          <Outlet />
        </main>

        {/* Footer */}
        <FooterPrivate />
      </div>
    </div>
  );
}

export default LayoutPrivado;
