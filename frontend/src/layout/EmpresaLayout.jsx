// src/layout/EmpresaLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarPrivado from '../components/SidebarPrivado';
import HeaderPrivado from '../components/HeaderPrivado';
import FooterPrivate from '../components/FooterPrivado';
import '../styles/empresaLayout.css';

/**
 * Layout para el panel de empresas recolectoras.
 * Incluye sidebar, header, contenido dinámico y footer.
 * Maneja visibilidad del menú hamburguesa en responsive.
 */
function EmpresaLayout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirSidebar = () => setMenuAbierto(true);
  const cerrarSidebar = () => setMenuAbierto(false);

  const rutasEmpresa = [
    { path: '/empresa', nombre: 'Inicio', icono: 'bi bi-speedometer2' },
    { path: '/empresa/solicitudes', nombre: 'Visualización de Solicitudes', icono: 'bi bi-calendar-check' },
    { path: '/empresa/gestion', nombre: 'Gestión de Recolección', icono: 'bi bi-truck' },
    { path: '/empresa/historial', nombre: 'Historial de Recolecciones', icono: 'bi bi-clock-history' },
    { path: '/empresa/configuraciones', nombre: 'Configuraciones', icono: 'bi bi-gear' }
  ];

  return (
    <div className="layout-empresa">
      <SidebarPrivado abierto={menuAbierto} cerrar={cerrarSidebar} rutas={rutasEmpresa} />

      <div className="layout-empresa__contenido">
        <HeaderPrivado abrirSidebar={abrirSidebar} />

        <main>
          <Outlet />
        </main>

        <FooterPrivate />
      </div>
    </div>
  );
}

export default EmpresaLayout;
