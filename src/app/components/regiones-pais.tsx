import { useEffect, useState } from "react";
import Region from "../models/region";
import ApiColombia from "../utilities/dominios/apiColombia";
import ServicioGenerico from "../services/servicio-pais";
import { Link } from "react-router-dom";

export const RegionesPais = () => {


    const [arregloRegiones, setArregloRegiones] = useState<Region[]>([]);

    const obtenerRegiones = async () => {
        const url = ApiColombia.URL + ApiColombia.REGIONES_COLOMBIA;
        const resultado = await ServicioGenerico.peticionGET(url);
        setArregloRegiones(resultado);
        return resultado;
    }
    useEffect(() => {
        obtenerRegiones();
    }, [])

    return (
        <div className="mt-3">
            <div className="d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="row">
                        {
                            arregloRegiones.map((region) => (

                                <div className="col-md-4">
                                    <div className="card mb-4 rounded-3 shadow-sm">
                                        <div className="card-header py-3">
                                            <h5 className="my-0 f-s">
                                                <span className="fw-semibold">Region </span>
                                                {region.name}
                                            </h5>
                                            <span className="fw-semibold"></span>
                                        </div>
                                        <div className="h-100 card-body">
                                             <span>
                                                <p>
                                                    {region.description}
                                                </p>
                                            </span>
                                        </div>
                                        <div className="card-footer">
                                            <Link type="button" className="w-100 btn btn-lg btn-outline-primary" to={`/department/${region.id}`}>
                                                Departamentos</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}