import Pais from "../models/pais";
import { useEffect, useState } from "react";
import ServicioGenerico from "../services/servicio-pais";
import ApiColombia from "../utilities/dominios/apiColombia";

export const Inicio = () => {

    const [objPais, setObjPais] = useState<Pais>(new Pais(0, "", "", "", "", "", [], "", "", []));

    const obtenerPais = async () => {
        const url = ApiColombia.URL + ApiColombia.DETALLE_COLOMBIA;
        const resultado = await ServicioGenerico.peticionGET(url);

        setObjPais(resultado);
        return resultado;
    }
    useEffect(() => {
        obtenerPais();
    }, [])
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="mt-3">

                        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                            <div className="col-md-11 px-0">
                                <h1 className="display-4 fst-italic">{objPais.name}</h1>
                                <p className="my-3 ">{objPais.description}</p>
                                <p className="mb-0 fw-semibold">Ciudad Capital: {objPais.stateCapital}</p>
                                <p className="mb-0 fw-semibold">Poblacion : {objPais.population}</p>
                                <p className="mb-0 fw-semibold">Moneda : {objPais.currency}</p>
                                <p className="mb-0 fw-semibold">Zona Horaria: {objPais.timeZone}</p>
                                <p className="mb-0 fw-semibold">Lenguajes : {objPais.languages.map((lenguaje) => (
                                    <span>{lenguaje} &nbsp;</span>
                                ))}</p>
                                <p className="mb-0 fw-semibold">Superficie : {objPais.surface} m2</p>
                                <div className="row mt-5">
                                    {
                                        objPais.flags.map((bandera) => (

                                            <div className="col-md-3">
                                                <div className="card shadow-sm">
                                                    <img className="bd-placeholder-img card-img-top"
                                                        style={{ height: "225" }} src={bandera} role="img" />

                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}