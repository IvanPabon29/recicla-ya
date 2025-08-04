import '../../styles/Reportes.css';
import { useState } from 'react';

function Reportes() {
  const [tipo, setTipo] = useState('usuario');

  return (
    <div className="reportes-admin">
      <h2>📊 Generar Reportes</h2>

      {/* Tabs */}
      <div className="tabs-reportes">
        <button
          className={tipo === 'usuario' ? 'activo' : ''}
          onClick={() => setTipo('usuario')}
        >
          Por Usuario
        </button>
        <button
          className={tipo === 'localidad' ? 'activo' : ''}
          onClick={() => setTipo('localidad')}
        >
          Por Localidad
        </button>
        <button
          className={tipo === 'empresa' ? 'activo' : ''}
          onClick={() => setTipo('empresa')}
        >
          Por Empresa
        </button>
      </div>

      {/* Filtros */}
      <form className="form-reportes">
        <div className="grupo">
          <label>Desde</label>
          <input type="date" />
        </div>

        <div className="grupo">
          <label>Hasta</label>
          <input type="date" />
        </div>

        <div className="grupo">
          <label>Tipo de residuo</label>
          <select>
            <option value="">Todos</option>
            <option value="plástico">Plástico</option>
            <option value="papel">Papel</option>
            <option value="vidrio">Vidrio</option>
            <option value="orgánico">Orgánico</option>
            <option value="peligroso">Peligroso</option>
          </select>
        </div>

        <button type="submit" className="btn-generar">
          Generar Reporte
        </button>
      </form>
    </div>
  );
}

export default Reportes;
