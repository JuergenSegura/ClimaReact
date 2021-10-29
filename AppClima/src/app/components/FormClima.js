import React from "react";


const FormClima = props => (
    <div className="card card-body">
        <form onSubmit={props.getClima}>
            <div className="form-group mb-3">
                <input type="text" name="ciudad" placeholder="Indicar la ciudad"
                className="form-control" autoFocus />
            </div>
            <div className="form-group mb-3">
                <input name="pais" placeholder="Indica el pais" className="form-control" />
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-danger ">Obtener Clima</button>
            </div>
        </form>
    </div>
);

export default FormClima;