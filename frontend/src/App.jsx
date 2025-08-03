import './App.css';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Login from './pages/Login';
import PrivadoLayout from './layout/PrivateLayout';
import AdminLayout from './layout/AdminLayout';

import Dashboard from './pages/Dashboard';
import Recolecciones from './pages/Recolecciones';
import Historial from './pages/Historial';
import Puntos from './pages/Puntos';
import Perfil from './pages/Perfil';

import AdminDashboard from './pages/admin/AdminDashboard';
import GestionUsuarios from './pages/admin/GestionUsuarios';
import EmpresasRecolectoras from './pages/admin/EmpresasRecolectoras';
import Solicitudes from './pages/admin/Solicitudes';
import Reportes from './pages/admin/Reportes';
import Configuraciones from './pages/admin/Configuraciones';

function App() {
  return (
    <Routes>

      {/* Layout público */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />

      {/* Layout privado para usuarios */}
      <Route path="/panel" element={<PrivadoLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="recolecciones" element={<Recolecciones />} />
        <Route path="historial" element={<Historial />} />
        <Route path="puntos" element={<Puntos />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>

      {/* Layout privado para admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="usuarios" element={<GestionUsuarios />} />
        <Route path="recolectores" element={<EmpresasRecolectoras />} />
        <Route path="solicitudes" element={<Solicitudes />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="configuraciones" element={<Configuraciones />} />
      </Route>
      
    </Routes>
  );
}

export default App;
