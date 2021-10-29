import React from "react";

const InfoClima = props => {

    return (
        
        <div>

            {
                props.error && 
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperatura ?
                <div className="card card-body">
                    <h4 className="text-center">Informacion del Clima</h4>
                    <p> 
                        Ubicacion: {props.ciudad}, {props.pais}
                    </p>
                    <p>
                        Temperatura: {props.temperatura}°C, {props.descripccion}
                    </p>
                    <p>
                        Humedad: {props.humedad}%
                    </p>
                    <p>
                        Temperatura Maxima: {props.max_temp}°C
                    </p>
                    <p>
                        Temperatura Minima: {props.min_temp}°C
                    </p>
                    <p>
                        Velocidad del Viento: {props.velocidad_viento} m/s
                    </p>
                </div>

                :
                <div className="card card-body text-center">
                    <h5>¡Ingresa la ciudad y el país para que conozcas el estado del clima de la ciudad!</h5>
                </div>
            }

           

        </div>

       
    )

}

export default InfoClima;