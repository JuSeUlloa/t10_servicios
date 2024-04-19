import { useParams } from "react-router-dom";

export const DepartamentoPais = () => {

    const codigo = useParams();
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-center">
                <div className="col-md-10">
                  <p>departamentos</p>
                </div>
            </div>
        </div>
    );
}