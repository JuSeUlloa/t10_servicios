
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Cabecera } from './app/contenedor/cabecera';
import { Ruteo } from './app/routes/ruteo';
import { Suspense } from 'react';

/* Carga componentes */
const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
        Cargando ...
      </button>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={cargando}>
        <Cabecera />
        <Ruteo />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
