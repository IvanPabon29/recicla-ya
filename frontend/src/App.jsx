import './App.css';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';

// Páginas públicas
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Registro from './pages/public/Registro';

// Páginas privadas (usuario normal)
import Perfil from './pages/private/Perfil';
import Dashboard from './pages/private/Dashboard';
import Recolecciones from './pages/private/Recolecciones';
import Reporte from './pages/private/Reporte';
import Historial from './pages/private/Historial';
import Puntos from './pages/private/Puntos';
// import ReporteUsuario from './pages/private/ReporteUsuario';

function App() {
  return (
    <Routes>
      {/* Layout público */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Layout privado */}
      <Route element={<PrivateLayout />}>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recolecciones" element={<Recolecciones />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/puntos" element={<Puntos />} />
        {/* <Route path="/reporte" element={<ReporteUsuario />} /> */}
      </Route>

    </Routes>
  );
}

export default App;
