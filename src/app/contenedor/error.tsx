import { useNavigate } from "react-router-dom";

export const Error = () => {
    const regresar = useNavigate();
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-dark rounded-3 text-center">
                    <span >
                        <strong style={{ fontSize: "150px", fontFamily: "-moz-initial" }}> 404</strong>
                    </span>
                    <p className="fw-semibold">Recurso no encontrado</p>
                    <button className="btn btn-outline-primary" onClick={() => regresar(-1)}>
                        <i className="fa-solid fa-arrow-left"></i> Regresar
                    </button>
                </div>
            </div>
        </div>

    );

}