import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { RegionesPais } from "../components/regiones-pais";
import { DepartamentoPais } from "../components/departamento-pais";
import { CiudadesPais } from "../components/ciudades-pais";
import { Error } from "../contenedor/error";
import { Inicio } from "../components/inicio";

const LazyInicio = lazy(() => import('../components/departamento-pais').then(() => ({ default: Inicio })));
const LazyRegion = lazy(() => import('../components/regiones-pais').then(() => ({ default: RegionesPais })));
const LazyDepartamento = lazy(() => import('../components/departamento-pais').then(() => ({ default: DepartamentoPais })));
const LazyCiudad = lazy(() => import('../components/ciudades-pais').then(() => ({ default: CiudadesPais })));


const LazyError = lazy(() => import('../contenedor/error').then(() => ({ default: Error })));

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/region" element={<LazyRegion />} />
            <Route path="/department/:codRegion" element={<LazyDepartamento />} />
            <Route path="/city" element={<LazyCiudad />} />

            <Route path="/" element={<LazyInicio />} />
            <Route path="*" element={<LazyError />} />
        </Routes>

    )
}