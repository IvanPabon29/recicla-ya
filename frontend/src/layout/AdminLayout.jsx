// src/layout/AdminLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarPrivado from '../components/SidebarPrivado';
import HeaderPrivado from '../components/HeaderPrivado';
import FooterPrivate from '../components/FooterPrivado';
import '../styles/adminLayout.css';

/**
 * Layout del panel administrativo.
 * Contiene header, sidebar con opciones exclusivas del admin y footer.
 * Maneja estado de menú responsive.
 */
function AdminLayout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirSidebar = () => setMenuAbierto(true);
  const cerrarSidebar = () => setMenuAbierto(false);

  const opcionesAdmin = [
    { path: '/admin', nombre: 'Inicio', icono: 'bi bi-speedometer2' },
    { path: '/admin/usuarios', nombre: 'Gestión de Usuarios', icono: 'bi bi-people' },
    { path: '/admin/recolectores', nombre: 'Empresas Recolectoras', icono: 'bi bi-truck' },
    { path: '/admin/Solicitudes', nombre: 'Solicitudes', icono: 'bi bi-envelope' },
    { path: '/admin/reportes', nombre: 'Reportes', icono: 'bi bi-bar-chart-line' },
    { path: '/admin/configuraciones', nombre: 'Configuraciones', icono: 'bi bi-gear-fill' },

  ];

  return (
    <div className="layout-admin">
      <SidebarPrivado abierto={menuAbierto} cerrar={cerrarSidebar} rutas={opcionesAdmin} />

      <div className="layout-admin__contenido">
        <HeaderPrivado abrirSidebar={abrirSidebar} />
        
        <main>
          <Outlet />
        </main>

        <FooterPrivate />
      </div>
    </div>
  );
}

export default AdminLayout;
